import { FC } from "react";
import styles from "./club.module.css";

interface ClubProps {
    name: string;
    photo: string;
    description: string;
    address: string;
    network: string;
    typenetwork: string;
}

const Club: FC<ClubProps> = ({ name, photo, address, description, network, typenetwork }) => {
    return (
        <article className={styles.card}>
            <div
                className={styles.image}
                style={photo ? { backgroundImage: `url(${photo})` } : { background: `rgba(128, 128, 128)` }}
            />

            <section className={styles.contents}>
                <div>
                    <h3>{name.toUpperCase()}</h3>
                    <p>{description}</p>
                </div>
                <div>
                    <p>Адрес: <strong>{address}</strong></p>
                    <a href={network} target="_blank" className={`${styles.link} ${typenetwork.toLowerCase()}`}>
                        {typenetwork === "site" ? "Cайт" : typenetwork}
                    </a>
                </div>
            </section>
        </article>
    )
};

export default Club;