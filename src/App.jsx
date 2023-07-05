import { useState, useEffect, useRef, useMemo } from "react"
import { v4 as uuidv4 } from "uuid"
import ToDoTiles from "./components/ToDoTiles"
import Header from "./components/Header"
import NoTask from "./components/NoTask"
import Footer from "./components/Footer"

function App() {
  // state to store todo task
  const [todo, setToDo] = useState(() => {
    const storedToDo = localStorage.getItem("todo")
    return storedToDo ? JSON.parse(storedToDo) : []
  })

  // state to track filtered task
  const [filtered, setFiltered] = useState([])
  // state to store completed task
  const [completedTask, setCompletedTask] = useState([])

  // state to track new todo task
  const [text, setText] = useState("")

  const [theme, setTheme] = useState(() => {
    const activeTheme = localStorage.getItem("theme")
    return activeTheme || "light"
  })

  useMemo(() => todo, [todo])

  const taskInput = useRef()

  useEffect(() => {
    setFiltered(todo)
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  const handleTaskSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      taskName: text,
      isComplete: false,
      id: uuidv4(),
    }
    // clears task input filed after submitting task
    taskInput.current.value = ""

    setToDo((prevState) => [...prevState, newTodo])
  }

  // render the task into the ul
  const renderToDo = filtered.map((task) => (
    <ToDoTiles
      key={task.id}
      {...task}
      todo={todo}
      setToDo={setToDo}
      theme={theme}
    />
  ))
  // clear complete todo task
  const onClearCompleteClick = () => {
    setToDo(todo.filter((task) => !task.isComplete))
    setCompletedTask(todo.filter((task) => task.isComplete))
  }

  console.log(completedTask)
  // localStorage.clear()
  return (
    <main className="text-gray-700">
      {/* Header */}
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        handleTaskSubmit={handleTaskSubmit}
        taskInput={taskInput}
        setText={setText}
      />
      {/* task goes here */}
      {filtered.length ? (
        <section className="flex flex-col items-center my-4 text-lg ">
          <ul
            className=" rounded-lg border border-slate-400 bg-gray-50 divide-slate-400 divide-y text-sm md:text-base
        "
          >
            {renderToDo}
            {/* dashbaord display */}
            <li className="flex justify-between px-5 items-center w-full h-14 text-center transition-all duration-400 font-semibold md:hidden">
              <p>
                {todo.length} item{todo.length > 1 ? "s" : ""} left
              </p>
              <p
                className="cursor-pointer hover:scale-110 hover:underline hover:text-rose-600 underline-offset-4 transition-all duration-300 ease-in-out"
                onClick={onClearCompleteClick}
              >
                Clear Completed
              </p>
            </li>
          </ul>
        </section>
      ) : (
        <NoTask />
      )}
      {/* Footer goes here */}
      <Footer
        setFiltered={setFiltered}
        todo={todo}
        completedTask={completedTask}
      />
    </main>
  )
}

export default App
