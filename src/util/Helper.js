
function range(min, max) {
	const diff = max - min
	const r = diff * Math.random()
	return r + min
}

function IsCanvasBlank(canvas) {
    var blank = document.createElement('canvas');
    blank.width = canvas.width;
    blank.height = canvas.height;

    return canvas.toDataURL() == blank.toDataURL();
}

function ClearCanvas(canvas) {
	const ctxStupid = canvas.getContext('2d')
	ctxStupid.clearRect(0, 0, canvas.width, canvas.height);
	ctxStupid.drawImage(result.image, 0, 0)
}

export {range, IsCanvasBlank, ClearCanvas}