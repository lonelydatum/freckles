import rasterizeHTML from './util/raster.js'

import Art from './Art.js'
import Rect from './util/Rect.js'
import _ from './util/gar-dash.js'
import FilterByColor from './util/FilterByColor.js'
import {IsCanvasBlank, ClearCanvas} from './util/Helper.js'

class Freckles {
	constructor(canvas) {
		this.canvas = canvas
		this.rect = new Rect(0,0,this.canvas.width, this.canvas.height)
		this.canvasCloned = canvas.cloneNode()
	}

	write(html) {

		html = _.get(html, 'innerHTML', 'Couldnt find innerHTML')
		const promise = new Promise((good, bad)=>{
			// document.fonts.ready.then(()=>{
				const p = rasterizeHTML.drawHTML(html, this.canvasCloned);
				p.then((result)=>{
					good(result)

				})
			// })
		})

		promise.then(this.onDummyLoaded.bind(this))
		return promise
	}


	onDummyLoaded(result) {

		const canvasCloned = this.canvasCloned
		// if(IsCanvasBlank(canvasCloned)){
		// 	ClearCanvas(canvasCloned)
		// }



		this.art = new Art( this.canvas )
		this.art.write( canvasCloned )
		this.render()
	}


	tweenHome(options){
		this.art.tweenHome(options)
	}


	tweenTo(rect, options){
		this.art.tweenTo(rect, options)
	}
	tweenFrom(rect, options){
		this.art.tweenFrom(rect, options)
	}

	render() {
		this.art.render()
		requestAnimationFrame( this.render.bind(this) )
	}


	get rectContent() {
		if(this.art) {
			return this.art.filterByColor.rectWord
		}
	}

	get particles(){
		return this.art.particles
	}
}


Freckles.Rect = Rect

export default Freckles