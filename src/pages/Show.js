import React from 'react'
import {Outlet} from 'react-router-dom'

function Show() {
  return (
      <div>
          <Outlet />
          <h1>Show</h1>
    </div>
  )
}

export default Show