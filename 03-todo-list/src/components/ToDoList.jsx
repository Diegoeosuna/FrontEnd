import { useState } from "react"
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
    const [inputValue, setInputValue] = useState('')
    //Estado para manejar el input para agregar una tarea.

    const [todos, setTodos] = useState([])
    //Estado para almacenar la lista de tareas que voy agregando a un arreglo.

    const handleAddItem = () => {
        if(inputValue.trim()){
            setTodos([...todos, inputValue])
            setInputValue('') //Vacía el input
        }
    }
    //Función que agrega tareas a mi lista.

    const handleDelete = (index) => {
        setTodos(todos.filter((item, i) => i !== index))
    }

return (
    <div>
        <h1>Lista de Tareas</h1>
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={handleAddItem} >Agregar</button>
        <ul>
            {todos.map((item, index) => (
                <ToDoItem 
                    todo={item}
                    handleDelete={() => handleDelete(index)}
                    key={index}
                />
            ))

            }
        </ul>
    </div>
)
}

export default ToDoList