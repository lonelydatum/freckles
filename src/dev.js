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


setTimeout(()=>{
	// freckles.tweenHome({speed:.3, delay:[.1, .5]})
},1000)







