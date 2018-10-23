const tf = require('@tensorflow/tfjs');

// Load the binding:
require('@tensorflow/tfjs-node');  // Use '@tensorflow/tfjs-node-gpu' if running with GPU.

// Train a simple model:
// const model = tf.sequential();
// model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
// model.add(tf.layers.dense({units: 1, activation: 'linear'}));
// model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
//
// const xs = tf.randomNormal([100, 10]);
// const ys = tf.randomNormal([100, 1]);
//
// model.fit(xs, ys, {
//   epochs: 100,
//   callbacks: {
//     onEpochEnd: async (epoch, log) => {
//       console.log(`Epoch ${epoch}: loss = ${log.loss}`);
//     }
//   }
// });

const a = tf.tensor1d([4, 7, 2, 1]);
const b = tf.tensor1d([20, 30, 40, 50]);

a.add(b).print();