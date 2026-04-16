import {Button} from './Button'
import {FilterValueType, TaskType} from "./App.tsx";


type TodolistItemType = {
    title: string
    tasks: TaskType[]
    deleteTask: (taskId: TaskType["id"]) => void
    changeFilter: (filter: FilterValueType) => void


}

export const TodolistItem = ({
                                 title,
                                 tasks,
                                 deleteTask,
                                 changeFilter,
                             }: TodolistItemType) => {
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
                                    title={"X"}
                                    onClick={() => deleteTask(task.id)}/>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button
                    title={'All'}
                    onClick={()=> changeFilter("All")}
                />
                <Button
                    title={'Active'}
                    onClick={()=> changeFilter("Active")}
                />
                <Button
                    title={'Completed'}
                    onClick={()=> changeFilter("Completed")}

                />
            </div>
        </div>
    )
}
