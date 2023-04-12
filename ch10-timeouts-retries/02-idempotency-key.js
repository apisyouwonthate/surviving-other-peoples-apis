import * as rax from "retry-axios";
import axios from "axios";

rax.attach();

const myRequest = async () => {
  // Generated for this specific interaction
  const idempotencyKey = UuidV4Generator();

  try {
    const myConfig = {
      raxConfig: {
        retry: 5, // number of retry when facing 4xx or 5xx
        noResponseRetries: 5, // number of retry when facing connection error
        onRetryAttempt: (err) => {
          const cfg = rax.getConfig(err);
          console.log(`Retry attempt #${cfg.currentRetryAttempt}'}`);
        },
      },
      timeout: 50,
      headers: {
        "Idempotency-Key": idempotencyKey,
      },
    };
    const req = await axios.get("https://httpbin.org/delay/1", myConfig);
    console.log(req.data);
  } catch (error) {
    console.log(error);
  }
};

myRequest();
