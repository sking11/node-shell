require("./bash.js");
const { doesNotMatch } = require("assert");
const si = require('systeminformation');

process.stdin.on("data", (data) => {
    const cmd = data.toString().trim(); //remove the newline
    if (cmd.substring(0,4) === "date") {

        let yearAndChange = (si.time().current/1000/60/60/24/365) + 1970
        let year = Math.floor(yearAndChange);

        let monthAndChange = ((yearAndChange - year) * 12);
        let month = Math.floor(monthAndChange) + 1;

        //week is just used to convert days, as days per month vary
        //so we cannot use those, weekAndChange and week are not displayed.
        let weekAndChange = (yearAndChange - year) * 52
        let week = Math.floor(weekAndChange)

        let dayAndChange = (weekAndChange - week) * 7
        let dayNum = Math.floor(dayAndChange)
        const dayObj = {
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
            7: 'Sunday'
        }
        let day = dayObj[dayNum];

        //stopped here, everything above is correct
        //everything below is not moving at the same pace as the clock is
        let hourAndChange = (dayAndChange - dayNum) * 24 * 7
        let hour = Math.floor(hourAndChange)
        

        let minuteAndChange  = (hourAndChange - hour) * 60;
        let minute = Math.floor(minuteAndChange)
        let secondAndChange = (minuteAndChange - minute) * 60;
        let second = Math.floor(secondAndChange)
      
        console.log(month, dayAndChange, dayNum, hourAndChange, hour, minuteAndChange, minute, secondAndChange, second)
        // done()
    }
});