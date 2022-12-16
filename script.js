const button = document.getElementById('rewind');
button.addEventListener('click', function() {
  const loader = document.getElementById('mapster-map-loader');
  loader.style.display = 'block';
  const textarea = document.getElementById('initial_geojson');
  const geojson_original = textarea.value;
  if(geojson_original.length > 0) {
    const errors = geojsonhint.hint(JSON.parse(geojson_original));
    console.log(errors)
    if(errors.length > 0) {
      const rewinder = new GeoJSONRewind();
      let newGeoJSON = rewinder.rewind(JSON.parse(geojson_original));
      downloadObjectAsJson(newGeoJSON, 'rewound-geojson.json');
      loader.style.display = 'none';
    } else {
      window.alert("GeoJSON doesn't seem to have any errors! You're all good.");
      loader.style.display = 'none';
    }
  } else {
    const fileInput = document.getElementById('initial_geojson_file');
    var reader = new FileReader();
    reader.onload = function(event) {
      const errors = geojsonhint.hint(event.target.result);
      if(errors.length > 0) {
        const geoJSON = JSON.parse(event.target.result);
        const rewinder = new GeoJSONRewind();
        let newGeoJSON = rewinder.rewind(geoJSON);
        downloadObjectAsJson(newGeoJSON, 'rewound-geojson.json');
        loader.style.display = 'none';
      } else {
        window.alert("GeoJSON doesn't seem to have any errors! You're all good.");
        loader.style.display = 'none';
      }
    };
    reader.readAsText(fileInput.files[0]);
  }
})

function downloadObjectAsJson(exportObj, exportName){
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", exportName);
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
