import type {TaskType} from './App'
import {Button} from './Button'

type TodolistItemType = {
    title: string
    tasks: TaskType[]
    deleteTask: (taskId: TaskType["id"]) => void

}

export const TodolistItem = ({title, tasks,deleteTask}: TodolistItemType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'+'}/>
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <Button
                                    onClick={() => {deleteTask(task.id)}}
                                    title={"X"}/>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    )
}
