export function createDate(travelDate) {

    const fullDate = new Date();
    let date;
    let day;
    let month;

    const dayDictionary = {};
    dayDictionary[0] = "Sun"
    dayDictionary[1] = "Mon"
    dayDictionary[2] = "Tue"
    dayDictionary[3] = "Wed"
    dayDictionary[4] = "Thu"
    dayDictionary[5] = "Fri"
    dayDictionary[6] = "Sat"

    const monthDictionary = {};
    monthDictionary[1] = "Jan";
    monthDictionary[2] = "Feb";
    monthDictionary[3] = "Mar";
    monthDictionary[4] = "Apr";
    monthDictionary[5] = "May";
    monthDictionary[6] = "Jun";
    monthDictionary[7] = "Jul";
    monthDictionary[8] = "Aug";
    monthDictionary[9] = "Sep";
    monthDictionary[10] = "Oct";
    monthDictionary[11] = "Nov";
    monthDictionary[12] = "Dec";

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
        case "Day After Tomorrow":
            date = fullDate.getDate() + 2;
            day = dayDictionary[fullDate.getDay() + 2];
            month = monthDictionary[fullDate.getMonth() + 2];
            break;
        default:
            break;
    }


    const customDate = `${day}, ${date} ${month}`
    return customDate;


}
