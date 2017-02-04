import {range} from './Helper.js'

class Rect {
	constructor(x, y, w, h, originXY={originX:0, originY:0}) {

		this.init(x, y, w, h, originXY)
	}

	get north() { return this.compass.n }
	get south() { return this.compass.s }
	get east() { return this.compass.e }
	get west() { return this.compass.w }

	init(x, y, w, h, originXY) {
		const offsetX = w * originXY.originX
		const offsetY = h * originXY.originY
		this.x = x - offsetX
		this.y = y - offsetY
		this.w = w
		this.h = h


		this.compass = this.updateCompass()
		this.corner = this.updateCorner()
		this.center = this.updateCenter()
	}

	getRandomPoint() {
		const x = range(this.compass.w, this.compass.e)
		const y = range(this.compass.n, this.compass.s)
		return {x, y}
	}

	getMiddlePos() {
		const diffX = this.w
		const diffXMid = diffX * .5

		const diffY = this.h
		const diffYMid = diffY * .5

		this.centerX = Math.floor(this.x + diffXMid)
		this.centerY = Math.floor(this.y + diffYMid)
	}

	updateCorner() {
		const {n, e, s, w} = this.compass
		const corner = {
			ne: {y:n, x:e},
			se: {x:e, y:s},
			sw: {x:w, y:s},
			nw: {x:w, y:n}
		}
		return corner
	}

	updateCompass() {
		const edge = {
			n: this.y,
			e: this.x + this.w,
			s: this.y + this.h,
			w: this.x
		}
		return edge
	}


	updateCenter() {
		this.centerX = this.x + (this.w / 2 )
		this.centerY = this.y + (this.h / 2 )
		const center = {x:this.centerX, y:this.centerY}
		const n = {x: this.centerX, y:this.compass.n}
		const s = {x: this.centerX, y:this.compass.s}
		const e = {x: this.compass.e, y:this.centerY}
		const w = {x: this.compass.w, y:this.centerY}
		return {center, n, s, e, w}
	}



	inBoundsX(x) {
		return (x>this.x && x<this.right)
	}

	setXY(x, y) {
		this.x = x
		this.y = y
		this.getMiddlePos()
	}

}


export default Rect