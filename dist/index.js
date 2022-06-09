"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Perceptron_1 = __importDefault(require("./Perceptron"));
const iris_json_1 = __importDefault(require("./iris.json"));
const formatedDataFrame = iris_json_1.default.map((data) => {
    let output;
    if (data.Name === "Iris-setosa") {
        output = 1;
    }
    else {
        output = 0;
    }
    return {
        inputs: [
            parseFloat(data.PetalLength),
            parseFloat(data.PetalWidth),
            parseFloat(data.SepalLength),
            parseFloat(data.SepalWidth),
        ],
        output,
    };
});
const perceptron = new Perceptron_1.default({});
perceptron.train(formatedDataFrame);
//# sourceMappingURL=index.js.map