
import tocss from 'to-css'
import _ from './util/gar-dash.js'
import rasterizeHTML from './util/raster.js'


class DrawOnCanvas {
	constructor(canvas, styles=undefined) {
		this.canvasDummy = canvas.cloneNode()
		this.canvasDummy.id="dummy"
		// document.body.appendChild(this.canvasDummy)
		this.styles = {...DrawOnCanvas.DEFAULTS, ...styles}
	}

	write(message='hello', styleSuper) {

		let styles = {...this.styles, ...styleSuper}
		const css = {
			'font-family': `${styles['font-family']}`,
			'font-size':`${styles['font-size']}px`,
			color: styles.color || 'red',
			top:`${styles.top}px`,
			bottom:`${styles.bottom}px`,
			left: `${styles.left}px`,
			'line-height': _.get(styles, 'line-height', 'undefined') + 'px',
			'letter-spacing': _.get(styles, 'letter-spacing', 'undefined') + 'px',
			'word-spacing': _.get(styles, 'word-spacing', 'undefined') + 'px',
			'width': '100%',
			'text-align': 'center',
			position:'absolute'
		}

		console.log(css);

		let messageString = `<div style="${tocss(css)}">${message}</div>`
		messageString += (this.fontFace) ? `<style>${this.fontFace}</style>` : ''

		const promise = rasterizeHTML.drawHTML(messageString, this.canvasDummy);
		const fun = function(resolve, reject) {
  			promise.then( (resultPass)=>{
				resolve(resultPass)
			} )

			promise.fail( (resultFail)=>{
				reject(resultFail);
			} )
		}

		return new Promise(fun);

	}

	addFontFace(fontName, ff, isDefault=true) {
		this.fontFace = ff
		if(isDefault) {
			this.styles = {...this.styles, 'font-family': `'${fontName}'`}
		}

	}



}

DrawOnCanvas.DEFAULTS = {
	'font-family': `'Helvetica Neue', Helvetica, Arial, sans-serif`,
	'font-size': 88,
	top: 0,
	bottom: 0,
	left: 1,
	color: 'green'
}

export default DrawOnCanvas