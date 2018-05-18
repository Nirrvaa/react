const timeService = {
    get currentYear() {
        const date = new Date();
        return date.getFullYear();
    },

    get currentMonth() {
        const date = new Date();
        return date.getMonth() + 1;
    },

    get currentDate() {
        const date = new Date();
        return date.getDate();
    }
};


export default timeService;