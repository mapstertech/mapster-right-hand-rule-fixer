<script src="https://unpkg.com/@mapbox/geojsonhint@latest/geojsonhint.js"></script>
<script src="./lib/rewind-browser.js"></script>
<link href="./style.css" rel="stylesheet" />

## Mapster GeoJSON Right-Hand-Rule Rewinder

This replaces a web tool that was living on our website but worked inadequately until recently. Enjoy this tool, based on the [Mapbox rewind Node library](https://github.com/mapbox/geojson-rewind).

### Tool

<p>Upload or paste your geoJSON below, and press the button.</p>
<div>
  <div><input type="file" id="initial_geojson_file" /></div>
  <div><textarea id="initial_geojson"></textarea></div>
  <div><button id="rewind">Rewind</button></div>

  <div id='mapster-map-loader'>
    Loading...
    <svg width='38' height='38' viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg' stroke='#333'>
      <g fill='none' fill-rule='evenodd'>
          <g transform='translate(1 1)' stroke-width='2'>
              <circle stroke-opacity='.5' cx='18' cy='18' r='18'/>
              <path d='M36 18c0-9.94-8.06-18-18-18'>
                  <animateTransform
                      attributeName='transform'
                      type='rotate'
                      from='0 18 18'
                      to='360 18 18'
                      dur='1s'
                      repeatCount='indefinite'/>
              </path>
          </g>
      </g>
    </svg>
  </div>
</div>

<script src="./script.js"></script>

### Usage

Paste your geoJSON into the text area above, and hit "Rewind".

### Support or Contact

Having any trouble? Get in touch with us at [https://mapster.me](https://mapster.me).
