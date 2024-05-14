const timeOut = async (delay = 1000 * 60) =>
   new Promise((rs, rj) =>
      setTimeout(() => {
         rj("time out");
      }, delay)
   );

const sleep = async (delay = 1000 * 60) =>
   new Promise((rs) =>
      setTimeout(() => {
         rs();
      }, delay)
   );

const makeRequest = async () => {
   return Promise.all([
      fetch("https://chat-app-backend-latest.onrender.com/"),
      fetch("https://spring-mobile-latest.onrender.com/api/"),
   ]);
};

const run = async () => {
   try {
      console.log("request");
      await Promise.race([makeRequest(), timeOut(5000)]);
   } catch (error) {
      console.log({ message: error });
   } finally {
      console.log("finally");
      await sleep(1000 * 30);
      run();
   }
};

run();
