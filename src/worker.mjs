import { blink } from './main.js';

// init is now handeled by main.js
// const init = async () => {
//   await blink.loadModel();
//   const videoElement = document.querySelector('video');
//   // Using the default webcam
//   await blink.setUpCamera(videoElement);
// }

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
    postMessage('BLINK'); // tell main.js that player blinked his/her eyes.
  }
  let raf = requestAnimationFrame(predict);
};

// receive message from master process
addEventListener('message', async (event) => {
  if (event.data !== 'START_PROCESS') return;

  // init is now handeled by main.js
  // await init();

  console.log("predict started");
  await predict(); // start looping prediction algorithm

  console.log("interval started");
  postMessage('PREDICT_STARTED'); // just saying: nobody is listening on this
});
