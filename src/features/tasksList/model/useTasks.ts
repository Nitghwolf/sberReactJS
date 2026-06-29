import {useEffect, useState} from "react";
import type { Task } from 'entities/task/model/types';

export type Filter = 'all' | 'completed' | 'incomplete';

export function useTasks(initial: Task[]) {
    const [allTasks, setAllTasks] = useState<Task[]>(initial);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<Filter>('all');

    useEffect(() => {
        setTasks(allTasks);
    }, [allTasks]);

    useEffect(() => {
        switch (filter) {
            case "all":
                setTasks(allTasks);
                break;
            case "completed":
                setTasks(allTasks.filter(task => task.completed));
                break;
            case "incomplete":
                setTasks(allTasks.filter(task => !task.completed));
                break;
        }
    }, [filter]);

    const removeTask = (id: string): void => {
        setAllTasks(prev => prev.filter(task => task.id !== id));
    };

    return { tasks, filter, setFilter, removeTask };
}
