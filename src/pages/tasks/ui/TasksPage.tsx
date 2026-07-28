import { TasksWidget } from 'widgets/tasks';
import { LoginWidget } from "widgets/login";

export function TasksPage() {
    return (
        <div>
            <LoginWidget />
            <h1>Мои задачи</h1>
            <TasksWidget />
        </div>
    )
}
