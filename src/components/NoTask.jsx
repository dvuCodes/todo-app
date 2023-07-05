import React from "react"

export const NoTask = () => {
  return (
    <section className="flex flex-col p-4 my-4 mx-auto text-lg font-semibold w-96 h-72 rounded-lg border-2 border-slate-400 bg-gray-50">
      <h1>You have</h1>
      <h1 className="mx-auto">No Task</h1>
      <h1 className="ml-auto">Availiable</h1>
    </section>
  )
}

export default NoTask
