import React from "react"
import { useQuery } from "@apollo/react-hooks"

import { CENTRES_BY_PK } from "./operations.graphql"

const CentreInfo = ({ id, setCentreId }) => {
  const { loading, error, data } = useQuery(CENTRES_BY_PK, {
    variables: {
      id,
    },
  })

  if (loading) return null
  if (error) return null

  const { name } = data.centres_by_pk

  return <div className="sidebar">{name}</div>
}

export default CentreInfo
