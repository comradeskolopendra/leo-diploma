import { ChangeEventHandler, FC } from "react";

import styles from "./sex-choice.module.css";
import RadioInput from "../../../../../../components/radio-input/radio-input";

import type { ICalculator } from "../../calculator";

interface SexChoiceProprops {
    handleChange: ChangeEventHandler<HTMLInputElement>;
}

const SexChoice: FC<SexChoiceProprops> = ({ handleChange }) => {
    return (
        <div className={styles.sexChoice}>
            <RadioInput
                name={"sex"}
                id={"sexMen"}
                value={"man"}
                defaultChecked
                onChange={handleChange}
                labelTitle={"Муж."}
            />

            <RadioInput
                name={"sex"}
                id={"sexWomen"}
                value={"woman"}
                onChange={handleChange}
                labelTitle={"Жен."}
            />
        </div>
    )
};

export default SexChoice;