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
2. Enter your webhook endpoint URL in the "Webhook URL" field (e.g., `https://yourapp.com/webhook-handler`)
3. Click "Create Webhook" to register the webhook with Method
4. You'll see a confirmation message with the webhook ID if successful

### Creating an Entity

1. Fill in the required entity information:
   - **Individual Info**: First name, last name, phone, email, date of birth
   - **Address**: Address line 1, city, state, ZIP code
2. Click "Create Entity" to create the entity in Method's dev sandbox
3. Upon successful creation, you'll see the entity ID

### Viewing Webhook Data

After creating an entity, the webhook will be triggered and Method will send a POST request to your configured webhook URL.

**To see the webhook data:**
1. Navigate to the webhook site/URL you configured when creating the webhook
2. After the entity is created, check your webhook endpoint to see the webhook data
3. The webhook payload will contain information about the created entity

## API Endpoints

### POST `/create-entity`
Creates an individual entity in the Method API dev sandbox.

**Request Body:**
```json
{
  "apiKey": "your-api-key",
  "first_name": "John",
  "last_name": "Doe",
  "phone": "+16505555555",
  "email": "john@example.com",
  "dob": "1990-01-01",
  "line1": "123 Main St",
  "city": "Austin",
  "state": "TX",
  "zip": "78701"
}
```

### POST `/createWebhook`
Creates a webhook subscription in the Method API dev sandbox.

**Request Body:**
```json
{
  "apiKey": "your-api-key",
  "webhookSite": "https://yourapp.com/webhook-handler"
}
```

## Technologies Used

- Node.js
- Express.js
- Axios
- HTML/CSS/JavaScript

## License

ISC

