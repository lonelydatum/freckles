import Rect from './Rect.js'

const xy = {x:10, y:20}
const wh = {w:0, h:0}
const rect = new Rect(xy.x, xy.y, wh.w, wh.h)
let _compass

test('updateCompass', ()=>{
	const compass = rect.updateCompass()
	_compass = {
		n: xy.y,
		e: xy.x+wh.w,
		s: xy.y + wh.h,
		w: xy.x
	}

	expect(compass.n).toEqual(_compass.n)
	expect(compass.e).toEqual(_compass.e)
	expect(compass.s).toEqual(_compass.s)
	expect(compass.w).toEqual(_compass.w)
})

test('updateCorner', ()=>{
	const corner = rect.updateCorner()
	const {n, e, s, w} = _compass
	expect(corner.ne).toEqual({y:n, x:e})
	expect(corner.nw).toEqual({y:n, x:w})
	expect(corner.se).toEqual({y:s, x:e})
	expect(corner.sw).toEqual({y:s, x:w})
})

test('updateCenter', ()=>{
	const center = rect.updateCenter()
	const {n, e, s, w} = _compass
	const centerX = rect.centerX
	const centerY = rect.centerY

	expect(center.center).toEqual({x:centerX, y:centerY})
	expect(center.n).toEqual({x:centerX, y:n})
	expect(center.s).toEqual({x:centerX, y:s})
	expect(center.e).toEqual({x:e, y:centerY})
	expect(center.w).toEqual({x:w, y:centerY})
})

test('getRandomPoint', ()=>{
	const ran = rect.getRandomPoint()
	expect(ran.x).toBeGreaterThanOrEqual(_compass.w)
	expect(ran.x).toBeLessThanOrEqual(_compass.e)
	expect(ran.y).toBeGreaterThanOrEqual(_compass.n)
	expect(ran.y).toBeLessThanOrEqual(_compass.s)
})



