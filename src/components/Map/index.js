import React, { useState } from "react"
import MapGL, {
  FullscreenControl,
  NavigationControl,
} from "@urbica/react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

import CentresHeatmap from "./CentresHeatmap"
import CentreInfo from "./CentreInfo"

export default () => {
  const [centreId, setCentreId] = useState(null)
  const [viewport, setViewport] = useState({
    latitude: 51.04375803746101,
    longitude: -0.1742255640437182,
    zoom: 8,
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
        >
          <FullscreenControl position="top-right" />
          <NavigationControl showZoom position="top-right" />

          <CentresHeatmap setCentreId={setCentreId} />
        </MapGL>
      </div>
    </>
  )
}
