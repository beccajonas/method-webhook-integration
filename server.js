const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/create-entity", async (req, res) => {
  const {
    apiKey,
    first_name,
    last_name,
    phone,
    email,
    dob,
    line1,
    city,
    state,
    zip,
  } = req.body;

  if (!apiKey) {
    return res.status(400).json({ error: "Missing API key." });
  }

  try {
    const response = await axios.post(
      "https://dev.methodfi.com/entities",
      {
        type: "individual",
        individual: { first_name, last_name, phone, email, dob },
        address: { line1, line2: null, city, state, zip },
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error creating entity:", error.response?.data || error.message);
    const statusCode = error.response?.status || 500;
    const errorData = error.response?.data || { error: error.message };
    res.status(statusCode).json({ error: errorData });
  }
});


app.post("/createWebhook", async (req, res) => {
  const { webhookSite, apiKey } = req.body;

  if (!apiKey) {
    return res.status(400).json({ error: "Missing API key." });
  }

  if (!webhookSite) {
    return res.status(400).json({ error: "Missing webhook URL." });
  }

  try {
    const response = await axios.post(
      "https://dev.methodfi.com/webhooks",
      {
        url: webhookSite,
        type: "entity.create"
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error creating webhook:", error.response?.data || error.message);
    const statusCode = error.response?.status || 500;
    const errorData = error.response?.data || { error: error.message };
    res.status(statusCode).json({ error: errorData });
  }
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
