const PIXI = require('pixi.js')

class Render {
	constructor(renderer) {
		this.renderer = renderer
		// document.body.appendChild(this.renderer.view)
		this.stage = new PIXI.Container();
		this.container
	}


	makeParticleGraphic(color) {
		const graphic = new PIXI.Graphics()
		graphic.beginFill(color);
		graphic.drawRect(0, 0, 1, 2);
		return graphic
	}


	create(list) {
		console.log(list.length);
		this.container = new PIXI.particles.ParticleContainer(list.length, {alpha:true});


  		const graphic = this.makeParticleGraphic()
  		let texture = this.renderer.generateTexture( graphic );


		list.forEach((item)=>{
			const p = new PIXI.Sprite(texture)
			// const graphic = this.makeParticleGraphic(item.hex)
			p.addChild(p)

			p.og=item
			p.x = item.x
			p.y = item.y
			p.alpha = item.rgba.a


			this.container.addChild(p)
		})





		this.stage.addChild(this.container)

		this.tween()
		this.render()

	}

	tween() {
		// const { toFrom } = tweenOptions
		const tl = new TimelineMax()

		this.container.children.forEach((particleItem)=>{
			const x = Math.random()>.5 ? 0 : 1000
			const y = Math.random()>.5 ? 0 : 500
			// TweenLite.to( particleItem, 1, {x, y, ease:Bounce.easeOut, delay:Math.random()*5})
		})
		// return tl
	}

	render() {
		this.renderer.render(this.container)
	}
}

export default Render