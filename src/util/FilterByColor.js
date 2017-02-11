import Rect from './Rect.js'


class FilterByColor {
	constructor(canvas) {

		this.ctx = canvas.getContext('2d')


		this.minMax = {
			min: {
				x: Number.POSITIVE_INFINITY,
				y: Number.POSITIVE_INFINITY
			},
			max: {
				x: Number.NEGATIVE_INFINITY,
				y: Number.NEGATIVE_INFINITY
			}
		}

		this.tmpX
		this.tmpY

		this.list = this.getNonTransparentPixels(this.ctx)

		const wh = {
			w:this.minMax.max.x - this.minMax.min.x,
			h:this.minMax.max.y - this.minMax.min.y
		}

		this.rectWord = new Rect(this.minMax.min.x, this.minMax.min.y, wh.w, wh.h)

	}

	rgb2hex(rgba){
	 	return "0x" +
	  		("0" + parseInt(rgba.r,10).toString(16)).slice(-2) +
	  		("0" + parseInt(rgba.g,10).toString(16)).slice(-2) +
	  		("0" + parseInt(rgba.b,10).toString(16)).slice(-2);
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
				const hex = this.rgb2hex(rgba)
				const item = {rgba, x, y, hex}
				this.tmpX = x;
		    	if (this.tmpX < this.minMax.min.x) this.minMax.min.x = this.tmpX;
		    	if (this.tmpX > this.minMax.max.x) this.minMax.max.x = this.tmpX;

		    	this.tmpY = y;
		    	if (this.tmpY < this.minMax.min.y) this.minMax.min.y = this.tmpY;
		    	if (this.tmpY > this.minMax.max.y) this.minMax.max.y = this.tmpY;

				list.push(item)
			}

			indexForPos++
		}

		return list

	}
}

export default FilterByColor