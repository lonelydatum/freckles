import rasterizeHTML from './util/raster.js'

import Art from './Art.js'
import Rect from './util/Rect.js'
import _ from './util/gar-dash.js'
import FilterByColor from './util/FilterByColor.js'
import Options from './Options.js'
import seXY from './util/seXY.js'
import {IsCanvasBlank, ClearCanvas} from './util/Helper.js'

class Stardust {
	constructor(canvas) {
		this.canvas = canvas
		this.rect = new Rect(0,0,this.canvas.width, this.canvas.height)
		this.canvasCloned = canvas.cloneNode()
	}

	createOptions(toFrom, speed, tweenProps, startTime) {
		return new Options(toFrom, speed, tweenProps, startTime)
	}

	write(html, tweenOptions=this.createOptions(), autoPlay=true) {

		html = _.get(html, 'innerHTML', 'Couldnt find innerHTML')
		const promise = new Promise((good, bad)=>{
			document.fonts.ready.then(()=>{
				const promise = rasterizeHTML.drawHTML(html, this.canvasCloned);
				promise.then((result)=>{
					good(result)
				})
			})
		})

		promise.then(this.onDummyLoaded.bind(this, tweenOptions, autoPlay))
		return promise
	}


	onDummyLoaded(tweenOptions, autoPlay, result) {
		const canvasCloned = this.canvasCloned
		if(IsCanvasBlank(canvasCloned)){
			ClearCanvas(canvasCloned)
		}

		this.art = new Art( this.canvas )
		this.art.write( canvasCloned )

		if(autoPlay) {
			this.tween(tweenOptions)
		}
	}



	tween(tweenOptions) {
		const tl = this.art.tween(tweenOptions)
		this.render()
		return tl
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


}

export {Stardust as default, Rect, seXY}