import React from "react"

export const FooterDashboard = ({ todo, onClearCompleteClick }) => {
  return (
    <li className="flex justify-between px-5 items-center w-full h-14 text-center transition-all duration-400 font-semibold rounded-bl-lg rounded-br-lg text-sm md:text-base md:hidden dark:bg-slate-700 dark:text-slate-200">
      <p>
        {todo.length} item{todo.length > 1 ? "s" : ""} left
      </p>
      <p
        className="cursor-pointer rounded-bl-lg hover:scale-110 hover:text-gray-300 hover:underline underline-offset-4 transition-all duration-300 ease-in-out"
        onClick={onClearCompleteClick}
      >
        Clear Completed
      </p>
    </li>
  )
}

export default FooterDashboard
