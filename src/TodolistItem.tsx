import {FilterValueType, TaskType} from './App'
import {Button} from './Button'

type TodolistItemType = {
    title: string
    tasks: TaskType[]
    deleteTasks: (taskId: TaskType["id"]) => void
    changeTodolistFilter: (filter: FilterValueType) => void


}

const TodolistItem = ({
                          title,
                          tasks,
                          deleteTasks,
                          changeTodolistFilter
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
                                    title={"хуй"}
                                    onClick={() => deleteTasks(task.id)}
                                />
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button
                    onClick={() => changeTodolistFilter("All")}
                    title={'All'}/>
                <Button
                    onClick={() => changeTodolistFilter("Active")}
                    title={'Active'}/>
                <Button
                    onClick={() => changeTodolistFilter("Completed")}
                    title={'Completed'}/>
            </div>
        </div>
    )
}
export default TodolistItem
