import Vector from './Vector.js'
import Singleton from './util/Singleton.js'


// console.log(TweenLite);

class Particle {
	constructor(vectorStatic, rgba={r:0,g:0,b:0,a:1}) {
		this.rgba = rgba
		this.rgbaString = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
		this.positionStatic = vectorStatic
		this.positionDynamic = {...this.positionStatic}
	}

	setPositionDynamic(v) {
		this.positionDynamic = v
	}

	tweenComeTogether(tweenTo, speed) {
		const delay = Math.random() * .7
		TweenLite.fromTo(
			this.positionDynamic,
			speed,
			tweenTo,
			{...this.positionStatic, delay} )
	}

	tweenBreakApart(tweenTo, speed) {
		const delay = Math.random() * .7
		TweenLite.fromTo(
			this.positionDynamic,
			speed,
			this.positionStatic,
			{...tweenTo, delay} )
	}

	leave() {
		TweenLite.to(this.positionDynamic, this.speed, {
			ease:Singleton.ease,
			_x:this.positionLeave._x,
			_y:this.positionLeave._y})
	}
}


export default Particle