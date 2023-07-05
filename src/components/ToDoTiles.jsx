import React, { useState } from "react"
import binLight from "../assets/delete-bin-fill.svg"
import binDark from "../assets/delete-bin-line.svg"
import iconTick from "../assets/icon-check.svg"

const ToDoTiles = ({ taskName, id, setToDo, todo, theme }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleTaskClick = (id) => {
    setIsClicked(!isClicked)
    const updateTask = todo.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        }
      }
      return task
    })
    setToDo((prevState) => [...updateTask])
  }

  const handleDeleteTaskClick = (id) => {
    setToDo((preList) => todo.filter((task) => task.id !== id))
  }

  let iconCheckStyle = {
    backgroundImage: `url(${iconTick})`,
  }

  //   change isComplete to true
  //   check if taskId matches the selected taskId
  // if matches, we want to update(map) todo (setToDo) to not include that id

  return (
    <li className="flex gap-4 px-5 items-center w-96 h-14 transition-all duration-400 font-semibold">
      {/* button to close task */}
      <button
        className={`w-7 h-7 flex items-center justify-center rounded-full bg-transparent border ${
          isClicked
            ? "bg-no-repeat bg-contain bg-center bg-gradient-to-br from-blue-400 to-pink-500"
            : ""
        }`}
        onClick={() => handleTaskClick(id)}
      >
        {isClicked ? (
          <img src={iconTick} className="w-3 absolute animate-pop" />
        ) : (
          ""
        )}
      </button>

      {/* task name */}
      <p className={`${isClicked ? "line-through" : ""}`}>{taskName}</p>
      {/* remove task from view */}
      <img
        src={theme === "light" ? binLight : binDark}
        className="font-extralight ml-auto w-5 cursor-pointer transform hover:rotate-12 hover:scale-125 transition-all duration-300 ease-in-out "
        onClick={() => handleDeleteTaskClick(id)}
      />
    </li>
  )
}

export default ToDoTiles
