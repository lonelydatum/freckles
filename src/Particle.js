import Vector from './Vector.js'
import Singleton from './util/Singleton.js'


// console.log(TweenMax);

class Particle {
	constructor(vectorStatic, rgba={r:0,g:0,b:0,a:1}) {
		this.rgba = rgba
		this.rgbaString = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
		this.positionStatic = vectorStatic


		this.x = this.positionStatic.x
		this.y = this.positionStatic.y
	}




}


export default Particle