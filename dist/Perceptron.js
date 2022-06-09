"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Perceptron {
    constructor({ bias = 1, interactions = 1000, learnRate = 0.15 }) {
        this.activation = () => {
            function sigmoid(x) {
                return 1 / (1 - Math.exp(-1 * x));
            }
            function reLU(x) {
                return Math.max(0, x);
            }
            return {
                sigmoid,
                reLU,
            };
        };
        this.initWeights = (num) => {
            this.bias = Math.random() * 10;
            for (let i = 0; i < num; i++) {
                this.weights[i] = Math.random() * 10;
            }
        };
        this.run = (inputs) => {
            var sum = 0;
            for (var m = 0; m < inputs.length; m++) {
                sum += inputs[m] * this.weights[m];
            }
            sum += this.bias;
            return this.activation().sigmoid(sum);
        };
        this.recalcWeights = (val, inputs) => {
            for (var j = 0; j < this.weights.length; j++) {
                this.weights[j] = this.weights[j] + this.learnRate * val * inputs[j];
            }
        };
        this.train = (data) => {
            this.initWeights(data[0].inputs.length);
            let interactions = 0;
            let error = true;
            while (error && interactions < this.interactions) {
                let difference = 0;
                for (let i = 0; i < data.length; i++) {
                    let result = this.run(data[i].inputs);
                    if (result != data[i].output) {
                        error = true;
                        difference = data[i].output - result;
                        this.recalcWeights(difference, data[i].inputs);
                    }
                }
                console.log(`Loop: ${interactions} - Erro: ${difference.toFixed(12)}`);
                interactions++;
            }
        };
        this.bias = bias;
        this.weights = [];
        this.learnRate = learnRate;
        this.interactions = interactions;
    }
}
exports.default = Perceptron;
//# sourceMappingURL=Perceptron.js.map