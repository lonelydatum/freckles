import Stardust from './Stardust.js'
import DrawOnCanvas from './DrawOnCanvas.js'
import Tween from './util/Tween.js'
import Rect from './util/Rect.js'

class Main {
	constructor(canvas, styles) {
		this.canvas = canvas
		this.stardust
		this.drawOnCanvas = new DrawOnCanvas( this.canvas, styles )
		this.tweenToRect = new Rect(0,0,0,0)
	}


	write(message, style) {
		this.drawOnCanvas.addFontFace(style.fontface.name, style.fontface.data);
		const promise = this.drawOnCanvas.write(message, style)
		promise.then(this.createStardust.bind(this))
		return promise
	}

	createStardust(result) {
		this.stardust = new Stardust( this.drawOnCanvas.canvasDummy, this.canvas )
	}

	tweenTo(r) {
		this.tweenToRect = r
	}

	play() {
		this.stardust.setDynamic(this.tweenToRect)
		this.stardust.createParticles()
		this.stardust.tween()
		this.render()
		console.log(this.stardust.particles.length);
	}

	render() {
		this.stardust.render()
		requestAnimationFrame(this.render.bind(this))
	}
}

export {Main as default, Tween}