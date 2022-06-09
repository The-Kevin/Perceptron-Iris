import Perceptron from "./Perceptron";
import irisDataFrame from "./iris.json";

const formatedDataFrame = irisDataFrame.map((data) => {
  let output;
  if (data.Name === "Iris-setosa") {
    output = 1;
  } else {
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
const perceptron = new Perceptron({});
perceptron.train(formatedDataFrame);
