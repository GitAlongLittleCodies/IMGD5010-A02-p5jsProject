//
// ONLINE HERE:
// https://editor.p5js.org/GitAlongLittleCodies/sketches/rEEDBps0R
//
// ----------------------------------------------------------
// #Primitive Resizable Lightbulb 
// ----------------------------------------------------------
// This program produces one of two static images:
// A DIM BULB or a LIT BULB.
// Programmed using strictly primitive shapes; setup() only; no draw(); 
// no logic; no loops; and variables were only used for convenience sake.
//
// BULB SIZE and ON/OFF options are easily modified. Keep reading.

function setup() {

// convenient storage
  let w = windowWidth;
  let h = windowHeight;

// SET YOUR BULB SIZE
// percentage of canvas width expressed as a decimal value
// -or- outright replace bulbSize with a pixel value (integer)
  let bulbScale = 0.35;
  let bulbSize = w * bulbScale;

// ON/OFF Setting
// TWO APPROACHES - each method relies on reloading the script manually
// -01- PREFERRED METHOD - new state available every one second, alternates 0 and 1
  let onOff = second()%2;
// -02- ALTERNATIVE METHOD - new state available every refresh, random 0 and 1
//  let onOff = floor(random(0,2))%2;

  
// begin 
  createCanvas(w, h);
  
  colorMode(HSB); /* HSB mode to better control the alpha channel */
  translate(w/2, h/2); /* shift origin 0,0 to center of canvas */
  rectMode(CENTER); /* shift coordinates of rectangles */

  background(50,5,5,1); /* when bulb is NOT lit */
  background(50,35,15,onOff); /* when the bulb IS lit */
  
// DIM BULB
// these shapes are ALWAYS ON - the LIT BULB covers them when toggled
  strokeWeight(bulbSize/60);
  stroke(5,5,5,1);
  /* bulb */
  fill(55,0,30,1);
  rect(0,-bulbSize/2.5,bulbSize/2.5,bulbSize/2,bulbSize/8); /* tappered end 1 */
  ellipse(0,0,bulbSize*0.97,bulbSize); /* the bulb *//* toyed with using a percentage here. not changing it now */
  noStroke(); /* cover up the stroke on the top of the ellipse */
  rect(0,-bulbSize/2.5,bulbSize/2.5-bulbSize/20,bulbSize/2-bulbSize/20,bulbSize/8); /* tappered end 2 */
  /* filament, level 1 - draw beneath wires */
  /* not required for DIM BULB, skip */
  /* wires */
  strokeWeight(bulbSize/50);
  stroke(5,5,5,1);
  line(-bulbSize/10,-bulbSize/1.55,-bulbSize/10,-bulbSize/11); /* left */
  line(bulbSize/10,-bulbSize/1.55,bulbSize/10,-bulbSize/11); /* right */
  /* filament, level 2 */
  strokeWeight(bulbSize/50);
  stroke(5,5,5,1);
  circle(-bulbSize/10,-bulbSize/11+bulbSize/20,bulbSize/12);
  circle(-bulbSize/10+bulbSize/15,-bulbSize/11+bulbSize/20,bulbSize/12);
  circle(-bulbSize/10+bulbSize/15*2,-bulbSize/11+bulbSize/20,bulbSize/12);
  circle(bulbSize/10,-bulbSize/11+bulbSize/20,bulbSize/12);
  /* threaded cap */
  fill(55,0,30,1);
  stroke(5,5,5,1);
  strokeWeight(bulbSize/60);
  rect(0,-bulbSize/1.29,bulbSize/2.5-bulbSize/20,bulbSize/15,bulbSize/20); /* top */
  rect(0,-bulbSize/1.4,bulbSize/2.5-bulbSize/20,bulbSize/15,bulbSize/20); /* middle */
  rect(0,-bulbSize/1.55,bulbSize/2.5-bulbSize/20,bulbSize/15,bulbSize/20); /* touches bulb */

  
// LIT BULB
// these shapes turn ON and OFF
// by toggling the fill() and stroke() alpha layers between 0 and 1 
  strokeWeight(bulbSize/60);
  stroke(0,0,0,onOff);
  /* bulb */
  fill(55,100,100,onOff);
  rect(0,-bulbSize/2.5,bulbSize/2.5,bulbSize/2,bulbSize/8); /* tappered end 1 */
  ellipse(0,0,bulbSize*0.97,bulbSize); /* the bulb */
  noStroke(); /* cover up the stroke on the top of the ellipse */
  rect(0,-bulbSize/2.5,bulbSize/2.5-bulbSize/20,bulbSize/2-bulbSize/20,bulbSize/8); /* tappered end 2 */
  /* filament, level 1 - draw beneath wires */
  strokeWeight(bulbSize/20);
  stroke(50,100,95,onOff);
  circle(-bulbSize/10,-bulbSize/11+bulbSize/20,bulbSize/12);
  circle(-bulbSize/10+bulbSize/15,-bulbSize/11+bulbSize/20,bulbSize/12);
  circle(-bulbSize/10+bulbSize/15*2,-bulbSize/11+bulbSize/20,bulbSize/12);
  circle(bulbSize/10,-bulbSize/11+bulbSize/20,bulbSize/12);
  /* wires */
  strokeWeight(bulbSize/50);
  stroke(0,0,0,onOff*0.5); /* turn down the opacity */
  line(-bulbSize/10,-bulbSize/1.55,-bulbSize/10,-bulbSize/11); /* left */
  line(bulbSize/10,-bulbSize/1.55,bulbSize/10,-bulbSize/11); /* right */
  /* filament, level 2 */
  noFill();
  strokeWeight(bulbSize/50);
  stroke(60,50,95,onOff);
  circle(-bulbSize/10,-bulbSize/11+bulbSize/20,bulbSize/12);
  circle(-bulbSize/10+bulbSize/15,-bulbSize/11+bulbSize/20,bulbSize/12);
  circle(-bulbSize/10+bulbSize/15*2,-bulbSize/11+bulbSize/20,bulbSize/12);
  circle(bulbSize/10,-bulbSize/11+bulbSize/20,bulbSize/12);
  /* threaded cap */ 
  fill(55,10,60,onOff);
  stroke(0,0,0,onOff);
  strokeWeight(bulbSize/60);
  rect(0,-bulbSize/1.29,bulbSize/2.5-bulbSize/20,bulbSize/15,bulbSize/20); /* top */
  rect(0,-bulbSize/1.4,bulbSize/2.5-bulbSize/20,bulbSize/15,bulbSize/20); /* middle */
  rect(0,-bulbSize/1.55,bulbSize/2.5-bulbSize/20,bulbSize/15,bulbSize/20); /* touches bulb */

// end

  
// A better approach but not as crafty:
// Simply cover the canvas with a rect(w,h)
// and toggle its alpha channel on/off to show/hide layers beneath.
// The above method provides more granular control, though.
  
}

// stop
