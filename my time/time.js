const element = document.getElementById("time")
const substract = document.getElementById("substract")
const myTime = setInterval(dateAndTime, 1);
const substruct = setInterval(howLong, 1000);

function dateAndTime() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const daysNumber = [7, 1, 2, 3, 4, 5, 6]
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var date = new Date()
    const dayName = days[date.getDay()]
    const monthName = months[date.getMonth()]
    element.textContent = `
        ${monthName}[${date.getMonth() + 1}]  
        ${Math.round((date.getDate() / 7) + 1)}
        ${dayName}[${daysNumber[date.getDay()]}]  
        ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}  
        ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getMilliseconds()}
    `;
}

function stopInterval() {
    clearInterval(myTime)
}
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////


//define a date object variable that will take the current system date
// todaydate = new Date();
//find the year of the current date
// var oneJan = new Date(todaydate.getFullYear(), 0, 1);
// calculating number of days in given year before a given date 
// var numberOfDays = Math.floor((todaydate - oneJan) / (24 * 60 * 60 * 1000));
// adding 1 since to current date and returns value starting from 0 
// var result = Math.ceil((todaydate.getDay() + 1 + numberOfDays) / 7);
//display the calculated result       
// document.write("Week Numbers of current date (" + todaydate + ") is: <br>" + result);
function howLong() {
    var date = new Date()
    const ago = {
        year: 2020,
        month: 11,
        day: 23,
        hour: 0,
        minute: 0
    }
    const now = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes()
    }
    numYear = now.year - ago.year
    console.log(numYear)
    numMonth = now.month - ago.month
    numDay = now.day - ago.day
    numHour = now.hour - ago.hour
    numMinute = now.minute - ago.minute
    if (numMinute < 0) {
        numHour -= 1
        numMinute += 60
    }
    if (numHour < 0) {
        numDay -= 1
        numHour += 24
    }
    if (numDay < 0) {
        numMonth -= 1
        numDay += 30
    }
    if (numMonth < 0) {
        numYear -= 1
        numMonth += 12
    }
    substract.textContent = `${numYear}Years ${numMonth}Months ${numDay}Days ${numHour}Hours ${numMinute}Minutes`
    return `${numDay}Days ${numHour}Hours ${numMinute} Minutes`
}



// 7 Ways To Upgrade Your Brain
// Read.
// Get a degree.
// Seek out new experiences.
// Think.
// Practice.
// Write.
// Do things that are hard.
// const gag =
console.log("🚀 ~ file: time.js ~ line 41 ~ substructingDate ~ substructingDate", howLong())