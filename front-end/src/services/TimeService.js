var moment = require('moment');
moment().format()

function convertToRelativeTime(time) {
    if (time) {
        const DDMMYYYY = time.slice(0,10);
        const relativeTime = moment(DDMMYYYY, "DDMMYYYY").fromNow();
        return relativeTime;
    }
    
}


export const timeService = {
    convertToRelativeTime
}
