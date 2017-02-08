import Rect from './Rect.js'

class Tweener {
	constructor(stardust) {
		this.rectWord = stardust.getRectWord()
		this.rectSD = stardust.rect
		this.point = {w:0, h:0}
		const center = {...this.rectSD.center}
		const corner = {...this.rectSD.corner}
	}

	get center(){
		const center = {...this.rectSD.center}
		const {w,h} = this.point
		return {
			'center': this.rect(center.center.x, center.center.y, w, h),
			'n': this.rect(center.n.x, center.n.y, w, h),
			'e': this.rect(center.e.x, center.e.y, w, h),
			's': this.rect(center.s.x, center.s.y, w, h),
			'w': this.rect(center.w.x, center.w.y, w, h),
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
}

export default Tweener