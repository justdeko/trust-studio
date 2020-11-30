import {mine} from "../miner/miner";
import {CURRENT_BPMN, CURRENT_UNCERTAINTY_LIST} from "../util/constants";
import {defaultUncertainties} from "../resources/defaultUncertainties";


test("Miner performance collab/element test", async () => {
    const fs = require("fs");
    const path = require("path");
    localStorage.setItem(CURRENT_UNCERTAINTY_LIST, defaultUncertainties)
    for (let collabIndex = 2; collabIndex < 6; collabIndex++) {
        for (let elementIndex = 10; elementIndex < 60; elementIndex += 10) {
            let file = path.join(__dirname, "./testFiles/", `${collabIndex}collab_${elementIndex}.bpmn`);
            let bpmnString = fs.readFileSync(file, "utf8", function (err: any, data: any) {
                return data;
            });
            localStorage.setItem(CURRENT_BPMN, bpmnString)
            var start = performance.now();
            await mine()
            var end = performance.now()
            console.log(`collab count: ${collabIndex} element count: ${elementIndex}, time: ${end - start}`)
        }
    }
}, 30000);

test("extreme element test", async () => {
    const fs = require("fs");
    const path = require("path");
    localStorage.setItem(CURRENT_UNCERTAINTY_LIST, defaultUncertainties)
    let indexArray = [100, 200, 300, 400, 500, 1000, 2000, 3000]
    for (const index of indexArray) {
        let file = path.join(__dirname, "./testFiles/", `2collab_${index}.bpmn`);
        let bpmnString = fs.readFileSync(file, "utf8", function (err: any, data: any) {
            return data;
        });
        localStorage.setItem(CURRENT_BPMN, bpmnString)
        var start1 = performance.now();
        await mine()
        var end1 = performance.now()
        console.log(`element count: ${index}, time: ${end1 - start1}`)
    }
}, 30000)