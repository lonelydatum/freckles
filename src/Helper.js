
function range(min, max) {
	const diff = max - min
	const r = diff * Math.random()
	return r + min
}

export {range}