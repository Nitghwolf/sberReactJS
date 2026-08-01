import { Button, Modal } from "antd";
import { useState } from "react";
import styles from "./UseRefWidget.module.css";
import { ClickTimer } from "features/refExamples/ClickTimer.tsx";
import { PreviousInput } from "features/refExamples/PreviousInput.tsx";
import { FocusTracker } from "features/refExamples/FocusTracker.tsx";
import { DebouncedLogger } from "features/refExamples/DebouncedLogger.tsx";

export function UseRefWidget() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.useRefWidget}>
            <Button type="primary" onClick={showModal}>
                useRef lesson-5
            </Button>
            <Modal
                title="useRef"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div className={styles.container}>
                    <ClickTimer />
                    <PreviousInput />
                    <FocusTracker />
                    <DebouncedLogger />
                </div>
            </Modal>
        </div>
    )
}
