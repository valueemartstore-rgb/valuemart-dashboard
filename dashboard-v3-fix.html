<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>VALUEMART Dashboard Fix</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
    :root{--b:#03071E;--g:#FFD166;--m:#9ca8c7;--bd:rgba(255,255,255,.12)}
    *{box-sizing:border-box}
    body{margin:0;font-family:Cairo,sans-serif;background:radial-gradient(circle at top right,rgba(45,212,191,.14),transparent 30%),var(--b);color:#fff}
    .app{display:grid;grid-template-columns:260px 1fr;min-height:100vh}
    .hide .app{grid-template-columns:0 1fr}
    aside{position:sticky;top:0;height:100vh;padding:20px;border-left:1px solid var(--bd);background:rgba(255,255,255,.05);overflow:hidden}
    .hide aside{display:none}
    .brand{border:1px solid var(--bd);border-radius:22px;padding:16px;margin-bottom:16px;background:rgba(255,255,255,.07)}
    .brand b{font-size:22px}
    .nav a{display:flex;justify-content:space-between;text-decoration:none;color:#eef3ff;padding:13px;border-radius:15px;font-weight:900;margin:7px 0}
    .nav a:hover,.nav a.active{background:rgba(255,255,255,.09)}
    main{padding:24px}
    .top{display:flex;justify-content:space-between;gap:15px;align-items:center;margin-bottom:20px}
    h1{margin:0;font-size:28px}
    .sub{color:var(--m);font-weight:700}
    .actions{display:flex;gap:10px;flex-wrap:wrap}
    button,.pill{border:1px solid var(--bd);border-radius:999px;padding:11px 15px;font-family:Cairo;font-weight:900}
    .btn{background:linear-gradient(135deg,var(--g),#ffb703);color:var(--b);border:0}
    .ghost,.pill{background:rgba(255,255,255,.08);color:#fff}
    .card{background:linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.055));border:1px solid var(--bd);border-radius:22px;padding:18px;box-shadow:0 20px 60px rgba(0,0,0,.35)}
    .grid{display:grid;gap:16px}
    .kpis{grid-template-columns:repeat(5,1fr)}
    .two{grid-template-columns:1.5fr 1fr}
    .four{grid-template-columns:repeat(4,1fr)}
    .filter{grid-template-columns:repeat(6,1fr);align-items:end}
    .section{margin-top:26px}
    .head{display:flex;justify-content:space-between;margin-bottom:14px}
    .kpi{min-height:135px}
    .kt{color:#dbe6ff;font-weight:900}
    .val{font-size:31px;font-weight:900;margin:18px 0 6px}
    .note{color:var(--m);font-size:12px;font-weight:800}
    label{display:block;color:#dbe6ff;font-size:12px;font-weight:900;margin-bottom:8px}
    input,select{width:100%;background:rgba(3,7,30,.76);border:1px solid var(--bd);color:#fff;border-radius:15px;padding:12px;font-family:Cairo;font-weight:900}
    input[type=date]{direction:ltr}
    canvas{max-height:330px}
    .chart{min-height:390px}
    table{width:100%;border-collapse:collapse}
    th,td{padding:12px 8px;border-bottom:1px solid rgba(255,255,255,.08);text-align:right;font-size:13px}
    th{color:var(--g)}
    .badge{display:inline-flex;min-width:34px;justify-content:center;background:rgba(45,212,191,.12);color:#8ff7e9;border-radius:999px;padding:4px 10px;font-weight:900}
    .loader,.err{padding:22px;border-radius:20px;border:1px solid var(--bd);font-weight:900;text-align:center}
    .loader{color:var(--g)}
    .err{display:none;color:#fecdd3;background:rgba(251,113,133,.10)}
    @media(max-width:1100px){
      .kpis{grid-template-columns:repeat(2,1fr)}
      .two,.four,.filter{grid-template-columns:1fr 1fr}
    }
    @media(max-width:760px){
      .app{display:block}
      aside{display:none}
      main{padding:14px}
      .top{display:block}
      .actions{margin-top:12px}
      .kpis,.two,.four,.filter{grid-template-columns:1fr}
      .card{border-radius:18px;padding:15px}
      .val{font-size:27px}
      table{display:block;overflow-x:auto;white-space:nowrap}
    }
  </style>
</head>

<body>
<div class="app">
  <aside>
    <div class="brand">
      <b>VALUEMART</b>
      <div class="sub">Dashboard Pro</div>
    </div>
    <div class="nav">
      <a class="active" href="#filters">🗓️ الفلترة <b>01</b></a>
      <a href="#overview">📊 نظرة عامة <b>02</b></a>
      <a href="#profit">💰 الربح <b>03</b></a>
      <a href="#charts">📈 الرسوم <b>04</b></a>
      <a href="#tables">📋 الجداول <b>05</b></a>
    </div>
  </aside>

  <main>
    <div class="top">
      <div>
        <h1>📊 VALUEMART Growth Dashboard</h1>
        <div class="sub">Responsive + Filter fixed + Profit by product</div>
      </div>
      <div class="actions">
        <button class="ghost" onclick="toggleSide()" id="sideBtn">إخفاء القائمة ☰</button>
        <span class="pill" id="status">⏳ كنجبد الداتا...</span>
        <button class="btn" onclick="loadData()">تحديث 🔄</button>
      </div>
    </div>

    <div id="err" class="err"></div>
    <div id="loader" class="loader">⏳ كنجبد الطلبات من Google Sheet...</div>

    <div id="content" style="display:none">
      <section id="filters" class="section">
        <div class="head">
          <h2>🗓️ فترة النتائج</h2>
          <span class="sub">اختار نهار ولا سيمانة ولا شهر</span>
        </div>
        <div class="card">
          <div class="grid filter">
            <div>
              <label>اختيار سريع</label>
              <select id="quick" onchange="quickFilter()">
                <option value="all">كلشي</option>
                <option value="today">اليوم</option>
                <option value="yesterday">البارح</option>
                <option value="7">آخر 7 أيام</option>
                <option value="week">هاد السيمانة</option>
                <option value="month">هاد الشهر</option>
              </select>
            </div>
            <div>
              <label>من</label>
              <input type="date" id="start">
            </div>
            <div>
              <label>حتى</label>
              <input type="date" id="end">
            </div>
            <div>
              <button class="btn" onclick="customFilter()">طبق الفلتر</button>
            </div>
            <div>
              <button class="ghost" onclick="resetFilter()">عرض كلشي</button>
            </div>
            <div>
              <span class="pill" id="flabel">كلشي</span>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" class="section">
        <div class="head">
          <h2>نظرة عامة</h2>
          <span class="sub">حسب الفلتر</span>
        </div>

        <div class="grid kpis">
          <div class="card kpi"><div class="kt">مجموع الطلبات 🛒</div><div class="val" id="totalOrders">0</div><div class="note">كل الطلبات</div></div>
          <div class="card kpi"><div class="kt">الطلبات المؤكدة ✅</div><div class="val" id="confirmed">0</div><div class="note">Confirmed</div></div>
          <div class="card kpi"><div class="kt">الطلبات الملغية ❌</div><div class="val" id="cancelled">0</div><div class="note">Cancelled</div></div>
          <div class="card kpi"><div class="kt">طلبات توصلات 🚚</div><div class="val" id="delivered">0</div><div class="note">Delivered</div></div>
          <div class="card kpi"><div class="kt">ما جاوبوش 📵</div><div class="val" id="noResponse">0</div><div class="note">Follow-up</div></div>
        </div>

        <div class="grid kpis" style="margin-top:16px">
          <div class="card kpi"><div class="kt">Revenue Confirmed</div><div class="val" id="revenueConfirmed">0</div><div class="note">درهم</div></div>
          <div class="card kpi"><div class="kt">Revenue Delivered</div><div class="val" id="revenueDelivered">0</div><div class="note">درهم</div></div>
          <div class="card kpi"><div class="kt">نسبة التأكيد</div><div class="val" id="confirmationRate">0%</div><div class="note">هدفنا 70%+</div></div>
          <div class="card kpi"><div class="kt">نسبة التوصيل</div><div class="val" id="deliveryRate">0%</div><div class="note">Confirmed → Delivered</div></div>
          <div class="card kpi"><div class="kt">AOV</div><div class="val" id="aov">0</div><div class="note">متوسط الطلب</div></div>
        </div>
      </section>

      <section id="profit" class="section">
        <div class="head">
          <h2>💰 الربح الحقيقي</h2>
          <span class="sub">حسب الربح لكل produit</span>
        </div>

        <div class="grid four">
          <div class="card"><label>Ad Spend $</label><input id="adSpend" type="number" value="86.77" oninput="calcProfit()"></div>
          <div class="card"><label>USD/MAD</label><input id="usdMad" type="number" value="10" oninput="calcProfit()"></div>
          <div class="card"><label>Spend MAD manual</label><input id="manualSpend" type="number" value="0" oninput="calcProfit()"><div class="note">إلا خليتيه 0 يحسب $×الصرف</div></div>
          <div class="card"><label>Default profit/order</label><input id="defaultProfit" type="number" value="70" oninput="calcProfit()"></div>
        </div>

        <div class="grid kpis" style="margin-top:16px">
          <div class="card kpi"><div class="kt">Gross Profit</div><div class="val" id="grossProfit">0</div></div>
          <div class="card kpi"><div class="kt">Ad Spend MAD</div><div class="val" id="adSpendMad">0</div></div>
          <div class="card kpi"><div class="kt">Net Profit</div><div class="val" id="netProfit">0</div></div>
          <div class="card kpi"><div class="kt">Margin</div><div class="val" id="profitMargin">0%</div></div>
          <div class="card kpi"><div class="kt">CPP الحقيقي</div><div class="val" id="realCpp">0</div></div>
        </div>

        <div class="card" style="margin-top:16px">
          <h3>Profit by Product</h3>
          <table>
            <thead>
              <tr>
                <th>Produit</th>
                <th>Delivered</th>
                <th>Revenue</th>
                <th>Profit/order</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody id="profitTable"></tbody>
          </table>
        </div>
      </section>

      <section id="charts" class="section">
        <div class="head"><h2>📈 الرسوم</h2></div>
        <div class="grid two">
          <div class="card chart"><h3>Orders by day</h3><canvas id="ordersChart"></canvas></div>
          <div class="card chart"><h3>Confirmation</h3><canvas id="confirmationChart"></canvas></div>
        </div>
        <div class="grid two" style="margin-top:16px">
          <div class="card chart"><h3>Top Cities</h3><canvas id="citiesChart"></canvas></div>
          <div class="card chart"><h3>Delivery</h3><canvas id="deliveryChart"></canvas></div>
        </div>
      </section>

      <section id="tables" class="section">
        <div class="head"><h2>📋 الجداول</h2></div>
        <div class="grid two">
          <div class="card"><h3>📍 أقوى المدن</h3><table><tbody id="citiesTable"></tbody></table></div>
          <div class="card"><h3>👗 أقوى المنتجات</h3><table><tbody id="productsTable"></tbody></table></div>
        </div>
      </section>
    </div>
  </main>
</div>

<script>
const API_URL='https://script.google.com/macros/s/AKfycbzFgNkVD2pQy9U9LRfJlTrpk0tNQPMSoMmWH483ZCgfKmpFy3ArsQr5EV77AvzaBrleIw/exec';

let data=null,charts=[],cs='',ce='';

function dstr(d){
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}

function money(n){
  return 'DH '+new Intl.NumberFormat('fr-MA').format(Math.round(n||0));
}

function pct(n){
  return ((n||0)*100).toFixed(1)+'%';
}

function toggleSide(){
  document.body.classList.toggle('hide');
  sideBtn.textContent=document.body.classList.contains('hide')?'إظهار القائمة ☰':'إخفاء القائمة ☰';
}

function quickFilter(){
  let q=quick.value,t=new Date(),s='',e='';

  if(q==='today') s=e=dstr(t);

  if(q==='yesterday'){
    let y=new Date(t);
    y.setDate(y.getDate()-1);
    s=e=dstr(y);
  }

  if(q==='7'){
    let x=new Date(t);
    x.setDate(x.getDate()-6);
    s=dstr(x);
    e=dstr(t);
  }

  if(q==='week'){
    let x=new Date(t),day=x.getDay()||7;
    x.setDate(x.getDate()-day+1);
    s=dstr(x);
    e=dstr(t);
  }

  if(q==='month'){
    s=dstr(new Date(t.getFullYear(),t.getMonth(),1));
    e=dstr(t);
  }

  start.value=s;
  end.value=e;
  cs=s;
  ce=e;
  label();
  loadData();
}

function customFilter(){
  cs=start.value;
  ce=end.value;
  quick.value='all';
  label();
  loadData();
}

function resetFilter(){
  cs='';
  ce='';
  start.value='';
  end.value='';
  quick.value='all';
  label();
  loadData();
}

function label(){
  flabel.textContent=(!cs&&!ce)?'كلشي':(cs||'...')+' → '+(ce||'...');
}

function loadData(){
  data=null;
  loader.style.display='block';
  content.style.display='none';
  err.style.display='none';
  status.textContent='⏳ كنجبد الداتا...';

  let old=document.getElementById('jsonp');
  if(old) old.remove();

  let u=API_URL+'?callback=handleData&v='+Date.now();
  if(cs) u+='&start='+encodeURIComponent(cs);
  if(ce) u+='&end='+encodeURIComponent(ce);

  let s=document.createElement('script');
  s.id='jsonp';
  s.src=u;
  s.onerror=()=>showErr('API failed. دير New deploy ف Apps Script.');
  document.body.appendChild(s);

  setTimeout(()=>{
    if(!data) showErr('Timeout: ما وصلاتش الداتا.');
  },12000);
}

function handleData(res){
  if(!res||!res.success){
    showErr(res&&res.error?res.error:'API error');
    return;
  }

  data=res;
  render(res.summary);
  loader.style.display='none';
  content.style.display='block';
  status.textContent='✅ آخر تحديث: '+new Date(res.updatedAt).toLocaleString('fr-MA');
}

function showErr(m){
  loader.style.display='none';
  content.style.display='none';
  err.style.display='block';
  err.textContent='❌ '+m;
  status.textContent='API Error';
}

function render(s){
  totalOrders.textContent=s.totalOrders||0;
  confirmed.textContent=s.confirmed||0;
  cancelled.textContent=s.cancelled||0;
  delivered.textContent=s.delivered||0;
  noResponse.textContent=s.noResponse||0;

  revenueConfirmed.textContent=money(s.revenueConfirmed);
  revenueDelivered.textContent=money(s.revenueDelivered);
  confirmationRate.textContent=pct(s.confirmationRate);
  deliveryRate.textContent=pct(s.deliveryRate);
  aov.textContent=money(s.aov);

  citiesTable.innerHTML=(s.topCities||[]).map(x=>
    '<tr><td>'+x.name+'</td><td><span class="badge">'+x.count+'</span></td></tr>'
  ).join('');

  productsTable.innerHTML=(s.topProducts||[]).map(x=>
    '<tr><td>'+x.name+'</td><td><span class="badge">'+x.count+'</span></td></tr>'
  ).join('');

  profitTable.innerHTML=(s.productDelivered||[]).map(x=>{
    let k=key(x.name),v=localStorage.getItem(k)||defaultProfit.value;
    return '<tr><td>'+x.name+'</td><td><span class="badge">'+x.delivered+'</span></td><td>'+money(x.revenue)+'</td><td><input data-k="'+k+'" data-d="'+x.delivered+'" class="pp" type="number" value="'+v+'" oninput="localStorage.setItem(this.dataset.k,this.value);calcProfit()"></td><td class="pt">0</td></tr>';
  }).join('');

  draw(s);
  calcProfit();
}

function key(p){
  return 'vm_'+btoa(unescape(encodeURIComponent(p))).replace(/=/g,'');
}

function calcProfit(){
  if(!data) return;

  let s=data.summary;
  let sp=Number(manualSpend.value||0)||Number(adSpend.value||0)*Number(usdMad.value||0);
  let g=0;

  document.querySelectorAll('.pp').forEach(i=>{
    let t=Number(i.value||0)*Number(i.dataset.d||0);
    g+=t;
    i.closest('tr').querySelector('.pt').textContent=money(t);
  });

  grossProfit.textContent=money(g);
  adSpendMad.textContent=money(sp);
  netProfit.textContent=money(g-sp);
  profitMargin.textContent=pct(s.revenueDelivered?(g-sp)/s.revenueDelivered:0);
  realCpp.textContent=money(s.delivered?sp/s.delivered:0);
}

function clearCharts(){
  charts.forEach(c=>c.destroy());
  charts=[];
}

function opt(p){
  let o={
    responsive:true,
    maintainAspectRatio:false,
    plugins:{
      legend:{
        position:p?'bottom':'top',
        labels:{
          color:'#dce5ff',
          font:{family:'Cairo',weight:'700'}
        }
      }
    }
  };

  if(!p){
    o.scales={
      x:{ticks:{color:'#9ca8c7'},grid:{color:'rgba(255,255,255,.05)'}},
      y:{beginAtZero:true,ticks:{color:'#9ca8c7',precision:0},grid:{color:'rgba(255,255,255,.05)'}}
    };
  }

  return o;
}

function draw(s){
  clearCharts();

  charts.push(new Chart(ordersChart,{
    type:'line',
    data:{
      labels:(s.ordersByDay||[]).map(x=>x.date),
      datasets:[{
        label:'Orders',
        data:(s.ordersByDay||[]).map(x=>x.count),
        borderColor:'#2DD4BF',
        backgroundColor:'rgba(45,212,191,.16)',
        fill:true,
        tension:.35
      }]
    },
    options:opt(false)
  }));

  charts.push(new Chart(confirmationChart,{
    type:'doughnut',
    data:{
      labels:(s.confirmationStatus||[]).map(x=>x.name),
      datasets:[{
        data:(s.confirmationStatus||[]).map(x=>x.count),
        backgroundColor:['#2DD4BF','#FB7185','#FFD166','#60A5FA','#A78BFA'],
        borderColor:'#03071E',
        borderWidth:4
      }]
    },
    options:opt(true)
  }));

  charts.push(new Chart(citiesChart,{
    type:'bar',
    data:{
      labels:(s.topCities||[]).slice(0,7).map(x=>x.name),
      datasets:[{
        label:'Orders',
        data:(s.topCities||[]).slice(0,7).map(x=>x.count),
        backgroundColor:'rgba(96,165,250,.72)',
        borderRadius:10
      }]
    },
    options:opt(false)
  }));

  charts.push(new Chart(deliveryChart,{
    type:'doughnut',
    data:{
      labels:(s.deliveryStatus||[]).map(x=>x.name),
      datasets:[{
        data:(s.deliveryStatus||[]).map(x=>x.count),
        backgroundColor:['#2DD4BF','#334155','#FB7185','#FFD166','#60A5FA'],
        borderColor:'#03071E',
        borderWidth:4
      }]
    },
    options:opt(true)
  }));
}

loadData();
</script>
</body>
</html>
