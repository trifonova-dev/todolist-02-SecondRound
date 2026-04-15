import {FilterValueType, TaskType} from "../App.tsx";

export const getFilterTasks =(tasks:TaskType[], filter:FilterValueType)=>{
    let filteredTasks = tasks

    if (filter === "Active") {
        filteredTasks = tasks.filter(t => t.isDone === false)
    }
    if (filter === "Completed") {
        filteredTasks = tasks.filter(t => t.isDone === true)
    }
    return filteredTasks
}