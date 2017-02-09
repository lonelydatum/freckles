import FilterByColor from './util/FilterByColor.js'
import Tween from './util/Tween.js'
import {range} from './util/Helper.js'
import Vector from './Vector.js'
import Particle from './Particle.js'
import Rect from './util/Rect.js'
import Singleton from './util/Singleton.js'


class Art {
	constructor(canvas) {
		this.canvas = canvas
		this.ctx = this.canvas.getContext('2d')

		this.WIDTH = canvas.width
		this.HEIGHT = canvas.height
	}

	write(canvasCloned, options) {
		this.filterByColor = new FilterByColor(canvasCloned)


		this.particles = this.filterByColor.list.map((listItem)=>{
			return this.createParticleItem(listItem)
		})


		if(options.inOut==="COME_TOGETHER") {
			this.comeTogether(options)
		}else{
			this.breakApart(options)
		}
		this.render()
	}



	createParticleItem(staticItem) {
		const vectorStatic = new Vector(staticItem.x, staticItem.y)
		const particle = new Particle(
			vectorStatic,
			staticItem.rgba
		)
		return particle
	}
	// new list //

	comeTogether(options) {
		this.particles.forEach((particleItem)=>{
			const obj = options.tween
			particleItem.tweenComeTogether(obj.tweenData, obj.speed)
		})
	}

	breakApart(options) {
		this.particles.forEach((particleItem)=>{
			const obj = options.tween
			particleItem.tweenBreakApart(obj.tweenData, obj.speed)
		})
	}

	render() {
		this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
		this.particles.forEach( (p) =>{
			this.ctx.fillStyle = p.rgbaString
			this.ctx.fillRect(p.positionDynamic.x, p.positionDynamic.y, 1, 1)
		} )
	}
}





export default Art