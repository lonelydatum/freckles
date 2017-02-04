import Rect from './Rect.js'

const rect = new Rect(10, 20, 0, 0)



	test('getRandomPoint', ()=>{
		const ran = rect.getRandomPoint()
		console.log(rect);
		expect(ran.x).toBeGreaterThanOrEqual(10)
		expect(ran.x).toBeLessThanOrEqual(11)
		expect(ran.y).toBeGreaterThanOrEqual(20)
		expect(ran.y).toBeLessThanOrEqual(21)
	})

