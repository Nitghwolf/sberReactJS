import React from "react";
import type { Filter } from "features/tasksList";
import styles from "./FilterButton.module.css";
import { Select } from "antd";

type Props = {
    filter: Filter;
    setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};

export function FilterButton({ filter, setFilter }: Props) {
    return (
        <Select
            placeholder="Фильтр"
            options={[
                { value: 'all', label: 'Все' },
                { value: 'completed', label: 'Завершенные' },
                { value: 'incomplete', label: 'Не завершенные' },
            ]}
            value={filter}
            onChange={(value) => setFilter(value)}
            className={styles.filterButton}
        />
    );
}
