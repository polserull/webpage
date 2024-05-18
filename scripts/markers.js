var map = L.map('map').setView([52.56054252746919, -1.470288531213367], 4);
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 4,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
}).addTo(map);
map.setMaxBounds(map.getBounds());

function invalmap() {
    setTimeout(function() {
      map.invalidateSize()
    }, 300); 
}
map.invalidateSize();

var funnelCloudMarker = L.icon({
    iconUrl: './images/report-map-ico/funnel-cloud.webp',
    iconSize: [24, 24],
    iconAnchor: [12, 10],
});

var damagingLightningMarker = L.icon({
    iconUrl: './images/report-map-ico/damaging-lightning.webp',
    iconSize: [24, 24],
    iconAnchor: [12, 10],
});

var damagingHailMarker = L.icon({
    iconUrl: './images/report-map-ico/damaging-hail.webp',
    iconSize: [24, 24],
    iconAnchor: [12, 10],
});

var damagingWindMarker = L.icon({
    iconUrl: './images/report-map-ico/damaging-wind.webp',
    iconSize: [24, 24],
    iconAnchor: [12, 10],
});

var floodingMarker = L.icon({
    iconUrl: './images/report-map-ico/flooding.webp',
    iconSize: [24, 24],
    iconAnchor: [12, 10],
});

var funnelCloudLayer = L.layerGroup();
var damagingLightningLayer = L.layerGroup();
var damagingHailLayer = L.layerGroup();
var damagingWindLayer = L.layerGroup();
var floodingLayer = L.layerGroup();

L.marker([52.813749, -1.637174], {icon: funnelCloudMarker}).addTo(funnelCloudLayer).bindPopup(`<pre>Possible Funnel Cloud 
Location: Over Burton upon Trent 
[52.813749, -1.637174] [06-05-24 6:34BST]
Source: Twitter | <a href="https://twitter.com/sodafalls/status/1787536503842668729?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1787536503842668729%7Ctwgr%5E0062d3ab9c1da29e6ff51148a63fd22cfa43a6bb%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.torro.org.uk%2FIPS%2Findex.php%3Fapp%3Dcoremodule%3Dsystemcontroller%3Dembedurl%3Dhttps%3A%2F%2Ftwitter.com%2Fsodafalls%2Fstatus%2F1787536503842668729" target="_blank">Source</a></pre>`);
L.marker([52.774867077656864, -1.557549742237998], {icon: funnelCloudMarker}).addTo(funnelCloudLayer).bindPopup(`<pre>Possible Funnel Cloud 
Location: Swadlincote, Derbyshire 
[52.774867077656864, -1.557549742237998] [06-05-24 7:12BST]
Source: Twitter | <a href="https://twitter.com/uktornados/status/1787546069720514730?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1787546069720514730%7Ctwgr%5Ef701bb51e263063d25d14837ecad57d9136e12c1%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.torro.org.uk%2FIPS%2Findex.php%3Fapp%3Dcoremodule%3Dsystemcontroller%3Dembedurl%3Dhttps%3A%2F%2Ftwitter.com%2Fuktornados%2Fstatus%2F1787546069720514730" target="_blank">Source</a></pre>`);
L.marker([54.66109117051964, -2.2028157305819076], {icon: funnelCloudMarker}).addTo(funnelCloudLayer).bindPopup(`<pre>Possible Funnel Cloud
Estimate Location: B6277 Highway 
[54.66109117051964, -2.2028157305819076] [06-05-24 15:30BST]
Source: Facebook | <a href="https://www.facebook.com/watch/?v=746529750837359" target="_blank">Source</a></pre>`);
L.marker([51.77368325105944, -3.245661634061207], {icon: funnelCloudMarker}).addTo(funnelCloudLayer).bindPopup(`<pre>Possible Funnel Cloud 
Location: Tredegar
[51.77368325105944, -3.245661634061207] [07-05-24 16:40BST]
Source: Twitter | <a href="https://twitter.com/McCarthyKarl/status/1787873989118873753?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1787873989118873753%7Ctwgr%5E9011092b919548078e0209e85ed21b27a852802a%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.torro.org.uk%2FIPS%2Findex.php%3Fapp%3Dcoremodule%3Dsystemcontroller%3Dembedurl%3Dhttps%3A%2F%2Ftwitter.com%2FMcCarthyKarl%2Fstatus%2F1787873989118873753" target="_blank">Source</a></pre>`);
L.marker([51.668376663548166, -4.709275272505088], {icon: funnelCloudMarker}).addTo(funnelCloudLayer).bindPopup(`<pre>Possible Funnel Cloud 
Estimate Location: Tenby Golf Club, Tenby
[51.668376663548166, -4.709275272505088] [16-05-24 14:20BST]
Source: Twitter | <a href="https://twitter.com/RECEPTOR17/status/1791110556948025600/photo/2" target="_blank">Source</a></pre>`);
L.marker([52.573892365247, -0.27488640541446], {icon: funnelCloudMarker}).addTo(funnelCloudLayer).bindPopup(`<pre>Possible Funnel Cloud 
Estimate Location: West Peterborough
[52.573892365247, -0.27488640541446] [17-05-24 17:20BST]
Source: Twitter | <a href="https://x.com/CFBBritBaller/status/1791506424947765449?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1791506424947765449%7Ctwgr%5E39714be2e6c99f4fc35c0a15e121f04cbfcb1cee%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.torro.org.uk%2FIPS%2Findex.php%3Fapp%3Dcoremodule%3Dsystemcontroller%3Dembedurl%3Dhttps%3A%2F%2Fx.com%2Fcfbbritballer%2Fstatus%2F1791506424947765449%3Fs%3D46" target="_blank">Source</a></pre>`);

L.marker([51.49774320425926, -0.6369741664371422], {icon: damagingLightningMarker}).addTo(damagingLightningLayer).bindPopup(`<pre>Damaging Lightning
Estimate Location: Eton Wick
[51.49774320425926, -0.6369741664371422] [02-05-24 N/A]
Source: News | <a href="https://www.windsorexpress.co.uk/gallery/appeals-and-information/196332/firefighters-tackle-eton-wick-loft-fire-caused-by-a-lightning-strike.html" target="_blank">Source</a><pre>`);
L.marker([50.823979952034136, 0.23899878220061452], {icon: damagingLightningMarker}).addTo(damagingLightningLayer).bindPopup(`<pre>Damaging Lightning
Estimate Location: Brookside Avenue, Polegate
[50.823979952034136, 0.23899878220061452] [02-05-24 01:05BST]
Source: News | <a href="https://www.theargus.co.uk/news/24293336.live-updates-sussex-hit-thunder-lightning/" target="_blank">Source</a></pre>`);
L.marker([50.84447198006771, -0.7757965582763232], {icon: damagingLightningMarker}).addTo(damagingLightningLayer).bindPopup(`<pre>Damaging Lightning
Estimate Location: College Lane, Chichester
[50.84447198006771, -0.7757965582763232] [02-05-24 02:24BST]
Source: News | <a href="https://www.theargus.co.uk/news/24293336.live-updates-sussex-hit-thunder-lightning/" target="_blank">Source</a></pre>`);
L.marker([50.79254272710808, -0.6104020396560259], {icon: damagingLightningMarker}).addTo(damagingLightningLayer).bindPopup(`<pre>Damaging Lightning
Estimate Location: Elmer, Bognor 
[50.79254272710808, -0.6104020396560259] [02-05-24 1:44BST]
Source: News | <a href="https://www.theargus.co.uk/news/24293336.live-updates-sussex-hit-thunder-lightning/" target="_blank">Source</a></pre>`);
L.marker([53.60835803921186, -2.314070824203321], {icon: damagingLightningMarker}).addTo(damagingLightningLayer).bindPopup(`<pre>Damaging Lightning
Location: Lepp Crescent, Bury
[53.60835803921186, -2.314070824203321] [12-05-24 20:30BST]
Source: News | <a href="https://www.manchestereveningnews.co.uk/news/greater-manchester-news/we-saw-big-ball-white-29161139" target="_blank">Source</a></pre>`);

L.marker([57.310200010485474, -2.6233588484252075], {icon: floodingMarker}).addTo(floodingLayer).bindPopup(`<pre>Flooding
Estimate Location: Auchleven, Aberdeenshire 
[57.310200010485474, -2.6233588484252075] [05-05-24 N/A]
Source: Twitter | <a href="https://twitter.com/Alonso2012F/status/1787180019363487791" target="_blank">Source</a></pre>`);
L.marker([52.41099743933818, -3.3476055264083038], {icon: floodingMarker}).addTo(floodingLayer).bindPopup(`<pre>Flooding
Estimate Location: A483, Llanbadarn Fynydd 
[52.41099743933818, -3.3476055264083038] [12-05-24 19:00BST]
Source: News | <a href="https://www.countytimes.co.uk/news/24314854.live-powys-flooding-latest-uk-thunderstorms/" target="_blank">Source</a></pre>`);

funnelCloudLayer.addTo(map);
damagingLightningLayer.addTo(map);
damagingHailLayer.addTo(map);
damagingWindLayer.addTo(map);
floodingLayer.addTo(map);

var overlayMaps = {
    "Funnel Clouds": funnelCloudLayer,
    "Damaging Lightning": damagingLightningLayer,
    "Damaging Hail": damagingHailLayer,
    "Damaging Wind": damagingWindLayer,
    "Flooding": floodingLayer
};

L.control.layers(null, overlayMaps, {collapsed: false}).addTo(map);
