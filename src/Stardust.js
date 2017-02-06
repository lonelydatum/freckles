import FilterByColor from './util/FilterByColor.js'
import {range} from './util/Helper.js'
import Vector from './Vector.js'
import Particle from './Particle.js'
import Rect from './util/Rect.js'


const WIDTH = 500
const HEIGHT = 500

class StarDust {
	constructor(dummyCanvas, canvas) {
		this.dummyCanvas = dummyCanvas
		this.canvas = canvas
		this.ctx = this.canvas.getContext('2d')
		this.rect = new Rect(0, 0, canvas.width, canvas.height)
		this.particles = []
		this.tweenRect
		this.filterByColor = new FilterByColor(this.dummyCanvas)
		this.WIDTH = canvas.width
		this.HEIGHT = canvas.height
	}

	setDynamic(data) {
		this.tweenRectPrev = this.tweenRect
		this.tweenRect = data
	}


	getRectWord() {
		return this.filterByColor.rectWord
	}


	createParticles() {
		if(this.particles.length<=0) {
			this.createNewList()
		}else {
			this.reuseList()
		}
	}

	reuseList() {
		this.particles.forEach((item)=>{
			const vectorDynamic = this.createDynamic()
			const vectorStatic = item.positionStatic
			item.positionDynamic = vectorDynamic
			var angleRadians = Math.atan2(vectorStatic._y - vectorDynamic._y, vectorStatic._x - vectorDynamic._x);
			item.velocity.setAngle(angleRadians)
		})
	}

	createNewList() {
		this.particles = this.filterByColor.list.map((listItem, index)=>{
			return this.createParticleItem(listItem, index)
		})
	}

	createDynamic() {
		const {x, y} = this.tweenRect.getRandomPoint()
		const v = new Vector(x, y)
		return v
	}

	createParticleItem(staticItem, index) {
		const vectorDynamic = this.createDynamic()
		const vectorStatic = new Vector(staticItem.x, staticItem.y)
		var angleRadians = Math.atan2(staticItem.y - vectorDynamic._y, staticItem.x - vectorDynamic._x);
		const particle = new Particle(
			vectorDynamic,
			vectorStatic,
			range(2, 4),
			angleRadians,
			staticItem.rgba,
			index
		)


		return particle
	}

	tween() {
		this.particles.forEach((particleItem)=>{
			particleItem.tween()
		})
	}

	render() {
		this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
		this.particles.forEach( (p) =>{
			this.ctx.fillStyle = p.rgbaString

			this.ctx.fillRect(p.positionDynamic._x, p.positionDynamic._y, 1, 1)
		} )
	}
}





export default StarDust