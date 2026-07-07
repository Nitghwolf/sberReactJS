import { TasksList, useTasks } from 'features/tasksList';
import { FilterButton } from "shared/ui/FilterButton.tsx";
import styles from "./TasksWidget.module.css";

export function TasksWidget() {
    const { tasks, filter, setFilter, removeTask } = useTasks();

    return (
        <div>
            <div className={styles.buttonContainer}>
                <FilterButton filter={filter} setFilter={setFilter} />
            </div>
            <TasksList tasks={tasks} removeTask={removeTask} />
        </div>
    )
}
