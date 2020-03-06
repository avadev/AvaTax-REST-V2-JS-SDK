function withTimeout(msecs, promise) {
    const timeout = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('timeout'));
      }, msecs);
    });
    return Promise.race([timeout, promise]);
}