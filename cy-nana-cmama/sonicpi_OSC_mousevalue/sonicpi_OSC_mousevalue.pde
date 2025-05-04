import oscP5.*;
import netP5.*;

OscP5 oscP5;
NetAddress sonicPi;

void setup() {
  size(640, 480);
  oscP5 = new OscP5(this, 12000); // Local port (can be any unused port)
  sonicPi = new NetAddress("127.0.0.1", 4560); // Sonic Pi's default OSC port
}

void draw() {
  background(255);
  fill(0);
  ellipse(mouseX, mouseY, 20, 20);

  // Send mouse coordinates to Sonic Pi
OscMessage msg = new OscMessage("/trigger/prophet");
msg.add((float)mouseX);  // a
msg.add((float)mouseY);  // b
msg.add(0.2);            // c (sustain)
  oscP5.send(msg, sonicPi);
}
