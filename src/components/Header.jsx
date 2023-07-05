import React from "react"
import sun from "../assets/darkmode/sun-line.svg"
import moon from "../assets/darkmode/moon-fill.svg"

export const Header = ({
  toggleTheme,
  theme,
  handleTaskSubmit,
  taskInput,
  setText,
}) => {
  return (
    <header
      className="flex flex-col  h-60 justify-between items-center w-screen mb-auto bg-gradient-to-br from-blue-600 to-rose-500"
      //   style={{ backgroundImage: "url('/src/assets/bg/bg-1.jpg')" }}
    >
      <div className="flex justify-between items-center w-96 pt-16">
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
      <form
        action=""
        className="top-20 my-auto"
        value=""
        onSubmit={handleTaskSubmit}
      >
        <input
          ref={taskInput}
          type="text"
          name="todo"
          placeholder="Create a new todo.."
          className="w-96 h-14 border-2 rounded-lg text-center font-semibold text-sm md:text-base  active:border-none"
          id="todo-input-el"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </header>
  )
}

export default Header
