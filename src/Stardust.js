
import FilterByColor from './util/FilterByColor.js'
import {range} from './util/Helper.js'
import Vector from './Vector.js'
import Particle from './Particle.js'


const particles = []
const WIDTH = 500
const HEIGHT = 500

class StarDust {
	constructor(dummyCanvas, canvas) {
		this.dummyCanvas = dummyCanvas
		this.canvas = canvas
		this.ctx = this.canvas.getContext('2d')
		this.doFilterColor(this.dummyCanvas)

	}

	// loop through the dummy canvas to get the nontransparent pixels
	doFilterColor(canvas) {
		const filterByColor = new FilterByColor(canvas)
		this.createParticles(filterByColor.list);
	}

	createParticles(list) {

		list.map((listItem, index)=>{
			this.createParticleItem(listItem, index)
		})
	}

	createParticleItem(staticItem, index) {
		const vectorDynamic = new Vector(11, 11)
		const vectorStatic = new Vector(staticItem.x, staticItem.y)
		var angleRadians = Math.atan2(staticItem.y - vectorDynamic._y, staticItem.x - vectorDynamic._x);
		const particle = new Particle(
			vectorDynamic,
			vectorStatic,
			range(3, 7),
			angleRadians,
			staticItem.rgba,
			index
		)
		particles.push(particle)
	}

	render() {
		this.ctx.clearRect(0, 0, WIDTH, HEIGHT);
		particles.forEach( (p) =>{
			this.ctx.fillStyle = p.rgbaString
			 p.update()
			this.ctx.fillRect(p.positionDynamic._x, p.positionDynamic._y, 1, 1)
		} )
	}
}





export default StarDust