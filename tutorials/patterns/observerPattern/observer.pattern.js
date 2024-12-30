class Observer {
    constructor(name) {
        this.namePick = name;
    }

    updateStatus(location) {
        this.goToHelp(location)
    }

    goToHelp(location) {
        console.log(`${this.namePick}:::PING:::${JSON.stringify(location)}`)
    }
}

class Subject {

    constructor() {
        this.observerList = []
    }

    addObserver(observer) {
        this.observerList.push(observer)
    }

    notify(location) {
        this.observerList.forEach( observer => observer.updateStatus(location))
    }
}

const subject = new Subject()

// your pick
const riki = new Observer('Riki')
const sniper = new Observer('Sinper')
const pudge = new Observer('Pudge')

// add riki and sniper to Team
subject.addObserver(riki)
subject.addObserver(sniper)
subject.addObserver(pudge)

// push location to Team
subject.notify({ long: 123, lat:345 })