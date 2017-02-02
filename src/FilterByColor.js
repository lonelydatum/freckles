import Rect from './Rect.js'


class FilterByColor {
	constructor(canvas) {

		this.ctx = canvas.getContext('2d')
		this.list = this.getNonTransparentPixels(this.ctx)

	}

	getNonTransparentPixels(context) {

		const rect = new Rect(0, 0, context.canvas.width, context.canvas.height)
		const data = context.getImageData(rect.x, rect.y, rect.w, rect.h).data


		// const data = imageData.data
		let indexForPos = 0
		// let index = 0
		let y = -1
		let list = []

		for(let i=0; i<data.length; i += 4) {
			const r = data[i]
			const g = data[i+1]
			const b = data[i+2]
			const a = data[i+3]
			const rgba = {r, g, b, a:a/255}

			const x = indexForPos%rect.w
			y = (indexForPos%rect.w===0) ? y+1 : y


			if(rgba.a > 0) {
				const item = {rgba, x, y}
				list.push(item);
			}

			indexForPos++
		}

		return list

	}
}

export default FilterByColor