import { useState, useEffect, useRef, useMemo } from "react"
import { v4 as uuidv4 } from "uuid"
import ToDoTiles from "./components/ToDoTiles"
import Header from "./components/Header"
import NoTask from "./components/NoTask"
import Footer from "./components/Footer"
import FooterDashboard from "./components/FooterDashboard"

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

  const taskInput = useRef()

  // caching to-do incase list gets exceptionally large
  useMemo(() => todo, [todo])

  useEffect(() => {
    document.querySelector("body").classList.remove("dark", "light")
    document.querySelector("body").classList.add(theme)
  }, [theme])

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
  const renderToDo = filtered.map((task, index) => (
    <ToDoTiles
      key={task.id}
      {...task}
      todo={todo}
      setToDo={setToDo}
      theme={theme}
      isFirst={index === 0} // Check if it's the first element
    />
  ))
  // clear complete todo task
  const onClearCompleteClick = () => {
    // filter todo list for task that are not completed (false). This would remove the task with isComplete === true
    setToDo(todo.filter((task) => !task.isComplete))
  }

  return (
    <>
      {/* Header */}
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        handleTaskSubmit={handleTaskSubmit}
        taskInput={taskInput}
        setText={setText}
      />
      {/* task goes here */}
      <div className="w-full m-w-md px-4">
        {filtered.length ? (
          <section className="flex flex-col items-center my-4 mx-auto text-lg max-w-md">
            <ul className="rounded-lg border h-auto w-full border-slate-400 bg-gray-50 divide-slate-400 divide-y text-sm md:text-base">
              {renderToDo}
              <FooterDashboard
                todo={todo}
                onClearCompleteClick={onClearCompleteClick}
              />
            </ul>
          </section>
        ) : (
          <NoTask />
        )}
        <Footer
          setFiltered={setFiltered}
          todo={todo}
          completedTask={completedTask}
        />
      </div>
      {/* Footer goes here */}
    </>
  )
}

export default App
