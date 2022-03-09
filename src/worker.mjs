import { blink } from './main.js';

const init = async () => {
  await blink.loadModel();
  const videoElement = document.querySelector('video');
  // Using the default webcam
  await blink.setUpCamera(videoElement);
}

const predict = async () => {
  const blinkPrediction = await blink.getBlinkPrediction();
  // console.log('Blink: ', blinkPrediction); // will return an object indicating the booleans for different states
  // expect blinkPrediction to be {
  //  blink: boolean,
  //  wink: boolean,
  //  longBlink: boolean,
  //  left: boolean,
  //  right: boolean,
  //  rate: number
  // }
  if (blinkPrediction.blink) {
    // do something when the user blinks
    // postMessage('BLINK');
    console.log("blink");
  }
  let raf = requestAnimationFrame(predict);
};

// receive message from master process
addEventListener('message', async (event) => {
  // if (event.data !== 'START_PROCESS') return;
  console.log("initializing process...");
  await init();
  console.log("predict started");
  await predict();
  // var intervalID = setInterval(predict, 30000);
  console.log("interval started");
  // postMessage('PREDICT_STARTED');
});
