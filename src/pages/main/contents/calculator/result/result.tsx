import { useAppSelector } from "../../../../../redux/hooks";
import { getStateCalculatedResult, getStateIsHaveResult } from "../selectors";
import styles from "./result.module.css";

const Result = () => {
    const { error, normalPerDay, losingPerMonth, first, second, third } = useAppSelector(getStateCalculatedResult);
    const isHaveResult = useAppSelector(getStateIsHaveResult);

    return (<section className={styles.result}>
        <div className={styles.errorBlock}>
            {error && <h2>{error}</h2>}
        </div>

        {!error && isHaveResult && (
            <ul className={styles.resultInfo}>
                <li>Для того, чтобы держать текущий вес, вам необходимо потреблять <span>{normalPerDay}</span> калорий в день</li>
                <li>
                    Чтобы сбрасывать вес в выбранном режиме - вам необходимо потреблять <span>{losingPerMonth}</span> калорий в день.
                </li>
                <li>
                    Если вы будете соблюдать диету, то уменьшите свой вес:
                    <ul>
                        <li>За первый месяц суммарно вы сбросите примерно <span>{first}</span> кг.</li>
                        <li>За второй месяц суммарно вы сбросите примерно <span>{second}</span> кг.</li>
                        <li>За третий месяц суммарно вы сбросите примерно <span>{third}</span> кг.</li>
                    </ul>
                </li>
            </ul>
        )}
    </section>)
};

export default Result;