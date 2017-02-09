import Signals from 'signals'
import Rect from './util/Rect.js'
import {range} from './util/Helper.js'

class Options {
	constructor(data, inOut="COME_TOGETHER") {
		this.inOut = inOut
		this.signals = {
			speedMin: new Signals()
		}

		this.data = {
			speedMin:1,
			speedMax:5,
			rect: new Rect(0,0,50,50)
		}

		this.data = {...this.data, ...data}
	}

	get speedMin() {
		return this.data.speedMin
	}
	get speedMax() {
		return this.data.speedMax
	}


	get rect() {
		return this.data.rect
	}

	get tween() {
		const point = this.rect.getRandomPoint()
		const tweenData = {
			x: point.x,
			y: point.y
		}
		const speed = range(this.speedMin, this.speedMax)
		return {
			speed, tweenData
		}
	}


}

Options.BREAK_APART = 'BREAK_APART'
Options.COME_TOGETHER = 'COME_TOGETHER'

export default Options