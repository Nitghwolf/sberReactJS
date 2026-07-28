import { TasksWidget } from 'widgets/tasks';
import { LoginWidget } from "widgets/login";
import { UseRefWidget } from "widgets/useRef";

export function TasksPage() {
    return (
        <div>
            <UseRefWidget />
            <LoginWidget />
            <h1>Мои задачи</h1>
            <TasksWidget />
        </div>
    )
}
