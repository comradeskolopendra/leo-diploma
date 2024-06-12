import { ChangeEvent, FormEvent, useState } from "react";
import { calcCalories } from "../../../../helpers";

import { useAppDispatch } from "../../../../redux/hooks";
import { setCalcError, setCalcResults } from "../../../../redux/store";
import styles from "./calculator.module.css";

import Button from "../../../../components/button/button";
import CalculatorForm from "./calculator-form/calculator-form";
import Result from "./result/result";

export interface ICalculator {
    weight: string;
    age: string;
    height: string;
    sex: "man" | "woman";
    factorActivity: string;
    typeLose: string;
}

const Calculator = () => {
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState<ICalculator>({
        weight: "",
        age: "",
        height: "",
        sex: "man",
        factorActivity: "0",
        typeLose: "1"
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (Object.values(formData).some(element => element === "")) {
            dispatch(setCalcError("Вы не ввели некоторые параметры"))
            return;
        }

        console.log(formData)

        dispatch(setCalcResults(
            calcCalories(
                +formData.weight!,
                +formData.age!,
                +formData.height!,
                formData.sex!,
                +formData.factorActivity!,
                +formData.typeLose!
            )
        ))
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    return (
        <section id="calc">
            <h2 className={styles.title}>Калькулятор калорий</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <CalculatorForm formData={formData} handleChange={handleChange} />
                <Button type="submit">Расчитать!</Button>
            </form>

            <Result />
        </section>
    )
};

export default Calculator;