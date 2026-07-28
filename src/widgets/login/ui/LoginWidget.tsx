import { Button, Modal } from "antd";
import { useState } from "react";
import styles from "./LoginWidget.module.css";
import { Login } from "features/login";

export function LoginWidget() {
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
        <div className={styles.loginWidget}>
            <Button type="primary" onClick={showModal}>
                Регистрация
            </Button>
            <Modal
                title="Регистрация"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Login />
            </Modal>
        </div>
    )
}
