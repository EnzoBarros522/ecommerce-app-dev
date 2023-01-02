import dbJson from './db.json';

const wait = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 200);
  });

export const getDb = async () => {
  // Delaying db operations to show loading UI
  await wait();
  return dbJson;
};
