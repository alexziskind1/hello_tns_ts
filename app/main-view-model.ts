import {Observable} from "data/observable";

export class HelloWorldModel extends Observable {
    public counter: number = 42;

    constructor() {
        super();
        this.set("message", this.counter + " taps left");
    }

    public tapAction() {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        }
        else {
            this.set("message", this.counter + " taps left");
        }
    }
}

export var mainViewModel = new HelloWorldModel();
