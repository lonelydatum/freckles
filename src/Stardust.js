import ArtReal from './ArtReal.js'
import ArtDummy from './ArtDummy.js'
import Tween from './util/Tween.js'
import Rect from './util/Rect.js'
import _ from './util/gar-dash.js'
import Singleton from './util/Singleton.js'

class Stardust {
	constructor(canvas, styles) {
		this.canvas = canvas
		this.artReal
		this.artDummy = new ArtDummy( this.canvas, styles )
		this.tweenToRect = new Rect(0,0,0,0)

		this.defaultEase()
	}

	set easing(ease) {
		Singleton.partileEase = ease
	}

	defaultEase() {
		TweenLite.defaultEase = Back.easeInOut
	}


	write(html) {
		html = _.get(html, 'innerHTML', 'Couldnt find innerHTML')
		const promise = this.artDummy.write(html)
		promise.then(this.createStardust.bind(this))
		return promise
	}

	createStardust(result) {
		this.artReal = new ArtReal( this.artDummy.canvasDummy, this.canvas )
	}

	tweenTo(r) {
		this.tweenToRect = r
	}

	play() {
		this.artReal.setDynamic(this.tweenToRect)
		this.artReal.createParticles()
		this.artReal.tween()
		this.render()
		console.log(this.artReal.particles.length);
	}

	render() {
		this.artReal.render()
		requestAnimationFrame(this.render.bind(this))
	}
}

export {Stardust as default, Tween}