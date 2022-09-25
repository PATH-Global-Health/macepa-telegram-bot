import { Bot } from "grammy";
import menu from "./menu";
import * as dotenv from "dotenv";

dotenv.config();

const bot = new Bot(process.env.TELEGRAM_TOKEN!);
bot.use(menu);

bot.command(
  "start",
  async (ctx) =>
    await ctx.reply("Welcome! MACEPA HRP Study.", { reply_markup: menu })
);
// Handle other messages.
// bot.on("message", (ctx) => ctx.reply("Got another message!"));

// Start the bot.
bot.start();
