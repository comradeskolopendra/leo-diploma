
const activity = [1.2, 1.375, 1.55, 1.725, 1.9];
const basicLoseWeight = 250;

interface ICalcResults {
    first: number;
    second: number;
    third: number;
    losingPerMonth: number;
    normalPerDay: number;
    error: string;
}

export const calcCalories = (
    weight: number,
    age: number,
    height: number,
    sex: "man" | "woman",
    factorActivity: number,
    typeLose: number
): ICalcResults => {
    const result = {
        first: 0,
        second: 0,
        third: 0,

        losingPerMonth: 0,
        normalPerDay: 0,

        error: ""
    };

    if (sex === "man") {
        result.normalPerDay = ((10 * weight) + (6.25 * height) - (5 * age) + 5) * activity[factorActivity];
        result.losingPerMonth = result.normalPerDay - (basicLoseWeight * typeLose);

        if (result.losingPerMonth < 1400) {
            result.error = "Нельзя потреблять ниже 1400 ккал в день. Вам не стоит худеть :)";

            return result;
        }

        result.first = ((basicLoseWeight * typeLose) * 1) / 1000 * 4;
        result.second = ((basicLoseWeight * typeLose) * 2) / 1000 * 4;
        result.third = ((basicLoseWeight * typeLose) * 3) / 1000 * 4;
    } else {
        result.normalPerDay = ((10 * weight) + (6.25 * height) - (5 * age) - 161) * activity[factorActivity];
        result.losingPerMonth = result.normalPerDay - (basicLoseWeight * typeLose);

        if (result.losingPerMonth < 1200) {
            result.error = "Нельзя потреблять ниже 1200 ккал в день. Вам не стоит худеть :)";

            return result;
        }

        result.first = ((basicLoseWeight * typeLose) * 1) / 1000 * 4;
        result.second = ((basicLoseWeight * typeLose) * 2) / 1000 * 4;
        result.third = ((basicLoseWeight * typeLose) * 3) / 1000 * 4;
    }

    return result;
};

export const formatErrorRu = (error: string) => {
    switch (error) {
        case "auth/invalid-email":
            return "Не существует пользователя с такой электронной почтой";

        case "auth/invalid-credential":
            return "Неверные данные для входа."

        default:
            return "Ошибка!"
    }
};