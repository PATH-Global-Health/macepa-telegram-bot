import { Keyboard } from "grammy";

const districtKeyboard = new Keyboard()
  .text("Gondar Zuria")
  .text("East Dembia")
  .resized();

const gzKeyboard = new Keyboard()
  .text("Chinchaye")
  .text("Debre Selam")
  .row()
  .text("Degola")
  .text("Firqa Dangurie")
  .row()
  .text("Back")
  .resized();

const edKeyboard = new Keyboard()
  .text("Arebia")
  .text("Fenja")
  .row()
  .text("Jangua")
  .text("Sufankara")
  .row()
  .text("Back")
  .resized();

export default gzKeyboard;

export { districtKeyboard, gzKeyboard, edKeyboard };
