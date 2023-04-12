import * as rax from "retry-axios";
import axios from "axios";

rax.attach();

let timeSinceLastCall = Date.now();

const myRequest = async () => {
  try {
    const myConfig = {
      raxConfig: {
        retry: 5, // number of retry when facing 4xx or 5xx
        noResponseRetries: 5, // number of retry when facing connection error
        onRetryAttempt: (err) => {
          const cfg = rax.getConfig(err);

          console.log(`Waited ${(Date.now() - timeSinceLastCall) / 1000}`);
          timeSinceLastCall = Date.now();

          console.log(`Retry attempt #${cfg.currentRetryAttempt}`);
        },
      },
      timeout: 50, // don't forget this one
    };
    const req = await axios.get("https://httpbin.org/delay/1", myConfig);
    console.log(req.data);
  } catch (error) {
    console.log(error);
  }
};

myRequest();
