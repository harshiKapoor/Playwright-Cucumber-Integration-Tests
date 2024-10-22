import { dayDictionary, monthDictionary } from "./DateBuilderHelper.js"

export function createDate(travelDate) {

    const fullDate = new Date();
    let date;
    let day;
    let month;

    switch (travelDate) {
        case "Tomorrow":
            date = fullDate.getDate() + 1;
            const dayOfWeek = fullDate.getDay() + 1;
            if (dayOfWeek >= 7) {
                day = dayDictionary[0];
            }
            day = dayDictionary[dayOfWeek];

            month = monthDictionary[fullDate.getMonth() + 1];
            break;

        // TODO add more cases 
        default:
            break;
    }


    const customDate = `${day}, ${date} ${month}`
    return customDate;


}
