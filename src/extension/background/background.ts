import * as Browserium from "../../utils/Browserium";
import * as Dummy from "./dummy";
import * as Api from "./api";

export enum Msg {
    test = "test"
}

// VARIABLES
const backceiver: Browserium.Backceiver = new Browserium.Backceiver(
    "background"
);

// QUEUE

// LISTENERS
backceiver.addListener(Msg.test, () => console.log("test"));

// REQUESTS

// CHECKS

// UPDATE

// INIT
