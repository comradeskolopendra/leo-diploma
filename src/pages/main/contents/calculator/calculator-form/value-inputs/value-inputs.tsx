import { ChangeEventHandler, FC } from "react";

import TextInput from "../../../../../../components/text-input/text-input";
import type { ICalculator } from "../../calculator";


interface ValueInputsProps {
    handleChange: ChangeEventHandler<HTMLInputElement>;
    formData: ICalculator;
}

const ValueInputs: FC<ValueInputsProps> = ({ handleChange, formData }) => {
    return (
        <>
            <TextInput
                type="text"
                name="weight"
                placeholder={"Вес"}
                value={formData?.weight!}
                onChange={handleChange}
            />
            <TextInput
                type="text"
                name="age"
                placeholder={"Возраст"}
                value={formData?.age!}
                onChange={handleChange}
            />
            <TextInput
                type="text"
                name="height"
                placeholder={"Рост"}
                value={formData?.height!}
                onChange={handleChange}
            />
        </>
    )
}

export default ValueInputs;