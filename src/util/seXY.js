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
	CONTENT_SOUTH(rectCanvas, rectContent) {
		return this.getContent('SOUTH', rectCanvas, rectContent)
	},
	CONTENT_EAST(rectCanvas, rectContent) {
		return this.getContent('EAST', rectCanvas, rectContent)
	},
	CONTENT_WEST(rectCanvas, rectContent) {
		return this.getContent('WEST', rectCanvas, rectContent)
	},




	CORNER_NE(rectCanvas) {
		return this.getCorner('NE', rectCanvas)
	},
	CORNER_NW(rectCanvas) {
		return this.getCorner('NW', rectCanvas)
	},
	CORNER_SE(rectCanvas) {
		return this.getCorner('SE', rectCanvas)
	},
	CORNER_SW(rectCanvas) {
		return this.getCorner('SW', rectCanvas)
	},





	CANVAS_NORTH(rectCanvas) {
		return this.getCanvas('NORTH', rectCanvas)
	},
	CANVAS_SOUTH(rectCanvas) {
		return this.getCanvas('SOUTH', rectCanvas)
	},
	CANVAS_EAST(rectCanvas) {
		return this.getCanvas('EAST', rectCanvas)
	},
	CANVAS_WEST(rectCanvas) {
		return this.getCanvas('WEST', rectCanvas)
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
				return this.rect(rectCanvas.centerX, rectCanvas.north, rectContent.w, 0 )
			case 'SOUTH':
				return this.rect(rectCanvas.centerX, rectCanvas.south, rectContent.w, 0 )
			case 'EAST':
				return this.rect(rectCanvas.east, rectCanvas.centerY, 0, rectContent.h )
			case 'WEST':
				return this.rect(rectCanvas.west, rectCanvas.centerY, 0, rectContent.h )
		}
	},


	getCorner(compass, rectCanvas) {
		const corner = {...rectCanvas.corner}
		switch(compass) {
			case 'NE':
				return this.rect(corner.ne.x, corner.ne.y, 0, 0 )
			case 'NW':
				return this.rect(corner.nw.x, corner.nw.y, 0, 0 )
			case 'SE':
				return this.rect(corner.se.x, corner.se.y, 0, 0 )
			case 'SW':
				return this.rect(corner.sw.x, corner.sw.y, 0, 0 )
		}
	},



	getCanvas(compass, rectCanvas) {
		const center = {...rectCanvas.center}
		switch(compass) {
			case 'NORTH':
				return this.rect(rectCanvas.centerX, rectCanvas.north, rectCanvas.w, 0 )
			case 'SOUTH':
				return this.rect(rectCanvas.centerX, rectCanvas.south, rectCanvas.w, 0 )
			case 'EAST':
				return this.rect(rectCanvas.east, rectCanvas.centerY, 0, rectCanvas.h )
			case 'WEST':
				return this.rect(rectCanvas.west, rectCanvas.centerY, 0, rectCanvas.h )
		}
	},


	rect(x, y, w, h) {
		return new Rect(x, y, w, h, {originX:.5, originY:.5})
	}
}

export default GetXY