import Stardust, {Rect, seXY} from './Stardust.js'
import TweenMax from 'gsap'





const werd1 = {
	canvas: document.getElementById('canvas'),
	css: document.getElementById('stardust-css-2')
}


let stardust1 = new Stardust( werd1.canvas )









const tl = new TimelineMax()


stardust1.write( werd1.css ).then( ()=>{
	const r = seXY.CONTENT_SOUTH(stardust1.rect, stardust1.rectContent)


	const tweenOptions = stardust1.createOptions(
		'to',
		{min:.2, max:5},
		{ xy: r, ease: Back.easeIn },
		1
	)

	const tweenOptions_2 = stardust1.createOptions(
		'to',
		{min:1, max:3},
		{ xy: 'HOME', ease:Linear.easeNone, delay:1},
		1
	)

	const tweenOptions_3 = stardust1.createOptions(
		'to',
		{min:.2, max:1},
		{ xy: seXY.CONTENT_WEST(stardust1.rect, stardust1.rectContent), ease: Sine.easeIn},
		1
	)



	stardust1.tween(tweenOptions)

	setTimeout( ()=>{
		stardust1.tween(tweenOptions_2)
	}, 6000 )


} )



// setTimeout(()=>{
// 	tl.add( stardust1.tween(tweenOptions_home) )
// }, 4000)

// setTimeout(()=>{
// 	stardust1.tween(tweenOptions)
// }, 2000)









// canvas.addEventListener('click', (e)=>{
// 	const coords = canvas.relMouseCoords(event);
// 	stardust.updateOptions({fromRect: new Rect(coords.x,coords.y,0,0), speedMin: 2, speedMax: 22})
// 	stardust.play()

// })

// function relMouseCoords(event){
//     var totalOffsetX = 0;
//     var totalOffsetY = 0;
//     var canvasX = 0;
//     var canvasY = 0;
//     var currentElement = this;

//     do{
//         totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
//         totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
//     }
//     while(currentElement = currentElement.offsetParent)

//     canvasX = event.pageX - totalOffsetX;
//     canvasY = event.pageY - totalOffsetY;

//     return {x:canvasX, y:canvasY}
// }

// HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

