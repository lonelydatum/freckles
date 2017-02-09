
import tocss from 'to-css'
import _ from './util/gar-dash.js'
import rasterizeHTML from './util/raster.js'


alert('ArtDummy')

class ArtDummy {
	constructor(canvas) {
		this.canvasDummy = canvas
		this.canvasDummy.id="dummy"
	}

	write(html) {
		return new Promise((good, bad)=>{
			document.fonts.ready.then(()=>{
				const promise = rasterizeHTML.drawHTML(html, this.canvasDummy);
				promise.then((result)=>{
					good(result)
				})
			})
		})
	}

	get canvas() {
		console.log('-------');
		return this.canvasDummy
	}



	// checkForFontFace(str) {
	// 	if(str.includes("@font-face")) {
	// 		const fontFace = {start:null, end: null, sub: null}

	// 		fontFace.start = str.indexOf("@font-face")
	// 		fontFace.end = str.indexOf("}", fontFace.start)

	// 		fontFace.sub = str.substring(fontFace.start, fontFace.end+1)
	// 		if(fontFace.sub.length > 0) {
	// 			if(fontFace.sub.includes('font-family:')) {
	// 				const fontFamily = {start:null, end:null, sub:null}
	// 				fontFamily.start = fontFace.sub.indexOf('font-family')
	// 				fontFamily.end = fontFace.sub.indexOf(';', fontFamily.start)
	// 				fontFamily.sub = fontFace.sub.substring(fontFamily.start, fontFamily.end)
	// 				if(fontFamily.sub.length > 0) {
	// 					let result = fontFamily.sub.split(':')[1].trim()
	// 					return result.replace(/'|"/g, "")
	// 				}

	// 			}
	// 		}
	// 	}

	// }


}

export default ArtDummy