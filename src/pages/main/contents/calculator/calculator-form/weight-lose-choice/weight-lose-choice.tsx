import { ChangeEventHandler, FC } from "react";

import styles from "./weight-lose-choice.module.css";
import RadioInput from "../../../../../../components/radio-input/radio-input";
import type { ICalculator } from "../../calculator";

interface WeightLoseChoiceProps {
    handleChange: ChangeEventHandler<HTMLInputElement>;
}

const WeightLoseChoice: FC<WeightLoseChoiceProps> = ({ handleChange }) => {

    return (
        <div className={styles.weightLoseChoice}>
            <RadioInput
                onChange={handleChange}
                value={"1"}
                name={"typeLose"}
                id={"safe"}
                defaultChecked
                labelTitle={"Безопасный вариант похудения"}
            />

            <RadioInput
                onChange={handleChange}
                value={"2"}
                name={"typeLose"}
                id={"basic"}
                labelTitle={"Базовый вариант похудения"}
            />

            <RadioInput
                onChange={handleChange}
                value={"3"}
                name={"typeLose"}
                id={"better"}
                labelTitle={"Усиленный вариант похудения"}
            />

            <RadioInput
                onChange={handleChange}
                value={"4"}
                name={"typeLose"}
                id={"extreme"}
                labelTitle={"Экстримальный вариант похудения"}
            />
        </div>)
};

export default WeightLoseChoice;