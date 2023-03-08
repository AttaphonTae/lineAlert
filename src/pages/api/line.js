
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
        const botInfo = await client.getBotInfo();
        const botId = botInfo.userId;
        const userIds = await client.getGroupMemberIds(botId);
        await client.multicast(userIds, message);
        console.log('Message sent successfully to all users!');
        res.status(200).end();
      } catch (err) {
        console.error(err);
        res.status(500).end();
      }
}