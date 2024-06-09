import { ChangeEvent, FormEvent, useState } from "react";
import { calcCalories } from "../../../../helpers";

import styles from "./calculator.module.css";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setCalcResults } from "../../../../redux/store";
import { getStateCalculatedResult, getStateIsHaveResult } from "./selectors";

interface ICalculator {
    weight: string;
    age: string;
    height: string;
    sex: "man" | "woman";
    factorActivity: string;
    typeLose: string;
}

const Calculator = () => {
    const dispatch = useAppDispatch();
    const { error, first, losingPerMonth, second, third, normalPerDay } = useAppSelector(getStateCalculatedResult);
    const isHaveResult = useAppSelector(getStateIsHaveResult);
    const [formData, setFormData] = useState<ICalculator>({
        weight: "",
        age: "",
        height: "",
        sex: "man",
        factorActivity: "0",
        typeLose: "1"
    });
    const [paramError, setParamError] = useState<string>("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (Object.values(formData).some(element => element === "")) {
            setParamError("Вы не ввели некоторые параметры");
            return;
        }

        const result = calcCalories(
            +formData.weight!,
            +formData.age!,
            +formData.height!,
            formData.sex!,
            +formData.factorActivity!,
            +formData.typeLose!
        )

        setParamError("");
        dispatch(setCalcResults(result))
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;

        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    return (
        <section id="calc">
            <h2 className={styles.title}>Калькулятор калорий</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="weight"
                    className={styles.input}
                    placeholder={"Вес"}
                    value={formData?.weight!}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="age"
                    className={styles.input}
                    placeholder={"Возраст"}
                    value={formData?.age!}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="height"
                    className={styles.input}
                    placeholder={"Рост"}
                    value={formData?.height!}
                    onChange={handleChange}
                />

                <div className={styles.sexChoice}>
                    <div>
                        <label htmlFor="sexMen">Муж.</label>
                        <input
                            type="radio"
                            name="sex"
                            id="sexMen"
                            value={"man"}
                            defaultChecked
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="sexWomen">Жен.</label>
                        <input
                            type="radio"
                            name="sex"
                            id="sexWomen"
                            value={"woman"}
                            onChange={handleChange}
                        />
                    </div>
                </div>

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

                <div className={styles.weightLoseChoice}>

                    <div>
                        <label htmlFor="safe">Безопасный вариант похудения</label>
                        <input
                            type="radio"
                            name="typeLose"
                            id="safe"
                            value={"1"}
                            defaultChecked
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="basic">Базовый вариант похудения</label>
                        <input
                            type="radio"
                            name="typeLose"
                            id="basic"
                            value={"2"}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="better">Усиленный вариант похудения</label>
                        <input
                            type="radio"
                            name="typeLose"
                            id="better"
                            value={"3"}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="extreme">Экстримальный вариант похудения</label>
                        <input
                            type="radio"
                            name="typeLose"
                            id="extreme"
                            value={"4"}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button className={styles.submitButton}>Расчитать!</button>
            </form>

            <section className={styles.result}>
                <div className={styles.errorBlock}>
                    {paramError && <h2>{paramError}</h2>}
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
            </section>
        </section>
    )
};

export default Calculator;