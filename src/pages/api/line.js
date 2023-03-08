
import { Client } from "@line/bot-sdk";

const client = new Client({
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
});

export default function handler(req, res) {
    const events = req.body.events;
    if (!events || events.length === 0) {
        // No events to handle
        res.status(200).end();
        return;
      }
  const message = {
    type: "text",
    text: "send from web api",
  };

  Promise.all(
    events.map((event) => {
      return client.replyMessage(event.replyToken, message);
    })
  )
    .then(() => {
      res.status(200).end();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });

  // Handle LINE events here

  res.status(200).end();
}