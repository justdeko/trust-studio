import {mine} from "../miner/miner";
import {CURRENT_BPMN, CURRENT_UNCERTAINTY_LIST} from "../util/constants";
import {introductionBpmn} from "../resources/introductionBpmn";
import {defaultUncertainties} from "../resources/defaultUncertainties";


test("Miner performance test", async () => {
    localStorage.setItem(CURRENT_BPMN, introductionBpmn)
    localStorage.setItem(CURRENT_UNCERTAINTY_LIST, defaultUncertainties)
    const start = performance.now();
    mine().then(() => {
        const end = performance.now()
        console.log(end - start)
    })
}, 2000);