import rasterizeHTML from './util/raster.js'

import Art from './Art.js'
import Tween from './util/Tween.js'
import Rect from './util/Rect.js'
import _ from './util/gar-dash.js'
import Singleton from './util/Singleton.js'
import FilterByColor from './util/FilterByColor.js'
import Options from './Options.js'
import {IsCanvasBlank, ClearCanvas} from './util/Helper.js'

class Stardust {
	constructor(canvas) {
		this.canvas = canvas
		this.canvasCloned = canvas.cloneNode()
	}



	write(html, inOut) {
		html = _.get(html, 'innerHTML', 'Couldnt find innerHTML')
		const promise = new Promise((good, bad)=>{
			document.fonts.ready.then(()=>{
				const promise = rasterizeHTML.drawHTML(html, this.canvasCloned);
				promise.then((result)=>{
					good(result)
				})
			})
		})
		promise.then(this.onDummyLoaded.bind(this, inOut))
		return promise
	}


	onDummyLoaded(inOut, result) {
		const canvasCloned = this.canvasCloned
		if(IsCanvasBlank(canvasCloned)){
			ClearCanvas(canvasCloned)
		}

		this.art = new Art( this.canvas )
		this.art.write( canvasCloned, inOut )
		this.render()
	}

	breakApart(options) {
		this.art.breakApart(options)
	}




	render() {
		this.art.render()
		requestAnimationFrame( this.render.bind(this) )
	}


}

export {Stardust as default, Tween, Rect, Options}