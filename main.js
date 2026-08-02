export default async ({ req, res, log }) => {
  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.send("", 204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    });
  }

  // Handle actual POST request
  log("Function executed");

  return res.json(
    { message: "Hello from Appwrite Cloud Function!" },
    200,
    {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    }
  );
};
