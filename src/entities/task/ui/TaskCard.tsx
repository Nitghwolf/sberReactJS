import type { Task } from "entities/task";
import styles from "./TaskCard.module.css";
import { CheckCircleOutlined,
    CloseCircleOutlined,
    DeleteOutlined
} from "@ant-design/icons";
import { memo } from "react";

type Props = {
    task: Task;
    removeTask: (id: string) => void;
};

const TaskCard = memo(function TaskCard({ task, removeTask }: Props) {
    return (
        <div className={styles.card}>
            <p>{task.title}</p>
            <span>{task.completed ?
                <CheckCircleOutlined className={styles.completedIcon} /> :
                <CloseCircleOutlined className={styles.notCompletedIcon} />}
            </span>
            <DeleteOutlined className={styles.deletedIcon} onClick={() => removeTask(task.id)} />
        </div>
    );
});

export { TaskCard };
