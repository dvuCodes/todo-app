import React from "react"
import sun from "../assets/darkmode/icon-sun.svg"
import moon from "../assets/darkmode/icon-moon.svg"

export const Header = ({
  toggleTheme,
  theme,
  handleTaskSubmit,
  taskInput,
  setText,
}) => {
  return (
    <header
      className="flex flex-col h-60 items-center justify-center w-full px-4 mb-auto bg-gradient-to-br from-blue-200 to-rose-400 dark:from-sky-500 dark:to-rose-700 "
      //   style={{ backgroundImage: "url('/src/assets/bg/bg-1.jpg')" }}
    >
      {/* header content wrapper */}
      <div className=" w-full max-w-md flex flex-col text-center gap-10">
        <div className="flex justify-between items-center w-full pt-10">
          <h1 className="text-4xl font-bold text-gray-100">TODO</h1>
          <img
            src={theme === "light" ? moon : sun}
            alt="darkmode-icon"
            className={`w-8 hover:cursor-pointer transition-all duration-300 ${
              theme === "dark" ? "-rotate-90" : ""
            }`}
            onClick={toggleTheme}
          />
        </div>
        {/* form to create new todo */}
        <form action="" className="my-auto" onSubmit={handleTaskSubmit}>
          <input
            ref={taskInput}
            type="text"
            name="todo"
            placeholder="Create a new todo.."
            className="w-full max-w-md h-14 rounded-lg text-center font-semibold text-sm md:text-base dark:bg-slate-700 dark:text-slate-200"
            id="todo-input-el"
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </div>
    </header>
  )
}

export default Header
