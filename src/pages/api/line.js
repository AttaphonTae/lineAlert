
import { Client } from "@line/bot-sdk";

const client = new Client({
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
});

export default async function handler(req, res) {

    const message = {
        type: 'text',
        text: 'Hello, world!',
      };
    try {
        client.pushMessage('U9649af9ebe7140171f0892f0efa4fe85', message)
        .then(() => {
            console.log('Push message sent successfully!');
        })
        .catch((err) => {
            console.error(err);
        });
      } catch (err) {
        console.error(err);
        res.status(500).end();
      }
}