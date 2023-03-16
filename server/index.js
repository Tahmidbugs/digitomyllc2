const dialogflow = require("dialogflow");
const uuid = require("uuid");
const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
// Load Dialogflow credentials
const credentials = require("./digitomy-whmf-a7716372c5b3.json");

// Create a new SessionsClient
const sessionClient = new dialogflow.SessionsClient({
  credentials: credentials,
});

// Define a route to handle user input and return the bot's response
app.post("/detectIntent", async (req, res) => {
  try {
    const { userInput, languageCode } = req.body;
    const sessionId = uuid.v4();
    const sessionPath = sessionClient.sessionPath("digitomy-whmf", sessionId);

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: userInput,
          languageCode: languageCode,
        },
      },
    };
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    console.log(`User query: ${result.queryText}`);
    console.log(`Dialogflow response: ${result.fulfillmentText}`);
    res.json({ message: result.fulfillmentText });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

const port = process.env.PORT || 8800;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
