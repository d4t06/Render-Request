const sleep = async (delay = 1000 * 60) =>
   new Promise((rs) => setTimeout(() => rs(), delay));

const makeRequest = async () => {
   return Promise.all([
      fetch("https://chat-app-backend-latest.onrender.com/", {}),
      fetch("https://spring-mobile-latest.onrender.com/api/"),
   ]);
};

const run = async () => {
   try {
      await makeRequest();
      console.log('successful');
   } catch (error) {
      console.log({ message: error });
   } finally {
      await sleep(1000 * 60 * 2);
      run();
   }
};

run();
