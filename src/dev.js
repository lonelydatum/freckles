
import Main, {Tween} from './index.js'
import Fonts from './util/Fonts.js'



console.log(Tween);


const canvas = document.getElementById('art')
const main = new Main(canvas, {color: 'yellow'})
const promise = main.write('STAR DUST', {'font-size':88, color:'yellow', fontface:Fonts.bungee_outlineregular, top:120})

promise.then( ()=> {
	const tween = new Tween( main.stardust )
	main.tweenTo( tween.word.s )
	main.play()
	console.log(main.stardust.particles.length)
} )




