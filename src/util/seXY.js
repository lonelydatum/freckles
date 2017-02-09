import Rect from './Rect.js'

const GetXY = {
	CENTER_NORTH(rectCanvas) {
		return this.getCenter('NORTH', rectCanvas)
	},
	CENTER_SOUTH(rectCanvas) {
		return this.getCenter('SOUTH', rectCanvas)
	},
	CENTER_EAST(rectCanvas) {
		return this.getCenter('EAST', rectCanvas)
	},
	CENTER_WEST(rectCanvas) {
		return this.getCenter('WEST', rectCanvas)
	},

	CONTENT_NORTH(rectCanvas, rectContent) {
		return this.getContent('NORTH', rectCanvas, rectContent)
	},

	getCenter(compass, rectCanvas) {
		const center = {...rectCanvas.center}
		switch(compass) {
			case 'NORTH':
				return this.rect(center.center.x, center.n.y, 0, 0)
			case 'SOUTH':
				return this.rect(center.center.x, center.s.y, 0, 0)
			case 'EAST':
				return this.rect(center.e.x, center.center.y, 0, 0)
			case 'WEST':
				return this.rect(center.w.x, center.center.y, 0, 0)
		}
	},

	getContent(compass, rectCanvas, rectContent) {
		const center = {...rectCanvas.center}
		switch(compass) {
			case 'NORTH':
				return this.rect(rectContent.centerX, rectCanvas.north, rectContent.w, 0 )
		}
	},

	rect(x, y, w, h) {
		return new Rect(x, y, w, h, {originX:.5, originY:.5})
	}
}

export default GetXY