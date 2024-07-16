var map = L.map('map').setView([53.662085708425046, -1.7966163644373265], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 5,
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var bounds = L.latLngBounds(L.latLng(48.5, -11.0), L.latLng(61.0, 3.0));
map.setMaxBounds(bounds);

L.control.rainviewer({ 
    position: 'bottomleft',
    nextButtonText: '>',
    playStopButtonText: 'Play/Stop',
    prevButtonText: '<',
    positionSliderLabelText: "Hour:",
    opacitySliderLabelText: "Opacity:",
    animationInterval: 500,
    opacity: 0.5
}).addTo(map);

function invalmap() {
    setTimeout(function() {
      map.invalidateSize()
    }, 300); 
}

tornadoIcon = {
    isAlphaNumericIcon: true,
    borderColor: '#FF0000',
    textColor: '#000000',
    iconShape: 'circle',
    iconSize: [15,15],
    text: '▼'};
damagingLightningIcon = {
    isAlphaNumericIcon: true,
    borderColor: '#FEBF10',
    textColor: '#000000',
    iconShape: 'circle',
    iconSize: [15,15],
    text: '☇'};
waterSpoutIcon = {
    isAlphaNumericIcon: true,
    borderColor: '#00008B',
    textColor: '#000000',
    iconShape: 'circle',
    iconSize: [15,15],
    text: '▼'};
funnelCloudIcon = {
    isAlphaNumericIcon: true,
    borderColor: '#747880',
    textColor: '#000000',
    iconShape: 'circle',
    iconSize: [15,15],
    text: '▽'};
HailEventIcon = {
    isAlphaNumericIcon: true,
    borderColor: '#FF69B4',
    textColor: '#000000',
    iconShape: 'circle',
    iconSize: [15,15],
    text: 'H'};
SLWWEventIcon = {
    isAlphaNumericIcon: true,
    borderColor: '#000000',
    textColor: '#000000',
    iconShape: 'circle',
    iconSize: [15,15],
    text: 'W'};
SAIEventIcon = {
    isAlphaNumericIcon: true,
    borderColor: '#000000',
    textColor: '#000000',
    iconShape: 'circle',
    iconSize: [15,15],
    text: 'S'};
FloodEventIcon = {
    isAlphaNumericIcon: true,
    borderColor: '#000000',
    textColor: '#000000',
    iconShape: 'circle',
    iconSize: [15,15],
    text: 'F'};
StormEventIcon = {
    isAlphaNumericIcon: true,
    borderColor: '#000000',
    textColor: '#000000',
    iconShape: 'circle',
    iconSize: [15,15],
    text: '☈'};
UnknownEventIcon = {
    isAlphaNumericIcon: true,
    borderColor: '#000000',
    textColor: '#000000',
    iconShape: 'circle',
    iconSize: [15,15],
    text: '?'};
SpaceEventIcon = {
    isAlphaNumericIcon: true,
    borderColor: '#27214f',
    textColor: '#000000',
    iconShape: 'circle',
    iconSize: [15,15],
    text: 'SW'};

// TORNADO MARKERS //

// WATER SPOUT MARKERS //
var marker = L.marker([52.5443, -4.0809], {icon: L.BeautifyIcon.icon(waterSpoutIcon)}).bindPopup(`<pre>
MULTIPLE WATER SPOUTS
Location: Aberdyfi, Gwynedd, Wales
Coords: 51.4864, 0.2771 [<5km]
Timestamp: 07-07-24 0902BST [+/- 15m]

Impacts: None
Injuries: 0 / Fatalities: 0
Description: Multiple water spouts captured via multiple sources
Sources: <a href="https://x.com/arthur_wyn/status/1809869920332611771" target="_blank">Twitter Image</a>, <a href="https://www.bbc.co.uk/news/videos/c978gr2qde7o" target="_blank">BBC News</a>, <a href="https://www.countytimes.co.uk/news/24438389.four-waterspouts-photographed-off-wales-coast-aberdyfi/" target="_blank">News Source</a>
Probable: Confirmed Via Clear Image
</pre>`).addTo(map);    

// FUNNEL CLOUD MARKERS //
var marker = L.marker([54.9579, -7.7335], {icon: L.BeautifyIcon.icon(funnelCloudIcon)}).bindPopup(`<pre>
FUNNEL CLOUD
Location: Letterkenny, Co Donegal, Éire
Coords: 51.4864, 0.2771 [<10km]
Timestamp: 15-07-24 1445BST [+/- 15m]

Impacts: None
Injuries: 0 / Fatalities: 0
Description: Funnel cloud captured by twitter users
Sources: <a href="https://x.com/priceymon1/status/1812849184204103764" target="_blank">Twitter Image</a>, <a href="https://x.com/MariaRushe_/status/1812851075172417898" target="_blank">Twitter Image</a>
Probable: Confirmed Via Image
</pre>`).addTo(map);
var marker = L.marker([50.3397, -4.7843], {icon: L.BeautifyIcon.icon(funnelCloudIcon)}).bindPopup(`<pre>
FUNNEL CLOUD
Location: St Austell, Cornwall, England
Coords: 50.3397, -4.7843 [<10km]
Timestamp: 15-07-24 ----BST [+/- --m]

Impacts: Unknown
Injuries: 0 / Fatalities: 0
Description: Funnel cloud captured by twitter user, described as tornado though
there is potential no touchdown has been seen nor confirmed so it remains a funnel cloud.
Sources: <a href="https://x.com/Swifty2790/status/1812918428434637264" target="_blank">Twitter Video</a>
Probable: Confirmed Via Video
</pre>`).addTo(map);

// LIGHTNING EVENTS //
var marker = L.marker([51.4864, 0.2771], {icon: L.BeautifyIcon.icon(damagingLightningIcon)}).bindPopup(`<pre>
LIGHTNING EVENT
Location: Lakeside Retail Park, West Thurrock, Grays
Coords: 51.4864, 0.2771 [<1km]
Timestamp: 07-07-24 1500BST [+/- 30m]

Impacts: Damaged Building, Building Fire
Injuries: 0 / Fatalities: 0
Description: Lightning struck retail park roof
Sources: <a href="https://x.com/Weather_SS17/status/1809956749723451406" target="_blank">Twitter Image</a>
Probable: Plausible
</pre>`).addTo(map);

// HAIL EVENTS //

// SLW & WIND EVENTS //

// SNOW & ICE EVENTS //

// FLOODING EVENTS //
var marker = L.marker([50.8180, -0.3694], {icon: L.BeautifyIcon.icon(FloodEventIcon)}).bindPopup(`<pre>
FLOODING
Location: Newland Rd, Worthing, West Sussex, England
Coords: 50.8180, -0.3694 [<2km]
Timestamp: 15-07-24 ----BST [+/- --m]

Impacts: Road Closures
Injuries: 0 / Fatalities: 0
Description: Flooding due to high rainfall and blocked drains
Sources: <a href="https://x.com/brightonsnapper/status/1812926275952254999" target="_blank">Twitter Video</a>
Probable: Confirmed via Video
</pre>`).addTo(map);

// NOTABLE STORM EVENTS //

// UNKNOWN EVENTS //

// SPACE WEATHER EVENTS //

//////////////////////////