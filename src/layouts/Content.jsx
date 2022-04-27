import React from 'react'
import Menu from "../components/Menu"
import Dashboard from "../components/Dashboard"

export default function Content() {
  return (
    <div className="flex flex-row">
      <div>
        <Menu />
      </div>
      <div>
        <Dashboard />
      </div>
    </div>
  )
}
