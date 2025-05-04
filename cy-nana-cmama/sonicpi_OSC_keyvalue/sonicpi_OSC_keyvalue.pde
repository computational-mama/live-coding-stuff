import oscP5.*;
import netP5.*;

OscP5 oscP5;
NetAddress sonicPi;

void setup() {
  size(640, 480);
  oscP5 = new OscP5(this, 12000);  // Any local port
  sonicPi = new NetAddress("127.0.0.1", 4560);  // Sonic Pi default OSC port
}

void draw() {
  background(255);
  fill(0);
  text("Press ',', '.', or '1' to send OSC messages to Sonic Pi", 50, height/2);
}

void keyPressed() {
  OscMessage msg = new OscMessage("/trigger/prophet");

  if (key == ',') {
    msg.add(50);     // note
    msg.add(80);     // cutoff
    msg.add(0.3);    // sustain
  } else if (key == '.') {
    msg.add(60);
    msg.add(100);
    msg.add(0.2);
  } else if (key == '1') {
    msg.add(70);
    msg.add(120);
    msg.add(0.4);
  } else {
    return;  // Do nothing for other keys
  }

  oscP5.send(msg, sonicPi);
}
