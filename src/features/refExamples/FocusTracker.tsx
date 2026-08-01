import { Button, Input, type InputRef, Typography } from "antd";
import React, { useRef } from "react";
import styles from "./FocusTracker.module.css";

const FocusTracker = () => {
    const inputRef1 = useRef<InputRef>(null);
    const inputRef2 = useRef<InputRef>(null);
    const countFocus = useRef(0);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        if (event.relatedTarget) {
            countFocus.current += 1;
            console.log("Переход фокуса: ", countFocus.current);
        }
    };

    return (
        <div className={styles.focusTracker}>
            <Typography.Title level={5}>FocusTracker</Typography.Title>
            <Input
                ref={inputRef1}
                placeholder="Первый инпут"
                onFocus={handleFocus}
            />
            <Input
                ref={inputRef2}
                placeholder="Второй инпут"
                onFocus={handleFocus}
            />
            <Button onClick={() => inputRef1?.current?.focus()}>Сфокусировать на первом</Button>
        </div>
    );
};

export { FocusTracker };
