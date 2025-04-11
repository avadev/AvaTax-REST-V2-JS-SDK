export function withTimeout(msecs: number, url: string, options: any) {
  // Create an AbortController instance
  const controller = new AbortController();
  const { signal } = controller;

  // Incorporate the abort signal into the fetch options
  const fetchPromise = fetch(url, { ...options, signal });

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      // Abort the ongoing fetch request
      controller.abort();
      reject(new Error('timeout'));
    }, msecs);

    fetchPromise
      .then(value => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch(reason => {
        clearTimeout(timer);
        reject(reason);
      });
  });
}