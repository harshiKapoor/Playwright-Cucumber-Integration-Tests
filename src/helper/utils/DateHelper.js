import { dayDictionary, monthDictionary } from "./DateConsts.js"

function createDate(travelDate) {

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
//actualDepTime = 5:09pm
// userPreferredDepTime = 5:00pm
function compareDate(actualDepTime, userPreferredDepTime) {
    let actualTime = actualDepTime.split(':');
    let preferredTime = userPreferredDepTime.split(":");
    let actualTimeInMins = parseInt(actualTime[0] * 3600 + actualTime[1]);
    let preferredTimeInMins = parseInt(preferredTime[0] * 3600 + preferredTime[1]);
    return actualTimeInMins > preferredTimeInMins


}
export { createDate, compareDate }
