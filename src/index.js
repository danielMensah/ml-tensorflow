const brain = require('brain.js');
const trainingData = require('./data-set');
const util = require('util');
const fs = require('fs');
const fileWriter = util.promisify(fs.writeFile);

const inputTweet = {
  tweet: "The Caravans are a disgrace to the Democrat Party. Change the immigration laws NOW!",
  person: "Trump"
};

let trainedNet;

function encode(arg) {
  return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function processTrainingData(data) {
  return data.map(d => {
    return {
      input: encode(d.input),
      output: d.output
    }
  })
}

function train(data) {
  console.log('Training...');
  let net = new brain.NeuralNetwork();
  net.trainAsync(processTrainingData(data)).then(() => {
    trainedNet = net.toFunction();
    console.log('Finished training...');
    execute(inputTweet.tweet);
  });
}

function execute(input) {
  let results = trainedNet(encode(input));
  console.log(results);

  const output = results.trump > results.kardashian ? 'Trump' : 'Kardashian';
  console.log(output);

  if (output === input.person) {
    console.log('Result is right! no training needed.');
  } else {
    const obj = trainingData;
    let output = {};
    output[inputTweet.person.toLocaleLowerCase()] = 1;
    obj.push({input: inputTweet.tweet, output});
    console.log(obj);
    fileWriter('data-set.json', JSON.stringify(obj));
  }
}

train(trainingData);
