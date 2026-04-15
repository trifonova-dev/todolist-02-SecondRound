import './App.css'
import TodolistItem from './TodolistItem'
import {useState} from "react";
import {getFilterTasks} from "./Utilites/getFilteredTasks.ts";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValueType = "All" | "Completed" | "Active"

const todolistTitle = "What to learn";

export const App = () => {
    const [tasks, setTasks] = useState<TaskType[]>(
        [
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 2, title: 'JS', isDone: true},
            {id: 3, title: 'ReactJS', isDone: false},
            {id: 4, title: 'Redux', isDone: false},
            {id: 5, title: 'Typescript', isDone: false},
            {id: 6, title: 'RTK query', isDone: false},
        ])

    const deleteTasks = (taskId: TaskType["id"]) => {
        const newFiltredTasks = tasks.filter(t => t.id !== taskId)
        setTasks(newFiltredTasks)
    }

    const [filter, setFilter] = useState<FilterValueType>("Completed")

    const cnangeTodolistFilter = (filter: FilterValueType) => setFilter(filter)
    return (
        <div className="app">
            <TodolistItem
                title={todolistTitle}
                tasks={getFilterTasks(tasks,filter)}
                deleteTasks={deleteTasks}
                changeTodolistFilter={cnangeTodolistFilter}
            />
        </div>
    )
}
