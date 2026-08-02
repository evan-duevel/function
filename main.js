export default async ({ req, res, log }) => {
  log("Function executed");

  return res.json({
    message: "Hello from Appwrite Cloud Function!"
  });
};
