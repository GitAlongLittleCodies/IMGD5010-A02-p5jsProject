
### What Sam's spoiler says:

> I'm gonna be honest, I still don't completely parse how the alpha toggle switches between the two images in practice, but I understand it in theory! For me personally, It felt more intuitive to use if statements to change how the image was being drawn instead of drawing two different images & swapping between which was visible. It's a very clever solution though :)

### What Sam's (re)Instructions are:

```
Instructions for Todd's p5.js image(s)

INITALIZE
1. Randomly determine whether the light should be ON or OFF

If ON, set the background to dark grey.
If OFF, set the background black.

--------------------------

MAKING THE OUTER BULB
1. Set the stroke to be thick and black

If ON, set fill color to yellow.
If OFF, set fill color to dark grey.

2. Draw a tall rounded rectangle towards the top of the canvas
3. Draw a filled arc just below this rectangle. Keep the top of the arc open 

--------------------------

MAKING THE FILAMENT
If ON, set the stroke color to a very dark yellow.
If OFF, keep the stroke color black.

1. Draw a tall rectangle from the top of the bulb to its center

If ON, set the stroke color to medium yellow & make it thicker

2. Along the bottom edge of the rectangle, draw 4 overlapping circles

If ON, set the stroke color to pale yellow & return it to the starting thickness. Turn off fill. Draw another 4 circles in the same locations.

--------------------------

MAKING THE CAP
If ON, set fill color to light grey.
If OFF, keep the fill color dark grey.

1. Draw three wide & short rounded rectangles at the top of the canvas
```

![IMGD5010-A02-Feedback-Sam](https://github.com/user-attachments/assets/ab4ee077-6e2c-4fd1-8831-6c67e8177a15)
