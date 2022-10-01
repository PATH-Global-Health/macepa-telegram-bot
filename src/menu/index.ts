import { Keyboard } from "grammy";

const districtMenu = new Keyboard()
  .text("Gondar Zuria")
  .text("East Dembia")
  .resized();

const gzMenu = new Keyboard()
  .text("Chinchaye")
  .text("Debre Selam")
  .row()
  .text("Degola")
  .text("Firqa Dangurie")
  .row()
  .text("Back")
  .resized();

const edMenu = new Keyboard()
  .text("Arebia")
  .text("Fenja")
  .row()
  .text("Jangua")
  .text("Sufankara")
  .row()
  .text("Back")
  .resized();

export default gzMenu;

export { districtMenu, gzMenu, edMenu };
