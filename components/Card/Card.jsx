import React from 'react'

export default function Card({ children }) {
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card">
        {children}
      </div>
    </div>
  )
}
