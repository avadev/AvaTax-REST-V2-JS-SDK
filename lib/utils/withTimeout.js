export function withTimeout(msecs, promise) {
  let timeoutId;
  const timeout = new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error('timeout'));
    }, msecs);
  });
  return Promise
    .race([timeout, promise])
    .finally(() => clearTimeout(timeoutId));
}