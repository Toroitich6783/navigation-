let map = L.map('map').setView([-0.3922278490878398, 36.95883973290574], 13).setZoom(16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieGtvdmFjaWttNiIsImEiOiJja2d1dzdqY20wejF4MnNwOTFvMHZ6bjkyIn0.Srve4i5c9BhBV3nW9t8Ryg'
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(-0.39660703091344596, 36.95750671190558),
        L.latLng(-0.3968432864130948, 36.95708144179428),
    ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim()
}).addTo(map);
// ######

var baseMaps = {
    "OpenStreetMap": osm,
    "Mapbox Streets": streets
};

var overlayMaps = {
    "Cities": cities
};
var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
var baseMaps = {
    "<span style='color: gray'>Grayscale</span>": grayscale,
    "Streets": streets
};

var crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.'),
    rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');
    
var parks = L.layerGroup([crownHill, rubyHill]);
var satellite = L.tileLayer(mapboxUrl, {id: 'map', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

layerControl.addBaseLayer(satellite, "Satellite");
layerControl.addOverlay(parks, "Parks");
// #####
let blocks = [{
    "type": "Feature",
    "properties": {
        "name": "Blok A",
        "ustavy": [
            "Ústav jadrového a fyzikálneho inžinierstva"
        ],
        "instituty" : [
            "Inštitút komunikácie a aplikovanej lingvistiky"
        ]
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-0.3922278490878398, 36.95883973290574], //left bottom corner
            [-0.3922278490878398, 36.95883973290574], //left top corner
            [-0.3922278490878398, 36.95883973290574], //right top
            [-0.3922278490878398, 36.95883973290574], //right bottom
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Blok B",
        "ustavy": [
            "Ústav elektrotechniky",
            "Ústav multimediálnych informačných a komunikačných technológií"
        ]
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-0.3922278490878398, 36.95883973290574], //left bottom corner
            [-0.7397964673024493, 37.08221175112942], //left top corner
            [-0.7967813574890619, 36.986041095141125], //right top
            [-0.7896582881645752, 36.56930158585851], //right bottom
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Blok C",
        "ustavy": [
            "Ústav elektroenergetiky a aplikovanej elektrotechniky",
            "Ústav informatiky a matematiky"
        ]
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-0.3922278490878398, 36.95883973290574], //left bottom corner
            [-0.3922278490878398, 36.95883973290574], //left top corner
            [-0.3922278490878398, 36.95883973290574], //right top
            [-0.3922278490878398, 36.95883973290574], //right bottom
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Blok D",
        "ustavy": [
            "Ústav automobilovej mechatroniky",
            "Ústav robotiky a kybernetiky"
        ]
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-0.3922278490878398, 36.95883973290574], //left bottom corner
            [-0.3922278490878398, 36.95883973290574], //left top corner
            [-0.3922278490878398, 36.95883973290574], //right top
            [-0.3922278490878398, 36.95883973290574], //right bottom
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Blok E",
        "ustavy": [
            "Ústav elektroniky a fotoniky"
        ]
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-0.3922278490878398, 36.95883973290574], //left bottom corner
            [-0.3922278490878398, 36.95883973290574], //left top corner
            [-0.3922278490878398, 36.95883973290574], //right top
            [-0.3922278490878398, 36.95883973290574], //right bottom
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Blok T",
        "ustavy": [
            "Ústav telovýchovy a športu"
        ]
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-0.3922278490878398, 36.95883973290574], //left bottom corner
            [-0.3922278490878398, 36.99883973290574], //left top corner
            [-0.3922278490878398, 36.959883973290574], //right top
            [-0.3922278490878398, 36.9883973290574], //right bottom
        ]]
    }
}];

let busIcon = L.icon({
    iconUrl: 'img/bus_marker.png',
    iconSize: [50, 50],
});

let tramIcon = L.icon({
    iconUrl: 'img/tram_marker.png',
    iconSize: [50, 50],
});

//markers for bus and tram stops
L.marker([-0.3922278490878398, 36.95883973290574], {icon: busIcon}).bindPopup("<h4>Autobusová zastávka</h4>" + "<h5>Zoo</h5>" //
    + "<h5>Spoje:</h5> <span>31</span>" 
    + "<span>39</span>"
    + "<span>N31</span>"
).addTo(map);
L.marker([-0.394504, 36.95468]).bindPopup('Catholic Hostels').addTo(map);

L.marker([-0.3922278490878398, 36.95883973290574],{icon: busIcon}).bindPopup("<h4>Autobusová zastávka</h4>" + "<h5>Zoo</h5>"
    + "<h5>Spoje:</h5> <span>31</span>" 
    + "<span>39</span>"
    + "<span>N31</span>"
).addTo(map);

L.marker([-0.3922278490878398, 36.95883973290574],{icon: busIcon}).bindPopup("<h4>Autobusová zastávka</h4>" + "<h5>Zoo</h5>"
    + "<h5>Spoje:</h5> <span>30</span>" 
    + "<span>32</span>"
    + "<span>37</span>"
    + "<span>92</span>"
    + "<span>192</span>"
    + "<span>N29</span>"
).addTo(map);

L.marker([-0.3922278490878398, 36.95883973290574], {icon: busIcon}).bindPopup("<h4>Autobusová zastávka</h4>" + "<h5>Televízia</h5>"
    + "<h5>Spoje:</h5> <span>31</span>" 
    + "<span>39</span>"
    + "<span>N31</span>"
).addTo(map);

L.marker([-0.3922278490878398, 36.95883973290574],{icon: busIcon}).bindPopup("<h4>Autobusová zastávka</h4>" + "<h5>Televízia</h5>"
    + "<h5>Spoje:</h5> <span>31</span>" 
    + "<span>39</span>"
    + "<span>N31</span>"
).addTo(map);

L.marker([-0.3922278490878398, 36.95883973290574],{icon: busIcon}).bindPopup("<h4>Autobusová zastávka</h4>" + "<h5>Botanická záhrada</h5>"
    + "<h5>Spoje:</h5> <span style='border-style: solid; padding:2px; margin-right: 5px;'>29</span>" 
    + "<span>32</span>"
    + "<span>N29</span>"
    + "<span>N33</span>"
    + "<span>N34</span>"
).addTo(map);

L.marker([-0.3922278490878398, 36.95883973290574], {icon: busIcon}).bindPopup("<h4>Bus zastávka</h4>" + "<h5>Botanická záhrada</h5>"
    + "<h5>Spoje:</h5> <span>29</span>" 
    + "<span>32</span>"
    + "<span>N29</span>"
    + "<span>N33</span>"
    + "<span>N34</span>"
).addTo(map);

L.marker([-0.3922278490878398, 36.95883973290574], {icon: tramIcon}).bindPopup("<h4>Tram zastávka</h4>" + "<h5>Botanická záhrada</h5>"
    + "<h5>Spoje:</h5> <span>4</span>" 
    + "<span>9</span>"
).addTo(map);

L.marker([-0.3922278490878398, 36.95883973290574],  {icon: tramIcon}).bindPopup("<h4>Tram zastávka</h4>" + "<h5>Botanická záhrada</h5>"
    + "<h5>Spoje:</h5> <span>4</span>" 
    + "<span>9</span>"
).addTo(map);

function onEachFeature(feature, layer) {
    if (feature.properties.name === "Blok A") {
      layer.bindPopup("<h4>" + feature.properties.name + "</h4><h5>Inštitúty:</h5><p>" + 
      feature.properties.instituty[0] + "</p><h5>Ústavy</h5><p>" + feature.properties.ustavy[0] + "</p>");
    } else if (feature.properties.name === "Blok B" || feature.properties.name === "Blok C" || feature.properties.name === "Blok D") {
        layer.bindPopup("<h4>" + feature.properties.name + "</h4><h5>Ústavy:</h5><p>" + 
        feature.properties.ustavy[0] + "</p><p>" + feature.properties.ustavy[1] + "</p>");
    }else if (feature.properties.name === "Blok E" || feature.properties.name === "Blok T") {
        layer.bindPopup("<h4>" + feature.properties.name + "</h4><h5>Ústavy:</h5><p>" + 
        feature.properties.ustavy[0] + "</p>");
    }
}
let myGeoJson = L.geoJson(blocks, {
    onEachFeature: onEachFeature
}).addTo(map);
var building= {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"stroke":"#FF0000","stroke-width":2,"stroke-opacity":1,"fill":"#FF0000","fill-opacity":0.5,"Name":"RC"},"geometry":{"type":"Polygon","coordinates":[[[36.96116745471954,-0.3981599947674428],[36.96121037006378,-0.3981921804983881],[36.96125864982605,-0.3981921804983881],[36.96128010749817,-0.3981868162099121],[36.96131765842437,-0.3981546304789413],[36.96131765842437,-0.3981063518822371],[36.96126937866211,-0.39805807328525294],[36.96124792098999,-0.3979239660699423],[36.96125864982605,-0.39778985885244345],[36.96125864982605,-0.397746944542396],[36.96127474308014,-0.3976289301885823],[36.96131229400635,-0.3975913801665656],[36.96131229400635,-0.3975538301443708],[36.96127474308014,-0.3975109158330766],[36.9612318277359,-0.3975001872552212],[36.96119427680969,-0.39753773727767044],[36.960872411727905,-0.39753773727767044],[36.960856318473816,-0.3976986659433127],[36.96080267429352,-0.39768257307687954],[36.96081876754761,-0.39754846585547493],[36.96075439453125,-0.3975431015665663],[36.96073830127716,-0.39749482296628713],[36.96070611476898,-0.39747336581052556],[36.9606739282608,-0.39748945867735314],[36.960647106170654,-0.3975216444109319],[36.960647106170654,-0.39756455872216256],[36.96068465709686,-0.397580651588812],[36.96066856384277,-0.3979722446677152],[36.960631012916565,-0.3980044303993984],[36.960641741752625,-0.39804734470811004],[36.960657835006714,-0.3981063518822371],[36.960647106170654,-0.39817072334443304],[36.96116745471954,-0.3981599947674428]]]}},{"type":"Feature","properties":{"stroke":"#555555","stroke-width":2,"stroke-opacity":1,"fill":"#555555","fill-opacity":0.5,"Name":"Academic Block"},"geometry":{"type":"Polygon","coordinates":[[[36.96256220340729,-0.3993562310166618],[36.96305036544799,-0.3993562310166618],[36.96307182312012,-0.3988841736834654],[36.96300208568573,-0.39887344510740386],[36.9629967212677,-0.39884662366716095],[36.962653398513794,-0.3988251665149107],[36.962642669677734,-0.3988573522432734],[36.96257293224335,-0.39884125937910475],[36.96256220340729,-0.398927087987597],[36.96253001689911,-0.3989807308674594],[36.96253001689911,-0.39906119518658506],[36.96255147457123,-0.3990880166261155],[36.96256220340729,-0.3993562310166618]]]}},{"type":"Feature","properties":{"stroke":"#555555","stroke-width":2,"stroke-opacity":1,"fill":"#555555","fill-opacity":0.5,"Name":"Civil lab"},"geometry":{"type":"Polygon","coordinates":[[[36.96183800697327,-0.3993079524270057],[36.96220278739929,-0.3993079524270057],[36.96220815181732,-0.39915775236850537],[36.961843371391296,-0.3991470237927873],[36.96183800697327,-0.3993079524270057]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[36.96206867694855,-0.39946888105806894],[36.96219742298126,-0.39946888105806894],[36.96220815181732,-0.39937232387981264],[36.96205258369445,-0.39936159530437454],[36.96206867694855,-0.39946888105806894]]]}},{"type":"Feature","properties":{"stroke":"#555555","stroke-width":2,"stroke-opacity":1,"fill":"#555555","fill-opacity":0.5,"Name":"Water Lab"},"geometry":{"type":"Polygon","coordinates":[[[36.961355209350586,-0.3994259667567617],[36.96170926094055,-0.3994420596197853],[36.96169853210449,-0.39927040241263506],[36.961355209350586,-0.3992596738370697],[36.961355209350586,-0.3994259667567617]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[36.96121037006378,-0.3992221238224828],[36.96133375167847,-0.399232852398099],[36.961344480514526,-0.398760795057829],[36.96100115776062,-0.3987447021934823],[36.96099579334259,-0.39897536657949223],[36.96121037006378,-0.39897536657949223],[36.96121037006378,-0.3992221238224828]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[36.961360573768616,-0.3992221238224828],[36.96151077747345,-0.3992274881102845],[36.96151077747345,-0.39899682373134815],[36.96169853210449,-0.399007552307257],[36.961719989776604,-0.3987983450745278],[36.961376667022705,-0.3987822522102447],[36.961360573768616,-0.3992221238224828]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[36.96165025234222,-0.3992060309590393],[36.96182191371918,-0.3992221238224828],[36.96182191371918,-0.399163116656358],[36.961660981178284,-0.3991416595049347],[36.96165025234222,-0.3992060309590393]]]}},{"type":"Feature","properties":{"stroke":"#555555","stroke-width":2,"stroke-opacity":1,"fill":"#555555","fill-opacity":0.5,"Name":"Manyani house"},"geometry":{"type":"Polygon","coordinates":[[[36.959847807884216,-0.39784350173971017],[36.95998728275299,-0.39789178033794104],[36.96004629135132,-0.397746944542396],[36.96020185947418,-0.39778449456371295],[36.96020722389221,-0.39768257307687954],[36.96005702018738,-0.3976664802104336],[36.96006238460541,-0.397596744455436],[36.959901452064514,-0.3975538301443708],[36.959890723228455,-0.3976450230551046],[36.95997655391693,-0.3976772087880727],[36.95994436740875,-0.39778449456371295],[36.959863901138306,-0.3977576731199333],[36.959847807884216,-0.39784350173971017]]]}},{"type":"Feature","properties":{"stroke":"#555555","stroke-width":2,"stroke-opacity":1,"fill":"#555555","fill-opacity":0.5,"Name":"Toilet"},"geometry":{"type":"Polygon","coordinates":[[[36.96006238460541,-0.39794005893589207],[36.960148215293884,-0.39795078751318763],[36.960164308547974,-0.3978756874719023],[36.96007847785949,-0.3978595946058253],[36.96006238460541,-0.39794005893589207]]]}},{"type":"Feature","properties":{"stroke":"#555555","stroke-width":2,"stroke-opacity":1,"fill":"#555555","fill-opacity":0.5,"Name":"Cafeteria"},"geometry":{"type":"Polygon","coordinates":[[[36.95995509624481,-0.39831555913254835],[36.960132122039795,-0.3983048305557362],[36.960132122039795,-0.39824582338303405],[36.96007847785949,-0.39824045909458344],[36.96007311344147,-0.3981546304789413],[36.95995509624481,-0.3981224447478306],[36.95995509624481,-0.39831555913254835]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[36.96082413196563,-0.398508673512737],[36.960888504981995,-0.398508673512737],[36.960883140563965,-0.39839065916982624],[36.96081876754761,-0.39839065916982624],[36.96082413196563,-0.398508673512737]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[36.960631012916565,-0.39829946626732377],[36.96069538593292,-0.3983048305557362],[36.96070611476898,-0.39820290907535294],[36.960625648498535,-0.3982136376522923],[36.960631012916565,-0.39829946626732377]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[36.95958495140075,-0.3979829732449472],[36.95954740047455,-0.39792933035859646],[36.95945620536804,-0.3979722446677152],[36.95947766304016,-0.3980044303993984],[36.95944011211395,-0.3980366161309544],[36.95945620536804,-0.39805807328525294],[36.95958495140075,-0.3979829732449472]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[36.9595044851303,-0.3980527089966879],[36.95953130722046,-0.39811708045930366],[36.959622502326965,-0.39807416615094826],[36.95959568023681,-0.3980312518423639],[36.9595044851303,-0.3980527089966879]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[36.95972979068756,-0.3981492661904271],[36.95977807044983,-0.3981385376133987],[36.95975124835968,-0.3980634375738308],[36.95969760417938,-0.3980956233051578],[36.95972979068756,-0.3981492661904271]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[36.959869265556335,-0.3980634375738308],[36.959912180900574,-0.3980795304395006],[36.95992290973663,-0.3980205232651828],[36.959885358810425,-0.3979937018221792],[36.959869265556335,-0.3980634375738308]]]}}]}
	L.geoJSON(building,{
		style:function(feature){
			return{
				color:'green'
				
				
			}
		}
	}
	
	).addTo(map);


    let template=
    L.marker([-0.3977193265409733, 36.961210720909534]).addTo(mymap)
      .bindPopup(template).openPopup();
      L.marker([-0.3981697677869431, 36.960021109876934]).addTo(mymap)
      .bindPopup("<b>Lecture</b><br  />.Mess").openPopup();
      L.marker([-0.39748647594441994, 36.9586395101078]).addTo(mymap)
      .bindPopup("<b>Fram</b><br  />.House" ).openPopup();
      L.marker([-0.39889867007845303, 36.96122743586294]).addTo(mymap)
      .bindPopup("<b>Meachatronic</b><br  />Lab").openPopup();
      L.marker([-0.3965984269345533, 36.96091232641199]).addTo(mymap)
      .bindPopup("<b>Herores</b><br  />Garden").openPopup();
      L.marker([-0.39579700442120985, 36.96185416666995]).addTo(mymap)
      .bindPopup("<b>Herores</b><br  />Garden").openPopup();
  
    L.polygon([
      [-0.39748600701394626, 36.96171007820222],
      [-0.39748600701394626, 36.96171007820222],
      [-0.39748600701394626, 36.96171007820222]
    ]).addTo(map).bindPopup("Dekut.");
  
//https://www.flaticon.com/free-icon/map_854878?term=map&page=1&position=6 free favicon link 
