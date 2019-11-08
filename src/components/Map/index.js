import React, { useState } from "react"
import MapGL, {
  AttributionControl,
  FullscreenControl,
  NavigationControl,
} from "@urbica/react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

import CentresHeatmap from "./CentresHeatmap"
import CentreInfo from "./CentreInfo"

export default () => {
  const [centreId, setCentreId] = useState(null)
  const [viewport, setViewport] = useState({
    latitude: 55.21837537667136,
    longitude: -3.3536159702232453,
    zoom: 5,
  })

  return (
    <>
      {centreId && <CentreInfo id={centreId} setCentreId={setCentreId} />}
      <div style={{ width: "100vw", height: "100vh" }}>
        <MapGL
          {...viewport}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/recyclemapuk/ck2lgo0ep09hs1co2o7boernb"
          accessToken={`${process.env.GATSBY_MAPBOX_API_TOKEN}`}
          onViewportChange={viewport => setViewport(viewport)}
          attributionControl={false}
        >
          <AttributionControl
            compact={false}
            position="bottom-right"
            customAttribution="Inspired by https://beta.recyclemap.ru/"
          />
          <FullscreenControl position="top-right" />
          <NavigationControl showZoom position="top-right" />

          <CentresHeatmap setCentreId={setCentreId} />
        </MapGL>
      </div>
    </>
  )
}
