import Stardust, {Tween, Rect, Options} from './Stardust.js'
import TweenMax from 'gsap'




const werd1 = {
	canvas: document.getElementById('canvas'),
	css: document.getElementById('stardust-css')
}



const from = new Options({
	rect: new Rect(0, -10, 800, 10),
	speedMin:1,
	speedMax:3})
let stardust1 = new Stardust( werd1.canvas )
stardust1.write( werd1.css, from )



// setTimeout(()=>{
// 	const breakApart = new Options({
// 			rect: new Rect(0, 610, 800, 10),
// 			speedMax:2,
// 		},
// 		Options.BREAK_APART
// 	)
// 	stardust1.breakApart(breakApart)
// }, 5000)









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

