import { Input, Typography } from "antd";
import {useRef, useState} from "react";

const DebouncedLogger = () => {
    const timeoutRef = useRef<number | null>(null);
    const [value, setValue] = useState("");

    const handleChange = (event: any) => {
        const value = event.target.value;
        setValue(value);

        timeoutRef.current && clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            console.log(value);
        }, 1000);
    };

    return (
      <div>
          <Typography.Title level={5}>DebouncedLogger</Typography.Title>
          <Input
              value={value}
              onChange={handleChange}
              allowClear
          />
      </div>
    );
}

export { DebouncedLogger };
