export default function GoogleMaps() {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          src="https://maps.google.com/maps?q=sofia%20softuni&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder={0}
          scrolling="no"
          style={{ width: 900, height: 500 }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".mapouter{position:relative;height:500px;width:900px;background:#fff;} .maprouter a{color:#fff !important;position:absolute !important;top:0 !important;z-index:0 !important;}",
          }}
        />
        <a href="https://blooketjoin.org/blooket-host/">blooket host</a>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".gmap_canvas{overflow:hidden;height:500px;width:900px}.gmap_canvas iframe{position:relative;z-index:2}",
          }}
        />
      </div>
    </div>
  );
}
