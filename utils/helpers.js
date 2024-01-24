module.exports = {
     // Format date, style MM/DD/YYYY
    formatDate: (date) => {
        return date.toLocaleDateString();
    },
    // show timestamp on post "just now", "# minutes ago", "# hours ago" etc.
    formatTimestamp: (date) => {
        const now = new Date();
        const time = now - date;

        if (time < 1000 * 60) {
            return 'Just now';
        } else if (time < 1000 * 60 * 60) {
            const minutes = Math.floor(time / (1000 * 60));
            return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
        } else if (time < 1000 * 60 * 60 * 24) {
            const hours = Math.floor(time / (1000 *60 * 60));
            return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else {
            return 'on ' + date.toLocaleDateString();
        }
    },



};
