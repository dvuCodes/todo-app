import React, { useRef } from "react"

export const Footer = ({ setFiltered, todo, completedTask }) => {
  const allBtn = useRef()
  const activeBtn = useRef()
  const completeBtn = useRef()

  const handleFilterBtnClick = (e) => {
    const target = e.target
    if (target.innerHTML === "All") {
      setFiltered((preList) => todo.filter((task) => task))
    } else if (target.innerHTML === "Active") {
      setFiltered((preList) => todo.filter((task) => !task.isComplete))
    } else if (target.innerHTML === "Completed") {
      setFiltered((preList) => completedTask.filter((task) => task.isComplete))
    }
  }

  return (
    <footer className="flex justify-between p-4 my-4 mx-auto font-semibold w-96 rounded-lg border border-slate-400  bg-gray-50">
      <p
        className="cursor-pointer hover:text-gray-400"
        ref={allBtn}
        onClick={(e) => handleFilterBtnClick(e)}
      >
        All
      </p>
      <p
        className="cursor-pointer hover:text-gray-400"
        ref={activeBtn}
        onClick={(e) => handleFilterBtnClick(e)}
      >
        Active
      </p>
      <p
        className="cursor-pointer hover:text-gray-400"
        ref={completeBtn}
        onClick={(e) => handleFilterBtnClick(e)}
      >
        Completed
      </p>
    </footer>
  )
}

export default Footer
