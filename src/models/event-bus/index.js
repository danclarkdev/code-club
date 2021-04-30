export default {
    on(event, callback) {
        document.addEventListener(event, (e) => callback(e.detail));
    },
    dispatch(event, data) {
        document.dispatchEvent(event);
    },
    remove(event, callback) {
        document.removeEventListener(event, callback);
    },
};