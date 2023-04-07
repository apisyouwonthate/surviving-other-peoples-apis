// Author: Umar Hansa

const controller = new AbortController();
const signal = controller.signal;

// Cancel the fetch request in 500ms
setTimeout(() => controller.abort(), 500);

try {
  const url = "https://httpbin.org/delay/1";
  const response = await fetch(url, { signal });
  console.log(response);
} catch (error) {
  // DOMException: The user aborted a request.
  console.log("Error: ", error);
}
