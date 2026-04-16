import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";
import {getFilteredTasks} from "./Utilites/getFilteredTasks.ts";


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValueType = "All" | "Active" | "Completed"

const titleName = "What to do"

export const App = () => {
    let [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])

    const deleteTask = (taskId: TaskType["id"]) => {
        const filteredTasks = tasks.filter(t => t.id !== taskId)
        setTasks(filteredTasks)
    }

    const [filter, setFilter] = useState<FilterValueType>("Completed")
    const gf = getFilteredTasks(tasks, filter)
    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }


    return (
        <div className="app">
            <TodolistItem
                title={titleName}
                tasks={gf}
                deleteTask={deleteTask}
                changeFilter={changeFilter}
            />
        </div>
    )
}
