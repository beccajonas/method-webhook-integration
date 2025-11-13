# Method Webhook Integration

A demo application for creating Method entities and webhooks using the Method API dev sandbox.

## Overview

This application allows you to:
- Create individual entities in the Method API dev sandbox
- Set up webhooks to receive notifications when entities are created
- View webhook payloads at your configured webhook endpoint

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Method API key for the **dev sandbox** (required)
- A webhook endpoint URL to receive webhook notifications

## Important: API Key Requirement

**⚠️ This application requires a Method API key for the dev sandbox environment.** Make sure you're using a dev sandbox API key, not a production key.

## Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

### Creating a Webhook

1. Enter your **Method API dev sandbox key** in the "API Key" field
2. Enter your webhook endpoint URL in the "Webhook URL" field
   - **For testing**: Use [Webhook.site](https://webhook.site/) to get a unique URL (see below)
   - **For production**: Use your own webhook endpoint URL
3. Click "Create Webhook" to register the webhook with Method
4. You'll see a confirmation message with the webhook ID if successful

### Creating an Entity

1. Fill in the required entity information:
   - **Individual Info**: First name, last name, phone, email, date of birth
   - **Address**: Address line 1, city, state, ZIP code
2. Click "Create Entity" to create the entity in Method's dev sandbox
3. Upon successful creation, you'll see the entity ID

### Using Webhook.site for Testing

[Webhook.site](https://webhook.site/) is a free tool that provides unique URLs for receiving and inspecting webhook payloads. It's perfect for testing webhooks without setting up your own server.

**To use Webhook.site:**

1. Go to [https://webhook.site/](https://webhook.site/)
2. You'll be given a unique URL (e.g., `https://webhook.site/unique-token-id`)
3. Copy this URL and paste it into the "Webhook URL" field in this application
4. After creating a webhook and then creating an entity, navigate back to your Webhook.site page
5. You'll see the webhook request appear in real-time with:
   - Request headers
   - Request body/payload
   - Query parameters
   - Timestamp and other metadata

**Note:** Webhook.site URLs are unique and private. Keep the URL secure and don't share it publicly.

### Viewing Webhook Data

After creating an entity, the webhook will be triggered and Method will send a POST request to your configured webhook URL.

**To see the webhook data:**
1. Navigate to the webhook site/URL you configured when creating the webhook
   - If using Webhook.site, go back to your Webhook.site page
   - If using your own endpoint, check your server logs or webhook handler
2. After the entity is created, check your webhook endpoint to see the webhook data
3. The webhook payload will contain information about the created entity

## Technologies Used

- Node.js
- Express.js
- Axios
- HTML/CSS/JavaScript

## License

ISC

