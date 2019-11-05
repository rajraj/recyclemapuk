import React, { useState } from "react"
import MapGL, {
  FullscreenControl,
  NavigationControl,
} from "@urbica/react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

import CentresHeatmap from "./CentresHeatmap"

export default () => {
  const [viewport, setViewport] = useState({
    latitude: 55.21837537667136,
    longitude: -3.3536159702232453,
    zoom: 5,
  })

  return (
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

        <CentresHeatmap />
      </MapGL>
    </div>
  )
}
