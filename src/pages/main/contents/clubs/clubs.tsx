import { useAppSelector } from "../../../../redux/hooks";
import Club from "./club/club";

import { getStateClubs } from "./selectors";

import styles from "./clubs.module.css";


const Clubs = () => {
    const clubs = useAppSelector(getStateClubs);

    return (
        <>
            <section id="clubs">
                <h2 className={styles.title}>Клубы</h2>
                <section className={styles.cards}>
                    {clubs.map((club) =>
                        <Club
                            name={club.name}
                            description={club.description}
                            address={club.address}
                            photo={club.photo}
                            network={club.network}
                            typenetwork={club.typenetwork}
                            key={club.name}
                        />
                    )}
                </section>
            </section>
        </>
    )
}

export default Clubs;