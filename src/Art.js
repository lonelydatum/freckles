import FilterByColor from './util/FilterByColor.js'
import {range} from './util/Helper.js'
import Vector from './Vector.js'
import Particle from './Particle.js'
import Rect from './util/Rect.js'


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


	tween(fromTo, rect, options={delay:[.5, 1]}) {
		let defaultOptions = {speed:2}
		let newOptions = {...defaultOptions, ...options}

		this.particles.forEach((particleItem)=>{
			const xy = (rect === 'HOME') ? particleItem.positionStatic : rect.getRandomPoint()
			const props = this.loopToRange(newOptions)
			const propsCombined = {...xy, ...props}
			console.log(rect);
			TweenMax[fromTo](
				particleItem,
				propsCombined.speed,
				propsCombined
			)
		})
	}

	loopToRange(options) {
		let props = {}
		for (var key in options) {
		    var item = options[key];
		    if(Array.isArray(item)) {
		    	props[key] = range(item[0], item[1])
		    }else{
		    	props[key] = options[key]
		    }
		}
		return props
	}


	tweenTo(rect, options) {
		console.log(rect, options);
		this.tween('to', rect, options )
	}

	tweenFrom(rect, options) {
		this.tween('from', rect, options )
	}

	tweenHome(options) {
		this.tween('to', 'HOME', options )
	}




	render() {
		this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
		this.particles.forEach( (p) =>{
			this.ctx.fillStyle = p.rgbaString
			this.ctx.fillRect(p.x, p.y, 1, 1)
		} )
	}
}





export default Art