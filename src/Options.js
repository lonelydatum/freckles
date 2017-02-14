import Signals from 'signals'
import Rect from './util/Rect.js'
import {range} from './util/Helper.js'
import _ from './util/gar-dash.js'

class Options {
	constructor(toFrom='to', speed=1, tweenProps) {
		this.toFrom = toFrom

		this.signals = {
			speedMin: new Signals()
		}

		this.tweenProps = {
			delay: {min:1, max:2}
		}

		this.setSpeed(speed)
		this.setTweenProps(tweenProps)

	}

	isHome() {
		return (this.tweenProps.xy === 'HOME')
	}

	setTweenProps(tweenProps) {
		if( tweenProps.xy === "HOME"){
			this.toFrom = 'to'
		}
		this.tweenProps = {...this.tweenProps, ...tweenProps}
	}

	setSpeed(speed) {
		this.speed = speed
	}

	getSpeed(speed) {
		return this.getRange(speed)
	}

	getRange(data) {
		const type = typeof(data)
		if(type === 'number') {
			return data
		}else if(type === 'object'){
			return range(data.min, data.max)
		}
	}


	getTweenData(particle) {

		let xy
		if(this.tweenProps.xy instanceof Rect) {
			xy = this.tweenProps.xy.getRandomPoint()
		}else if( this.tweenProps.xy === "HOME"){
			xy = _.get(particle, 'positionStatic', {x:0,y:0})
		}


		let delay = this.getRange(this.tweenProps.delay)


		const tweenData = {...xy, ...this.tweenProps, delay}
		// console.log(newProps);





		const speed = this.getSpeed(this.speed)

		return {speed, tweenData}
	}


}


export default Options