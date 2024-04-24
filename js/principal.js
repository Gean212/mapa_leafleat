// Ojeto mapa
var mapa = L.map("mapid").setView([9.7, -84], 8);

// Capa base de OSM
osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mapa);

// Capa base de OpenTopoMap
otm = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(mapa);

// Capa base de StadiaAlidadeSatellite
sas = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}",
  {
    minZoom: 0,
    maxZoom: 20,
    attribution:
      '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: "jpg",
  }
).addTo(mapa);

// Marcador para el centro del país
var centro = L.marker([9.7, -84]).addTo(mapa);

// Marcadores
liberia = L.marker([10.633333, -85.433333]);
liberia.bindTooltip("Liberia").openTooltip();
liberia.addTo(mapa);

limon = L.marker([10.002216, -83.084037]);
limon.bindTooltip("Limón").openTooltip();
limon.addTo(mapa);

puntarenas = L.marker([9.966667, -84.833333]);
puntarenas.bindTooltip("Puntarenas").openTooltip();
puntarenas.addTo(mapa);

San_Jose = L.marker([9.934959, -84.103496]);
San_Jose.bindTooltip("San José").openTooltip();
San_Jose.addTo(mapa);

// Marcador para la Catedral Metropolitana de San José
catedral = L.marker([9.9326673, -84.0787633]);
catedral
  .bindPopup(
    '<a href="https://es.wikipedia.org/wiki/Catedral_metropolitana_de_San_Jos%C3%A9">Catedral Metropolitana de San José</a>.<br>Catedral de estilo clásico y barroco. Templo principal de la arquidiócesis católica de San José.<br>Construída entre 1825 y 1827 y reconstruída en 1878.<br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Metropolitan_Cathedral_in_San_Jose%2C_Costa_Rica.jpg/256px-Metropolitan_Cathedral_in_San_Jose%2C_Costa_Rica.jpg">'
  )
  .openPopup();
catedral.bindTooltip("Catedral Metropolitana de San José").openTooltip();
catedral.addTo(mapa);

// Objeto de capas base
var mapasBase = {
  OpenStreetMap: osm,
  OpenTopoMap: otm,
  Stadia_AlidadeSatellite: sas,
};

// Control de capas
L.control.layers(mapasBase).addTo(mapa);

// Control de escala
L.control
.scale({ maxWidth: 100, imperial: false, position: "topright" })
.addTo(mapa);
