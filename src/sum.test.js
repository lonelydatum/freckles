// const sum = require('./sum')
import sum from './sum'

test('adds', ()=>{
	expect(sum(1,2)).toBe(3)
})


const canvas = window.document.createElement("canvas");
console.log(canvas.height);