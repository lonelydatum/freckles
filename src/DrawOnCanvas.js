import rasterizeHTML from 'rasterizeHTML'
var tocss = require('to-css')
import _ from 'lodash'

class DrawOnCanvas {
	constructor(canvas, styles=undefined) {
		this.canvas = canvas
		this.styles = {...DrawOnCanvas.DEFAULTS, ...styles}

	}

	write(message='hello', styleSuper) {
		let styles = {...this.styles, ...styleSuper}
		const css = {
			'font-family': `${styles['font-family']}`,
			'font-size':`${styles['font-size']}px`,
			color: styles.color || 'red',
			top:`${styles.top}px`,
			left: `${styles.left}px`,
			'line-height': _.get(styles, 'line-height', 'undefined') + 'px',
			'letter-spacing': _.get(styles, 'letter-spacing', 'undefined') + 'px',
			'word-spacing': _.get(styles, 'word-spacing', 'undefined') + 'px',
			position:'absolute'
		}

		let messageString = `<span style="${tocss(css)}">${message}</span>`
		messageString += (this.fontFace) ? `<style>${this.fontFace}</style>` : ''

		const promise = rasterizeHTML.drawHTML(messageString, this.canvas);

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
	left: 1,
	color: 'green'
}

export default DrawOnCanvas