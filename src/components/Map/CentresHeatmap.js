import React from "react"
import { Source, Layer } from "@urbica/react-map-gl"
import { useQuery } from "@apollo/react-hooks"

import { ALL_CENTRES } from "./operations.graphql"

const CentresHeatmap = () => {
  const { loading, error, data } = useQuery(ALL_CENTRES)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  let geoData

  if (data !== undefined) {
    const { centres } = data
    const collection = {}

    collection.type = "FeatureCollection"
    collection.features = centres.map(centre => {
      let feature = {}
      feature.type = "Feature"
      feature.properties = { id: centre.id }
      feature.geometry = centre.geometry
      return feature
    })

    geoData = collection
  }

  return (
    <>
      {geoData !== null && (
        <>
          <Source id="centres" type="geojson" data={geoData} />
          <Layer
            id="centreMarkers"
            type="circle"
            source="centres"
            paint={{
              "circle-color": "#5643fc",
              "circle-stroke-color": "white",
              "circle-stroke-width": 1,
            }}
            onClick={circle => console.log(circle.features[0].properties)}
          />
        </>
      )}
    </>
  )
}

export default CentresHeatmap
