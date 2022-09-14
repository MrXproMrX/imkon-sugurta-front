const root = document.documentElement
const html = document.querySelector('html')

;[...window.app.querySelectorAll('.toggle-brightness-btn')].forEach(
	(button, index) => {
		button.addEventListener('click', () => {
			if (window.app.classList.contains('active')) {
				window.app.classList.remove('active')
			}

			setTimeout(() => {
				window.app.dataset.index = index
				window.app.classList.add('active')
			}, 100)
		})
	}
)

let currFont = 16
let increaseFont = currFont
let decreaseFont

document.getElementById('increaseFontsize').addEventListener('click', () => {
	if (increaseFont !== 22) {
		increaseFont = increaseFont + 1
		decreaseFont = increaseFont
	}

	html.style.fontSize = `${increaseFont}px`
})

document.getElementById('unset').addEventListener('click', () => {
	increaseFont = currFont
	decreaseFont = currFont
	html.style.fontSize = `${currFont}px`
})

document.getElementById('decreaseFontsize').addEventListener('click', () => {
	if (decreaseFont !== 15) {
		decreaseFont = decreaseFont - 1
		increaseFont = decreaseFont
	}

	html.style.fontSize = `${decreaseFont}px`
})

const brightnessRange = document.getElementById('brightnessRange')
const brightnessRangeOutput = document.getElementById('brightnessRangeOutput')
brightnessRangeOutput.innerHTML = brightnessRange.value

brightnessRange.addEventListener('input', e => {
	brightnessRangeOutput.innerHTML = e.target.value
	root.style.setProperty('--brightness', `${parseInt(e.target.value)}%`)
})

const contrastRange = document.getElementById('contrastRange')
const contrastRangeOutput = document.getElementById('contrastRangeOutput')
contrastRangeOutput.innerHTML = contrastRange.value

contrastRange.addEventListener('input', e => {
	contrastRangeOutput.innerHTML = e.target.value
	root.style.setProperty('--contrast', `${parseInt(e.target.value)}%`)
})

const grayscaleCheckbox = document.querySelector('.grayscale')

grayscaleCheckbox.addEventListener('change', e => {
	if (e.target.checked) {
		root.style.setProperty('--grayscale', '1')
	} else {
		root.style.setProperty('--grayscale', '0')
	}
})

const resetBtn = document.getElementById('resetBtn')

resetBtn.addEventListener('click', () => {
	window.app.dataset.index = '0'

	brightnessRange.value = '100'
	brightnessRangeOutput.innerHTML = '100'
	root.style.setProperty('--brightness', '100%')

	contrastRange.value = '100'
	contrastRangeOutput.innerHTML = '100'
	root.style.setProperty('--contrast', '100%')

	grayscaleCheckbox.checked = false
	root.style.setProperty('--grayscale', '0')

	html.style.fontSize = `${currFont}px`
})
