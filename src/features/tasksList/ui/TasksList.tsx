import styles from "./TasksList.module.css";
import type { Task } from 'entities/task';
import { TaskCard } from 'entities/task';
import {memo} from "react";

type Props = {
    tasks: Task[];
    removeTask: (id: string) => void;
};

const TasksList = memo(function TasksList({ tasks, removeTask }: Props) {
    return (
        <div className={styles.tasks}>
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} removeTask={removeTask} />
            ))}
        </div>
    );
});

export { TasksList };
