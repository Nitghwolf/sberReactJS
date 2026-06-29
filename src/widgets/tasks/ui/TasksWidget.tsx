import { TasksList, useTasks } from 'features/tasksList';
import type { Task } from "entities/task";
import { FilterButton } from "shared/ui/FilterButton.tsx";
import styles from "./TasksWidget.module.css";

const tasksMock: Task[] = [
    {id: "1", title: "Task 1", completed: false},
    {id: "2", title: "Task 2", completed: false},
    {id: "3", title: "Task 3", completed: true},
    {id: "4", title: "Task 4", completed: true}
];

export function TasksWidget() {
    const { tasks, filter, setFilter, removeTask } = useTasks(tasksMock);

    return (
        <div>
            <div className={styles.buttonContainer}>
                <FilterButton filter={filter} setFilter={setFilter} />
            </div>
            <TasksList tasks={tasks} removeTask={removeTask} />
        </div>
    )
}
