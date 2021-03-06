# Freckles Particles

Freckles is a particle library that rasterizes DOM elements to the canvas so that you can add behaviours to thousands of particles.  The library is only 29kb.

## HELLO WORLD
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>FRECKLES</title>
	<style type="text/css">
		canvas {
			background-color: #EEE;
		}
	</style>
</head>
<body>
	<div id="freckles" style="display: none;">
	  	<style>
	    	@font-face {
                font-family: "myFont";
                src: url('./myFont.woff') format('woff');
                font-weight: normal;
                font-style: normal;
	        }
	    	body{
	      		margin: 0;
	      		padding: 0;
	      		font-family: myFont;
	    	}

	    	p {
	      		margin:0;
	      		height: 500px;
	      		line-height: 500px;
	      		text-align: center;
	      		color: red;
	    	}
	  	</style>
  		<p>FRECKLES</p>
	</div>

	<canvas id="canvas" width="500" height="500" > </canvas>
</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/freckles@1.4.0/dist/index.umd.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/freckles@1.4.0/dist/utilities.umd.min.js"></script>

<script type="text/javascript">
	var freckles = new Freckles(document.getElementById('canvas')); //pass the canvas element to the constructor
	var promise = freckles.write(document.getElementById('freckles'))

	promise.then(function() {
	  let r = FrecklesUtility.PresetRect.CANVAS_SOUTH(freckles.rect)
	  const options = {
	    delay: [.1, 1],
	    speed: [.1, 1]
	  }
	  freckles.tweenTo(r, options)
	  //freckles.tweenFrom(r, options)
	  //freckles.tweenHome(options)
	})
</script>
</html>
```

##npm
```npm install -S freckles```

```
import Freckles from 'freckles'
import FrecklesUtility from 'freckles/dist/utilities.umd.min.js'
```

##Options
Control
 - speed
 - delay
 - ease
 
 If you want a random number use an array [min, max]. Use gsap's easing for the ease.
 ```
 const options = {
 	speed: .2,
	delay: [.2, 2],
	ease: Back.easeOut
 }
 ```


##Presets
Want to move the particles to the corner, edges, ect of the canvas. Here are all the presets from
```
let r
r = FrecklesUtility.PresetRect.CONTENT_NORTH(freckles.rect, freckles.rectContent)
r = FrecklesUtility.PresetRect.CONTENT_EAST(freckles.rect, freckles.rectContent)
r = FrecklesUtility.PresetRect.CONTENT_SOUTH(freckles.rect, freckles.rectContent)
r = FrecklesUtility.PresetRect.CONTENT_WEST(freckles.rect, freckles.rectContent)

r = FrecklesUtility.PresetRect.CENTER_NORTH(freckles.rect)
r = FrecklesUtility.PresetRect.CENTER_EAST(freckles.rect)
r = FrecklesUtility.PresetRect.CENTER_SOUTH(freckles.rect)
r = FrecklesUtility.PresetRect.CENTER_WEST(freckles.rect)

r = FrecklesUtility.PresetRect.CORNER_NE(freckles.rect)
r = FrecklesUtility.PresetRect.CORNER_NW(freckles.rect)
r = FrecklesUtility.PresetRect.CORNER_SE(freckles.rect)
r = FrecklesUtility.PresetRect.CORNER_SW(freckles.rect)

r = FrecklesUtility.PresetRect.CANVAS_NORTH(freckles.rect)
r = FrecklesUtility.PresetRect.CANVAS_EAST(freckles.rect)
r = FrecklesUtility.PresetRect.CANVAS_SOUTH(freckles.rect)
r = FrecklesUtility.PresetRect.CANVAS_WEST(freckles.rect)
```


##Cusomize
Can you get access to the freckles.particles and loop through it to do custom tweens.
```
freckles.particles.forEach( particleItem=>{
	TweenLite.to(particleItem, speed, {x, y} )
})
```

Here is a demo from codepen: http://codepen.io/lonelydatum/pen/qRgQxP

Huge thanks to Christoph Burgmer for rasterizeHTML.js https://github.com/cburgmer/rasterizeHTML.js

