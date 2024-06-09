import { FC } from "react";
import styles from "./club.module.css";

interface ClubProps {
    name: string;
    photo: string;
    description: string;
    address: string;
    network: string;
    typeNetwork: string;
}

const Club: FC<ClubProps> = ({ name, photo, address, description, network, typeNetwork }) => {
    return (
        <article className={styles.card}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${photo})` }}
            />

            <section className={styles.contents}>
                <div>
                    <h3>{name.toUpperCase()}</h3>
                    <p>{description}</p>
                </div>
                <div>
                    <p>Адрес: <strong>{address}</strong></p>
                    <a href={network} target="_blank" className={`${styles.link} ${typeNetwork.toLowerCase()}`}>
                        {typeNetwork === "site" ? "Cайт" : typeNetwork}
                    </a>
                </div>
            </section>
        </article>
    )
};

export default Club;