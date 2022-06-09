interface IData {
    inputs: number[];
    output: number;
}
export default class Perceptron {
    private weights;
    private learnRate;
    private interactions;
    private bias;
    constructor({ bias, interactions, learnRate }: {
        bias?: number | undefined;
        interactions?: number | undefined;
        learnRate?: number | undefined;
    });
    private activation;
    private initWeights;
    private run;
    private recalcWeights;
    train: (data: IData[]) => void;
}
export {};
