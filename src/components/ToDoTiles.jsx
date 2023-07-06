import React, { useState } from "react"
import binDark from "../assets/delete-bin-fill.svg"
import binLight from "../assets/delete-bin-line.svg"
import iconTick from "../assets/icon-check.svg"

const ToDoTiles = ({
  taskName,
  id,
  setToDo,
  todo,
  theme,
  isFirst,
  isComplete,
}) => {
  const [isClicked, setIsClicked] = useState(false)

  // dnd

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

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", id)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const droppedItemId = e.dataTransfer.getData("text/plain")
    const updatedTodo = todo.slice() // Create a copy of the todo array
    const droppedItemIndex = updatedTodo.findIndex(
      (item) => item.id === droppedItemId
    )
    const currentTaskIndex = updatedTodo.findIndex((item) => item.id === id)

    // Rearrange the elements
    ;[updatedTodo[droppedItemIndex], updatedTodo[currentTaskIndex]] = [
      updatedTodo[currentTaskIndex],
      updatedTodo[droppedItemIndex],
    ]

    setToDo(updatedTodo)
  }

  return (
    <li
      className={`flex gap-4 px-5 py-3 items-center transition-all duration-400 font-semibold dark:bg-slate-700 dark:text-slate-400 rounded-bl-none rounded-br-none ${
        isFirst ? "rounded-t-lg" : ""
      } `}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* button to close task */}
      <div className="button-wrapper">
        {" "}
        <button
          className={`w-7 h-7 flex items-center justify-center rounded-full bg-transparent border-2 ${
            isComplete === true
              ? "bg-no-repeat bg-contain bg-center bg-gradient-to-br from-blue-400 to-pink-500"
              : ""
          }`}
          onClick={() => handleTaskClick(id)}
        >
          {isComplete === true ? (
            <img src={iconTick} className="w-3 absolute animate-pop" />
          ) : (
            ""
          )}
        </button>
      </div>

      {/* task name */}
      <p
        className={`break-words overflow-auto ${
          isComplete === true ? "line-through" : ""
        } cursor-pointer`}
      >
        {taskName}
      </p>
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
