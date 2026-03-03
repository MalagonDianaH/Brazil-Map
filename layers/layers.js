var wms_layers = [];

var format_Regionsgeometry1772051935298_0 = new ol.format.GeoJSON();
var features_Regionsgeometry1772051935298_0 = format_Regionsgeometry1772051935298_0.readFeatures(json_Regionsgeometry1772051935298_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regionsgeometry1772051935298_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regionsgeometry1772051935298_0.addFeatures(features_Regionsgeometry1772051935298_0);
var lyr_Regionsgeometry1772051935298_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regionsgeometry1772051935298_0, 
                style: style_Regionsgeometry1772051935298_0,
                popuplayertitle: 'Regions geometry.1772051935298',
                interactive: true,
                title: '<img src="styles/legend/Regionsgeometry1772051935298_0.png" /> Regions geometry.1772051935298'
            });
var format_output5Puntos2json_1 = new ol.format.GeoJSON();
var features_output5Puntos2json_1 = format_output5Puntos2json_1.readFeatures(json_output5Puntos2json_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_output5Puntos2json_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_output5Puntos2json_1.addFeatures(features_output5Puntos2json_1);
var lyr_output5Puntos2json_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_output5Puntos2json_1, 
                style: style_output5Puntos2json_1,
                popuplayertitle: 'output (5) — Puntos2.json',
                interactive: true,
                title: '<img src="styles/legend/output5Puntos2json_1.png" /> output (5) — Puntos2.json'
            });
var format_output5AssentamentoBrasiljson_2 = new ol.format.GeoJSON();
var features_output5AssentamentoBrasiljson_2 = format_output5AssentamentoBrasiljson_2.readFeatures(json_output5AssentamentoBrasiljson_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_output5AssentamentoBrasiljson_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_output5AssentamentoBrasiljson_2.addFeatures(features_output5AssentamentoBrasiljson_2);
var lyr_output5AssentamentoBrasiljson_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_output5AssentamentoBrasiljson_2, 
                style: style_output5AssentamentoBrasiljson_2,
                popuplayertitle: 'output (5) — Assentamento Brasil.json',
                interactive: true,
    title: 'output (5) — Assentamento Brasil.json<br />\
    <img src="styles/legend/output5AssentamentoBrasiljson_2_0.png" /> 3<br />\
    <img src="styles/legend/output5AssentamentoBrasiljson_2_1.png" /> 4<br />\
    <img src="styles/legend/output5AssentamentoBrasiljson_2_2.png" /> 5<br />\
    <img src="styles/legend/output5AssentamentoBrasiljson_2_3.png" /> 6<br />\
    <img src="styles/legend/output5AssentamentoBrasiljson_2_4.png" /> 7<br />\
    <img src="styles/legend/output5AssentamentoBrasiljson_2_5.png" /> 10<br />\
    <img src="styles/legend/output5AssentamentoBrasiljson_2_6.png" /> <br />' });

lyr_Regionsgeometry1772051935298_0.setVisible(true);lyr_output5Puntos2json_1.setVisible(true);lyr_output5AssentamentoBrasiljson_2.setVisible(true);
var layersList = [lyr_Regionsgeometry1772051935298_0,lyr_output5Puntos2json_1,lyr_output5AssentamentoBrasiljson_2];
lyr_Regionsgeometry1772051935298_0.set('fieldAliases', {'Name': 'Name', 'ISO': 'ISO', 'Two-letter code': 'Two-letter code', 'ID': 'ID', 'ID (shortened)': 'ID (shortened)', });
lyr_output5Puntos2json_1.set('fieldAliases', {'Name': 'Name', 'latitude': 'latitude', 'longitude': 'longitude', 'fill': 'fill', 'stroke': 'stroke', 'stroke-width': 'stroke-width', 'r': 'r', 'opacity': 'opacity', });
lyr_output5AssentamentoBrasiljson_2.set('fieldAliases', {'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', 'color_fase': 'color_fase', 'fill': 'fill', 'stroke': 'stroke', 'stroke-width': 'stroke-width', 'stroke-opacity': 'stroke-opacity', 'fill-opacity': 'fill-opacity', });
lyr_Regionsgeometry1772051935298_0.set('fieldImages', {'Name': '', 'ISO': '', 'Two-letter code': '', 'ID': '', 'ID (shortened)': '', });
lyr_output5Puntos2json_1.set('fieldImages', {'Name': '', 'latitude': '', 'longitude': '', 'fill': '', 'stroke': '', 'stroke-width': '', 'r': '', 'opacity': '', });
lyr_output5AssentamentoBrasiljson_2.set('fieldImages', {'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', 'color_fase': 'TextEdit', 'fill': 'TextEdit', 'stroke': 'TextEdit', 'stroke-width': 'TextEdit', 'stroke-opacity': 'TextEdit', 'fill-opacity': 'Range', });
lyr_Regionsgeometry1772051935298_0.set('fieldLabels', {'Name': 'no label', 'ISO': 'no label', 'Two-letter code': 'no label', 'ID': 'no label', 'ID (shortened)': 'no label', });
lyr_output5Puntos2json_1.set('fieldLabels', {'Name': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'fill': 'no label', 'stroke': 'no label', 'stroke-width': 'no label', 'r': 'no label', 'opacity': 'no label', });
lyr_output5AssentamentoBrasiljson_2.set('fieldLabels', {'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', 'color_fase': 'no label', 'fill': 'no label', 'stroke': 'no label', 'stroke-width': 'no label', 'stroke-opacity': 'no label', 'fill-opacity': 'no label', });
lyr_output5AssentamentoBrasiljson_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});