import Rect from './Rect.js'

class Tweener {
	constructor(rectWord, rect) {
		this.rectWord = rectWord
		this.rectSD = rect
		this.point = {w:0, h:0}
		const center = {...this.rectSD.center}
		const corner = {...this.rectSD.corner}
	}

	get center(){
		const center = {...this.rectSD.center}
		const {w,h} = this.point
		return {
			'center': this.rect(center.center.x, center.center.y, w, h),
			'north': this.rect(center.n.x, center.n.y, w, h),
			'east': this.rect(center.e.x, center.e.y, w, h),
			'south': this.rect(center.s.x, center.s.y, w, h),
			'west': this.rect(center.w.x, center.w.y, w, h),
		}
	}

	get corner(){
		const corner = {...this.rectSD.corner}
		const {w,h} = this.point
		return {
				'ne': this.rect(corner.ne.x, corner.ne.y, w, h),
				'nw': this.rect(corner.nw.x, corner.nw.y, w, h),
				'se': this.rect(corner.se.x, corner.se.y, w, h),
				'sw': this.rect(corner.sw.x, corner.sw.y, w, h),
			}
	}

	get line(){
		const center = {...this.rectSD.center}
		const {w,h} = this.rectSD
		return {
				'north': this.rect(center.n.x, center.n.y, w, 0),
				'east': this.rect(center.e.x, center.e.y, 0, h),
				'south': this.rect(center.s.x, center.s.y, w, 0),
				'west': this.rect(center.w.x, center.w.y, 0, h)
			}
	}

	get word(){
		const center = {...this.rectSD.center}
		const {w,h} = this.rectSD
		return {
				'north': this.rect(this.rectWord.centerX, this.rectSD.north, this.rectWord.w, 0 ),
				'east': this.rect(this.rectSD.east, this.rectWord.centerY, 0, this.rectWord.h ),
				'south': this.rect(this.rectWord.centerX, this.rectSD.south, this.rectWord.w, 	0),
				'west': this.rect(this.rectSD.west, this.rectWord.centerY, 0, 			this.rectWord.h),
			}
	}

	rect(x, y, w, h) {
		return new Rect(x, y, w, h, {originX:.5, originY:.5})
	}

	getRectFromLabel(a) {
		return this[a[0]][a[1]]
	}
}

Tweener.word = {
	north: ['word', 'north'],
	south: ['word', 'south'],
	east: ['word', 'east'],
	west: ['word', 'west']
}

Tweener.line = {
	north: ['line', 'north'],
	south: ['line', 'south'],
	east: ['line', 'east'],
	west: ['line', 'west']
}

Tweener.center = {
	north: ['center', 'north'],
	south: ['center', 'south'],
	east: ['center', 'east'],
	west: ['center', 'west']
}

Tweener.corner = {
	ne: ['corner', 'ne'],
	nw: ['corner', 'nw'],
	se: ['corner', 'se'],
	sw: ['corner', 'sw']
}

export default Tweener