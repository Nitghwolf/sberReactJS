import { useRef } from 'react';
import { Button } from "antd";

interface ClickData {
    startTime: number | null;
    clickCount: number;
}

const ClickTimer = () => {
    const clickDataRef = useRef<ClickData>({
        startTime: null,
        clickCount: 0,
    });

    const handleClick = () => {
        if(clickDataRef.current && clickDataRef.current.clickCount === 0){
            clickDataRef.current = { startTime: Date.now(), clickCount: 1 };
            console.log('Кликов:', clickDataRef.current.clickCount);
        } else {
            clickDataRef.current.clickCount += 1;

            console.log('Кликов:', clickDataRef.current.clickCount);
            if(clickDataRef.current.startTime){
                const milliseconds = Date.now() - clickDataRef.current.startTime;

                console.log('Разницу между текущим временем и временем первого клика:',
                    `${Math.floor(milliseconds / 1000)} секунд`
                );
            }
        }
    };

    return <Button onClick={handleClick}>ClickTimer</Button>;
}

export { ClickTimer };
