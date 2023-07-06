import React from "react"

export const NoTask = () => {
  return (
    <section className="flex flex-col p-4 my-4 mx-auto text-3xl font-semibold max-w-md h-72 rounded-lg border border-slate-400 bg-gray-50 dark:bg-slate-800 dark:text-slate-200">
      <h1>You have</h1>
      <h1 className="mx-auto">No Task</h1>
      <h1 className="ml-auto">Availiable</h1>
    </section>
  )
}

export default NoTask
