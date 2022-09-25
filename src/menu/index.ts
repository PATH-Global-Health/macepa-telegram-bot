import { Menu } from "@grammyjs/menu";

const menu = new Menu("my-menu-identifier")
  .text("A", (ctx) => ctx.reply("You pressed A!"))
  .text("B", (ctx) => ctx.reply("You pressed B!"));

export default menu;
