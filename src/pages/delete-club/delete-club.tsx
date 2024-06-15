import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/button/button";
import TextInput from "../../components/text-input/text-input";
import { IRemoveClub } from "../../firebase/types";
import { request } from "../../helpers";
import styles from "./delete-club.module.css";

const DeleteClub = () => {
    const [formData, setFormData] = useState<IRemoveClub>({
        name: ""
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }))
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        request("deleteClub",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });
    };

    return (
        <section className={styles.section}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.title}>Удалить клуб</h2>
                <TextInput
                    type="text"
                    placeholder={"Название"}
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                />
                <Button type="submit">Удалить</Button>
            </form>
        </section>
    )
};

export default DeleteClub;