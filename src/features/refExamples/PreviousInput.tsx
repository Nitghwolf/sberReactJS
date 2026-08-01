import { Input, Typography } from "antd";
import { useRef, useState } from "react";

const PreviousInput = () => {
    const prevValue = useRef('');
    const [value, setValue] = useState("");

    return (
        <div>
            <Typography.Title level={5}>PreviousInput</Typography.Title>
            <Input
                value={value}
                onChange={(event) => {
                    prevValue.current = value;
                    setValue(event.target.value)
                }}
                allowClear
            />
            <div>Предыдущее значение: {prevValue.current}</div>
        </div>
    );
};

export { PreviousInput };
