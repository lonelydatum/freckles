import Stardust, {Tween} from './Stardust.js'
import Fonts from './util/Fonts.js'






const stardust = new Stardust( document.getElementById('canvasDummy') )
const promise = stardust.write(document.getElementById('stardust-css'))


stardust.easing = Sine.easeOut



promise.then( ()=> {
	let tween = new Tween( stardust.artReal )
	stardust.play()
} )


window.corner_north = function() {
	stardust.tweenTo( tween.word.north )
	stardust.play()
}

window.corner_south = function() {
	stardust.tweenTo( tween.word.south )
	stardust.play()
}




