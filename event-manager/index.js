class EventManager {
    constructor() {
        this.events = [];
    }

    subscribe = function (payload) {
        this.events.push(payload);
        return this;
    }

    unsubscribe = function (id) {
        this.events = this.events.filter((item) => item.id !== id);
        return this;
    }

    findEvent = function (id) {
        return this.events.find((item) => item.id === id);
    }
}

export default EventManager;