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

const transformValue = value => {
    if (!value.length) {
        return '00';
    }
    
    if (value.length === 1) {
        return `0${value}`;
    }

    return value;
};


export {
    getCurrentYear,
    getCurrentMonth,
    getCurrentDate
};