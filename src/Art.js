import FilterByColor from './util/FilterByColor.js'
import {range} from './util/Helper.js'
import Vector from './Vector.js'
import Particle from './Particle.js'


class Art {
	constructor(canvas) {
		this.canvas = canvas
		this.ctx = this.canvas.getContext('2d')

		this.WIDTH = canvas.width
		this.HEIGHT = canvas.height
	}

	write(canvasCloned) {
		this.filterByColor = new FilterByColor(canvasCloned)
		this.particles = this.filterByColor.list.map((listItem)=>{
			return this.createParticleItem(listItem)
		})

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


	tween(tweenOptions) {
		const { toFrom } = tweenOptions


		this.particles.forEach((particleItem)=>{
			const obj = tweenOptions.getTweenData(particleItem.positionStatic)
			TweenLite[toFrom](
				particleItem.positionDynamic,
				obj.speed,
				obj.tweenData
			)
		})

		// TweenLite.ticker.addEventListener("tick", this.render.bind(this));
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