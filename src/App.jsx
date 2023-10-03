import { useEffect } from "react";
import { useState } from "react";
import Timer from "./components/Timer";
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("All");
  const [comment, setComment] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  const startEditing = (id) => setEditingId(id);
  const stopEditing = () => setEditingId(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (Array.isArray(savedTodos)) {
      setTodos(savedTodos);
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  const addTask = () => {
    console.log(text);
    if (text.trim() !== "") {
      const newText = {
        id: Date.now(),
        text: text,
        completed: false,
        comment: comment,
        description: description,
        createdAt: new Date().toLocaleTimeString(), // Add a createdAt time
        createdOn: new Date().toLocaleDateString(),
        isEditing: false,
        category,
      };
      setTodos([...todos, newText]);
      localStorage.setItem("todos", JSON.stringify(newText));

      setText("");
      setDescription("");
      setComment("");
    }
    console.log(todos);
  };

  const handleDelete = (taskId) => {
    const newText = todos.filter((todo) => todo.id !== taskId);
    setTodos(newText);
    localStorage.setItem("todos", JSON.stringify(newText));
  };

  // const handleEdit = (taskId) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === taskId ? { ...todo, isEditing: !todo.isEditing } : todo
  //     )
  //   );
  // };

  // const editTodo = (taskId, newText) => {
  //   const editedTodo = todos.map((todo) =>
  //     todo.id === taskId ? { ...todo, text: newText } : todo
  //   );
  //   setTodos(editedTodo);
  //   localStorage.setItem("todos", JSON.stringify(editedTodo));
  // };

  const updateTodoText = (id, newText) => {
    const newTask = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(newTask);
    localStorage.setItem("todos", JSON.stringify(newTask));
  };

  const toggleTodo = (todoId) => {
    const newText = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newText);
    localStorage.setItem("todos", JSON.stringify(newText));
  };

  const displayedTodos = todos.filter((todo) => {
    let statusMatch = true;
    let categoryMatch = true;

    if (filter === "Active") statusMatch = !todo.completed;
    else if (filter === "Completed") statusMatch = todo.completed;

    if (category !== "All") categoryMatch = todo.category === category;

    return statusMatch && categoryMatch;
  });

  const noun = todos.length;

  return (
    <div className=" min-h-screen bg-gradient-to-r from-red-400 via-green-500 to-amber-500 bg-opacity-25   flex flex-col justify-center items-center">
      <div className="time ">
        <div className="timerPlace absolute top-0 left-0 text-[24px] md:p-4 bg-gradient-to-r from-red-400 via-red-500 to-amber-600 bg-clip-text text-transparent font-extrabold md:text-5xl  text-white">
          <Timer />
        </div>
      </div>
      <div className="todos-container   w-full     flex flex-col justify-center items-center gap-6 p-8 ">
        <div className="Todo-detail  ">
          <h1 className="text-4xl text-white">Todo List</h1> <br />
          <span className=" text-[24px] text-white ">
            {" "}
            {noun} task{noun !== 1 && noun !== 0 && "s"} remaining
          </span>
        </div>

        <div className="todos-structure w-full flex flex-col gap-4">
          <div className="select flex gap-6 md:ml-[30%] ">
            <select
              className=" border-none outline-none rounded-md shadow-lg backdrop-sepia p-2 "
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="General">General</option>
              <option value="Education">Education</option>
              <option value="Market">Market</option>
            </select>
            <select
              className=" border-none outline-none rounded-md shadow-lg backdrop-sepia p-2 "
              name="select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              id=""
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>
          </div>{" "}
          <div className="inputBtn flex gap-6 md:ml-[30%]">
            <input
              className=" border-none outline-none rounded-md shadow-lg shadow-pink-500 backdrop-sepia p-2"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Whats new today..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                  setText("");
                }
              }}
            />
            <button
              className="border whitespace-nowrap mr-3 bg-blue-400 hover:bg-blue-600 rounded-md shadow-lg shadow-red-600  md:py-2 md:px-4"
              onClick={addTask}
            >
              Add task
            </button>
          </div>
          <div className="describe flex gap-12 md:ml-[30%]">
            {/* <input
              className=" border-none outline-none rounded-md shadow-lg backdrop-sepia p-2 "
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add your comments ..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setComment(text);
                  setText("");
                }
              }}
            /> */}

            <input
              className=" border-none outline-none rounded-md shadow-lg backdrop-sepia p-2 "
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add your description..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setDescription(text);
                  setText("");
                }
              }}
            />
          </div>
          <br />
        </div>
        <div className="display   mr-96 whitespace-nowrap w-full md:flex md:flex-col justify-start mr-[50%] ">
          <ul className="text-white ml-56 space-y-2 ">
            {displayedTodos?.map((todo) => (
              <li
                key={todo.id}
                className=" md:border-2 md:border-black border-collapse rounded-md md:p-2 md:flex md:flex-col "
              >
                <div className="textDelete flex    ">
                  <div className="spanInput      ">
                    <input
                      className="rounded-lg text-lg"
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    {editingId === todo.id ? (
                      <input
                        type="text"
                        className="text-black p-2 rounded-md shadow-lg border-none outline-none"
                        defaultValue={todo.text}
                        onBlur={(e) => {
                          updateTodoText(todo.id, e.target.value);
                          stopEditing();
                        }}
                      />
                    ) : (
                      <span
                        className={`${
                          todo.completed ? "line-through" : ""
                        } text-black`}
                      >
                        {" "}
                        <span className="text-black text-[24px] font-bold  ">
                          {" "}
                          {todo.text}
                        </span>{" "}
                        {"  "}
                        {todo.timeStamp}
                        <div className="paras text-purple-800 font-semibold">
                          <p className=" text-sm ml-2">
                            Created at: {todo.createdAt}
                          </p>
                          <p className="  text-sm ml-2">
                            Created on: {todo.createdOn}
                          </p>
                          <p className="  text-sm ml-2">
                            Comment: {todo.comment}
                          </p>
                          <p className="  text-sm ml-2">
                            Description : {todo.description}
                          </p>
                        </div>
                      </span>
                    )}
                  </div>

                  <div className="editDelBtn flex gap-4 mr-32">
                    <button
                      className="text-green-600-800 font-bold text-xl"
                      onClick={() => startEditing(todo.id)}
                    >
                      Edit
                    </button>

                    <button
                      className="text-red-800 font-bold text-xl"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Del
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
