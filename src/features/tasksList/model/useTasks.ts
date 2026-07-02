import {useCallback, useMemo, useState} from "react";
import type { Task } from 'entities/task/model/types';

export type Filter = 'all' | 'completed' | 'incomplete';

export function useTasks(initial: Task[]) {
    const [allTasks, setAllTasks] = useState<Task[]>(initial);
    const [filter, setFilter] = useState<Filter>('all');

    const tasks = useMemo(() => {
        switch (filter) {
            case "all":
                return allTasks;
            case "completed":
                return allTasks.filter(task => task.completed);
            case "incomplete":
                return allTasks.filter(task => !task.completed);
        }
    }, [allTasks, filter]);

    const removeTask = useCallback((id: string): void => {
        setAllTasks(prev => prev.filter(task => task.id !== id));
    }, []);

    return { tasks, filter, setFilter, removeTask };
}
