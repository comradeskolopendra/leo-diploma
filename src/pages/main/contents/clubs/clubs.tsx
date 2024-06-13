import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import Club from "./club/club";

import { getStateClubs, getStateClubsLoading } from "./selectors";

import styles from "./clubs.module.css";

import { request } from "../../../../helpers";
import { setClubs, setClubsLoading } from "../../../../redux/store";

const Clubs = () => {
    const dispatch = useAppDispatch();
    const clubs = useAppSelector(getStateClubs);
    const clubsLoading = useAppSelector(getStateClubsLoading);

    useEffect(() => {
        dispatch(setClubsLoading());

        request("getClubs").then(data => {
            dispatch(setClubs(data));
        })
    }, [])

    return (
        <>
            {clubsLoading && clubs.length === 0 && <h2 className={styles.loading}>Loading...</h2>}
            {!clubsLoading && clubs.length > 0 &&
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
            }
        </>
    )
}

export default Clubs;