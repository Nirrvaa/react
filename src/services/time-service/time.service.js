const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
};

const getCurrentMonth = () => {
    const date = new Date();
    return date.getMonth();
};

const getCurrentDate = () => {
    const date = new Date();
    return date.getDate();
};

const createTimer = (timerObj) => {
    return new Date(
        timerObj.year, 
        timerObj.month - 1, 
        timerObj.date, 
        timerObj.hours, 
        timerObj.minutes, 
        timerObj.seconds
    );
};

export {
    getCurrentYear,
    getCurrentMonth,
    getCurrentDate,
    createTimer
};