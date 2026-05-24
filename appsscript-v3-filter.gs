const SHEET_NAME = "Youcan-Orders";

function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      return output(e, { success: false, error: "Sheet not found: " + SHEET_NAME });
    }

    const values = sheet.getDataRange().getValues();
    if (values.length < 2) {
      return output(e, {
        success: true,
        updatedAt: new Date().toISOString(),
        totalRows: 0,
        filteredRows: 0,
        filters: getFilters(e),
        summary: emptySummary(),
        orders: []
      });
    }

    const headers = values[0].map(h => String(h).trim());
    const rows = values.slice(1).filter(r => r.some(c => c !== "" && c !== null));

    let data = rows.map(row => {
      const obj = {};
      headers.forEach((h, i) => obj[h] = row[i]);
      return obj;
    });

    const totalRows = data.length;
    const filters = getFilters(e);
    data = filterByDate(data, filters.start, filters.end);

    return output(e, {
      success: true,
      updatedAt: new Date().toISOString(),
      totalRows: totalRows,
      filteredRows: data.length,
      filters: filters,
      summary: buildSummary(data),
      orders: recentOrders(data)
    });
  } catch (err) {
    return output(e, { success: false, error: String(err && err.message ? err.message : err) });
  }
}

function output(e, obj) {
  const callback = e && e.parameter && e.parameter.callback;
  const json = JSON.stringify(obj);

  if (callback) {
    return ContentService
      .createTextOutput(callback + "(" + json + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

function getFilters(e) {
  return {
    start: e && e.parameter && e.parameter.start ? String(e.parameter.start) : "",
    end: e && e.parameter && e.parameter.end ? String(e.parameter.end) : ""
  };
}

function filterByDate(data, start, end) {
  if (!start && !end) return data;

  const startDate = start ? new Date(start + "T00:00:00") : null;
  const endDate = end ? new Date(end + "T23:59:59") : null;

  return data.filter(o => {
    const d = parseOrderDate(o["Order date"]);
    if (!d) return false;
    if (startDate && d < startDate) return false;
    if (endDate && d > endDate) return false;
    return true;
  });
}

function parseOrderDate(raw) {
  if (!raw) return null;
  if (raw instanceof Date) return raw;
  const s = String(raw).trim();
  const d = new Date(s.replace(" ", "T"));
  return isNaN(d.getTime()) ? null : d;
}

function emptySummary() {
  return {
    totalOrders: 0,
    confirmed: 0,
    cancelled: 0,
    noResponse: 0,
    delivered: 0,
    deliveryCancelled: 0,
    deliveryNoResponse: 0,
    deliveryReported: 0,
    revenueConfirmed: 0,
    revenueDelivered: 0,
    confirmationRate: 0,
    deliveryRate: 0,
    aov: 0,
    realAovDelivered: 0,
    topCities: [],
    topProducts: [],
    topVariants: [],
    ordersByDay: [],
    confirmationStatus: [],
    deliveryStatus: [],
    productDelivered: []
  };
}

function buildSummary(data) {
  const totalOrders = data.length;
  const confirmed = data.filter(o => isConfirmed(o["Confirmation"])).length;
  const cancelled = data.filter(o => isCancelled(o["Confirmation"])).length;
  const noResponse = data.filter(o => isNoResponse(o["Confirmation"])).length;

  const delivered = data.filter(o => isDelivered(o["Delivred"])).length;
  const deliveryCancelled = data.filter(o => isCancelled(o["Delivred"])).length;
  const deliveryNoResponse = data.filter(o => isNoResponse(o["Delivred"])).length;
  const deliveryReported = data.filter(o => clean(o["Delivred"]).includes("reporte")).length;

  const revenueConfirmed = data
    .filter(o => isConfirmed(o["Confirmation"]))
    .reduce((sum, o) => sum + toNumber(o["price"]), 0);

  const revenueDelivered = data
    .filter(o => isDelivered(o["Delivred"]))
    .reduce((sum, o) => sum + toNumber(o["price"]), 0);

  return {
    totalOrders,
    confirmed,
    cancelled,
    noResponse,
    delivered,
    deliveryCancelled,
    deliveryNoResponse,
    deliveryReported,
    revenueConfirmed,
    revenueDelivered,
    confirmationRate: totalOrders ? confirmed / totalOrders : 0,
    deliveryRate: confirmed ? delivered / confirmed : 0,
    aov: confirmed ? revenueConfirmed / confirmed : 0,
    realAovDelivered: delivered ? revenueDelivered / delivered : 0,
    topCities: countTop(data, "City", true),
    topProducts: countTop(data, "Product name", false),
    topVariants: countTop(data, "Product variant", false),
    ordersByDay: ordersByDay(data),
    confirmationStatus: statusCount(data, "Confirmation"),
    deliveryStatus: statusCount(data, "Delivred"),
    productDelivered: productDeliveredStats(data)
  };
}

function clean(value) {
  return String(value || "").trim().toLowerCase();
}

function isConfirmed(value) {
  return clean(value).includes("confirmer");
}

function isCancelled(value) {
  return clean(value).includes("annuler");
}

function isDelivered(value) {
  return clean(value).includes("livree");
}

function isNoResponse(value) {
  const s = clean(value);
  return s.includes("pas de réponse") ||
         s.includes("pas de reponse") ||
         s.includes("reminder") ||
         s.includes("appel pas de reponse");
}

function toNumber(value) {
  if (typeof value === "number") return value;
  return Number(String(value || "0").replace(",", ".").replace(/[^\d.]/g, "")) || 0;
}

function normalizeCity(city) {
  let c = String(city || "Unknown").trim();
  if (!c) return "Unknown";

  let lower = c.toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[‏\u200f\u200e]/g, "")
    .trim();

  const map = {
    "marrakech": "Marrakech",
    "marakeche": "Marrakech",
    "marrakesh": "Marrakech",
    "مراكش": "Marrakech",
    "مركش": "Marrakech",
    "ايت اورير مراكش": "Marrakech",
    "casablanca": "Casablanca",
    "casablanca ": "Casablanca",
    "الدار البيضاء": "Casablanca",
    "casa": "Casablanca",
    "rabat": "Rabat",
    "الرباط": "Rabat",
    "fes": "Fes",
    "فاس": "Fes",
    "agadir": "Agadir",
    "ait meloul": "Agadir",
    "أكادير": "Agadir",
    "sale": "Sale",
    "سلا": "Sale",
    "tanger": "Tanger",
    "طنجة": "Tanger",
    "meknes": "Meknes",
    "meknès": "Meknes",
    "مكناس": "Meknes",
    "safi": "Safi",
    "اسفي": "Safi"
  };
  return map[lower] || c;
}

function countTop(data, key, normalizeCities) {
  const map = {};
  data.forEach(o => {
    let value = String(o[key] || "Unknown").trim();
    if (normalizeCities) value = normalizeCity(value);
    if (!value) return;
    map[value] = (map[value] || 0) + 1;
  });

  return Object.entries(map)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
}

function statusCount(data, key) {
  const map = {};
  data.forEach(o => {
    let value = String(o[key] || "").trim();
    if (!value) value = "فارغ";
    map[value] = (map[value] || 0) + 1;
  });

  return Object.entries(map)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

function ordersByDay(data) {
  const map = {};
  data.forEach(o => {
    const d = parseOrderDate(o["Order date"]);
    if (!d) return;
    const dateKey = Utilities.formatDate(d, Session.getScriptTimeZone(), "yyyy-MM-dd");
    map[dateKey] = (map[dateKey] || 0) + 1;
  });

  return Object.entries(map)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function productDeliveredStats(data) {
  const map = {};
  data.forEach(o => {
    if (!isDelivered(o["Delivred"])) return;
    const product = String(o["Product name"] || "Unknown").trim();
    const price = toNumber(o["price"]);

    if (!map[product]) {
      map[product] = { name: product, delivered: 0, revenue: 0 };
    }

    map[product].delivered += 1;
    map[product].revenue += price;
  });

  return Object.values(map).sort((a, b) => b.delivered - a.delivered);
}

function recentOrders(data) {
  return data
    .slice()
    .reverse()
    .slice(0, 20)
    .map(o => ({
      date: o["Order date"] || "",
      name: o["First name"] || "",
      phone: o["Phone"] || "",
      city: normalizeCity(o["City"] || ""),
      product: o["Product name"] || "",
      variant: o["Product variant"] || "",
      price: toNumber(o["price"]),
      confirmation: o["Confirmation"] || "",
      delivered: o["Delivred"] || ""
    }));
}
