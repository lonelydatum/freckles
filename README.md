# Freckles Particles

Freckles is a particle library that rasterizes DOM elements to the canvas so that you can add behaviours to thousands of particles.  The library is only 29kb.


##Usage:
#####CDN
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/freckles@1.1.0/dist/index.umd.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/freckles@1.1.0/dist/utilities.umd.min.js"></script>
```

#####npm
```npm install -S freckles```

```
import Freckles from 'freckles'
import FrecklesUtility from 'freckles/dist/utilities.umd.min.js'
```






##Stuff that you want to raseterize for particles:
```
<div id="freckles">
  <style>
    body{
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    p {
      margin:0;
      height: 500px;
      line-height: 500px;
      text-align: center;    
    }
  </style>
  <p>FRECKLES</p>
</div>
```

##CANVAS
```
<canvas id="canvas" width="500" height="500" > </canvas>
```


##JS
```
var freckles = new Freckles(document.getElementById('canvas')); //pass the canvas element to the constructor
var promise = freckles.write(document.getElementById('freckles'))

promise.then(function() {
  let r = FrecklesUtility.PresetRect.CANVAS_SOUTH(freckles.rect)
  const options = {
    delay: [.1, 1],
    speed: [.1, 1]
  }
  freckles.tweenTo(r, options)
}
```
