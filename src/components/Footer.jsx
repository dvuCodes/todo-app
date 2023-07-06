import React, { useRef } from "react"

export const Footer = ({ setFiltered, todo }) => {
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
      setFiltered((preList) => todo.filter((task) => task.isComplete))
    }
  }

  return (
    <footer className="flex justify-between p-4 my-4 mx-auto font-semibold text-sm md:text-base w-full max-w-md rounded-lg border border-slate-400  bg-gray-50 dark:bg-slate-700 dark:text-slate-200">
      <p
        className="cursor-pointer hover:text-gray-400 hover:scale-110 hover:underline  underline-offset-4 transition-all duration-300 ease-in-out"
        ref={allBtn}
        onClick={(e) => handleFilterBtnClick(e)}
      >
        All
      </p>
      <p
        className="cursor-pointer hover:text-gray-300 hover:scale-110 hover:underline  underline-offset-4 transition-all duration-300 ease-in-out"
        ref={activeBtn}
        onClick={(e) => handleFilterBtnClick(e)}
      >
        Active
      </p>
      <p
        className="cursor-pointer hover:text-gray-400 hover:scale-110 hover:underline  underline-offset-4 transition-all duration-300 ease-in-out"
        ref={completeBtn}
        onClick={(e) => handleFilterBtnClick(e)}
      >
        Completed
      </p>
    </footer>
  )
}

export default Footer
