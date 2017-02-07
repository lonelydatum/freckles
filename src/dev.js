import Main, {Tween} from './index.js'
import Fonts from './util/Fonts.js'


const canvas = document.getElementById('art')
const main = new Main(canvas, {color: 'yellow'})
const promise = main.write('STAR DUST', {'font-size':88, color:'yellow', fontface:Fonts.bungee_outlineregular, top:120})
let tween

promise.then( ()=> {
	tween = new Tween( main.stardust )
main.play()
} )

window.corner_north = function() {
	main.tweenTo( tween.word.n )
	main.play()
}

window.corner_south = function() {
	main.tweenTo( tween.word.s )
	main.play()
}




