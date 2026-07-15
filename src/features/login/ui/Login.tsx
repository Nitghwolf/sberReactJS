import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from "./Login.module.css";
import { Button, Typography } from "antd";
import { DeleteFilled } from "@ant-design/icons";

const schema = z.object({
    username: z.string().min(3, 'Минимум 3 символа'),
    email: z.email('Некорректный email'),
    password: z.string().min(6, 'Минимум 6 символов'),
    passwordEqual: z.string(),
    links: z.array(z.url('Некорректный URL')),
}).refine((data) => data.password === data.passwordEqual, {
    message: "Пароли не совпадают",
    path: ["passwordEqual"],
});

type FormData = z.infer<typeof schema>;

const Login = () => {
    const { register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            links: [''],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'links' as never,
    });

    const onSubmit = (data: FormData) => {
        console.log('Отправка формы:', data);
    };

    return (
        <div className={styles.login}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography.Title level={5}>Имя пользователя</Typography.Title>
                <input
                    className={styles.input}
                    {...register('username')}
                />
                {errors.username?.message ? <p className={styles.errorText}>{errors.username?.message}</p> : null}

                <Typography.Title level={5}>Email</Typography.Title>
                <input
                    className={styles.input}
                    {...register('email')}
                />
                {errors.email?.message ? <p className={styles.errorText}>{errors.email?.message}</p> : null}

                <Typography.Title level={5}>Пароль</Typography.Title>
                <input
                    type="password"
                    className={styles.input}
                    {...register('password')}
                />
                {errors.password?.message ? <p className={styles.errorText}>{errors.password?.message}</p> : null}

                <Typography.Title level={5}>Подтверждение пароля</Typography.Title>
                <input
                    type="password"
                    className={styles.input}
                    {...register('passwordEqual')}
                />
                {errors.passwordEqual?.message ? <p className={styles.errorText}>{errors.passwordEqual?.message}</p> : null}

                <h3>Ссылки:</h3>
                {fields.map((field, index) => (
                    <>
                        <div key={field.id} className={styles.inputLinks}>
                            <input
                                {...register(`links.${index}`)}
                                className={styles.input}
                                placeholder={`Ссылка #${index + 1}`}
                            />
                            <Button
                                type="primary"
                                onClick={() => remove(index)}
                                shape="square"
                                icon={<DeleteFilled />}
                                className={styles.deleteButton}
                            />
                        </div>
                        {errors?.links?.[index]?.message ? <p className={styles.errorText}>{errors?.links?.[index]?.message}</p> : null}
                    </>
                ))}
                <Button onClick={() => append('')} className={styles.addButton}>
                    Добавить ссылку
                </Button>

                <button className={styles.button} type="submit">Войти</button>
            </form>
        </div>
    );
};

export { Login };
