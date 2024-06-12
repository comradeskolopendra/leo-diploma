import { ChangeEventHandler, FC } from "react";
import SexChoice from "./sex-choice/sex-choice";
import ActivityChoice from "./activity-select/activity-select";
import WeightLoseChoice from "./weight-lose-choice/weight-lose-choice";
import ValueInputs from "./value-inputs/value-inputs";

import type { ICalculator } from "../calculator";

interface CalculatorFormProps {
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    formData: ICalculator;
}

const CalculatorForm: FC<CalculatorFormProps> = ({ handleChange, formData }) => {

    return (
        <>
            <ValueInputs handleChange={handleChange} formData={formData} />
            <SexChoice handleChange={handleChange} />
            <ActivityChoice handleChange={handleChange} />
            <WeightLoseChoice handleChange={handleChange} />
        </>
    )
};

export default CalculatorForm;