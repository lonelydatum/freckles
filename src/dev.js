import Freckles from './Freckles.js'
import PresetRect from './util/PresetRect.js'




const werd = {
	canvas: document.getElementById('canvas'),
	css: document.getElementById('stardust-css-2')
}


let freckles = new Freckles( werd.canvas )
freckles.write( werd.css ).then( ()=>{
	let r = PresetRect.CONTENT_SOUTH(freckles.rect, freckles.rectContent)
	freckles.tweenTo(r)
})











// freckles.write( werd1.css ).then( ()=>{
	// let r = seXY.CONTENT_SOUTH(freckles.rect, freckles.rectContent)
	// const tweenOptions = freckles.createOptions(
	// 	'to',
	// 	{min:.2, max:5},
	// 	{ xy: r, ease: Back.easeIn },
	// 	1
	// )

	// const tweenOptions_2 = freckles.createOptions(
	// 	'to',
	// 	{min:1, max:3},
	// 	{ xy: 'HOME', ease:Back.easeOut},
	// 	1
	// )
	// freckles.tween(tweenOptions)
	// setTimeout( ()=>{
	// 	freckles.tween(tweenOptions_2)
	// }, 6000 )

	// freckles.tween(tweenOptions)


	// setTimeout( ()=>{
	// 	const tweenOptions_3 = freckles.createOptions(
	// 	'to',
	// 	{min:1, max:3},
	// 	{ xy: seXY.CONTENT_EAST(freckles.rect, freckles.rectContent), ease:Back.easeOut},
	// 	1
	// )
	// 	freckles.tween(tweenOptions_3)
	// }, 10000 )


	// setTimeout( ()=>{
	// 	const tweenOptions_3 = freckles.createOptions(
	// 	'to',
	// 	{min:1, max:3},
	// 	{ xy: 'HOME', ease:Elastic.easeOut},
	// 	1
	// )
	// 	freckles.tween(tweenOptions_3)
	// }, 13000 )
// } )



// setTimeout(()=>{
// 	tl.add( freckles.tween(tweenOptions_home) )
// }, 4000)

// setTimeout(()=>{
// 	freckles.tween(tweenOptions)
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

