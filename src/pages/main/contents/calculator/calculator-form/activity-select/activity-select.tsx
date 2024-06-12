import { ChangeEventHandler, FC } from "react";
import styles from "./activity-select.module.css";
import type { ICalculator } from "../../calculator";

interface ActivityChoiceProps {
    handleChange: ChangeEventHandler<HTMLSelectElement>;
}

const ActivityChoice: FC<ActivityChoiceProps> = ({ handleChange }) => {
    return (
        <>
            <div className={styles.activitySelect}>
                <label htmlFor="activity">Ваша активность:</label>
                <select name="factorActivity" onChange={handleChange} id="activity">
                    <option defaultChecked value="0">Нет никаких тренировок, сидячая работа</option>
                    <option value="1">Небольшие пробежки, легкая гимнастика 1-3 раза в неделю</option>
                    <option value="2">Занятия спортом со средними нагрузками 3-5 раз в неделю</option>
                    <option value="3">Полноценные тренировки 6-7 раз в неделю</option>
                    <option value="4">Тяжелые тренирови более 7 раз в неделю</option>
                </select>
            </div>
        </>
    )
};

export default ActivityChoice;