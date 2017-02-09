import Signals from 'signals'
import Rect from './util/Rect.js'
import {range} from './util/Helper.js'

class Options {
	constructor(toFrom='to', speed={min:1, max:3}, tweenProps, startTime=0) {
		this.toFrom = toFrom

		this.signals = {
			speedMin: new Signals()
		}

		this.startTime = startTime

		this.tweenProps = {

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

	getXY(tweenProps, homeXY) {

		if(tweenProps.xy instanceof Rect) {
			const randomPoint = tweenProps.xy.getRandomPoint()
			return {
				...tweenProps,
				...randomPoint
			}
		}else if( tweenProps.xy === "HOME"){
			return {...tweenProps, ...homeXY}
		}
	}

	setSpeed(speed) {
		const type = typeof(speed)
		if(type === 'number') {
			this.speed = speed
		}else if(type === 'object'){
			this.speed = {...this.speed, ...speed}
		}
	}

	getSpeed(speed) {
		const type = typeof(speed)
		if(type === 'number') {
			return this.speed
		}else if(type === 'object'){
			return range(this.speed.min, this.speed.max)
		}
	}




	getTweenData(homeXY) {

		const tweenData = this.getXY(this.tweenProps, homeXY)





		const speed = this.getSpeed(this.speed)

		return {speed, tweenData}
	}


}


export default Options