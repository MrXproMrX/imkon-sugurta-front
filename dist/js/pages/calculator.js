const datepickers_ui = document.querySelectorAll('.vanilla-datepicker')
const showLeftColumn_ui = document.querySelector('#showLeftColumn')
const showRightColumn_ui = document.querySelector('#showRightColumn')
const mainOverlay_ui = document.querySelector('.main-overlay')
const calculatorPageLeftColumn_ui = document.querySelector(
	'#calculatorPageLeftColumn'
)
const calculatorPageRightColumn_ui = document.querySelector(
	'#calculatorPageRightColumn'
)

datepickers_ui.forEach(datepicker_ui => {
	new Datepicker(datepicker_ui, {
		autohide: true,
		disableTouchKeyboard: true,
		minDate: new Date(),
		format: 'mm/dd/yyyy',
		orientation: 'auto left',
		prevArrow: '<i class="fas fa-chevron-left"></i>',
		nextArrow: '<i class="fas fa-chevron-right"></i>',
	})
})

showLeftColumn_ui.addEventListener('click', handleShowLeftColumn)
showRightColumn_ui.addEventListener('click', handleShowRightColumn)
mainOverlay_ui.addEventListener('click', handleOverlayClick)

document.addEventListener('DOMContentLoaded', function () {
	const stepperFormEl = document.querySelector('#stepperForm')
	const stepperForm = new Stepper(stepperFormEl, {
		animation: true,
	})

	const btnNextList = [].slice.call(document.querySelectorAll('.btn-next-form'))
	const btnPrevList = [].slice.call(document.querySelectorAll('.btn-prev-form'))
	const stepperPanList = [].slice.call(
		stepperFormEl.querySelectorAll('.bs-stepper-pane')
	)
	const form = stepperFormEl.querySelector('.bs-stepper-content form')

	btnNextList.forEach(function (btn) {
		btn.addEventListener('click', function () {
			stepperForm.next()

			const steps = [...stepperForm._steps]

			const activeStep = steps.findIndex(step =>
				step.classList.contains('active')
			)

			steps.splice(activeStep)

			steps.forEach(step => {
				if (!step.classList.contains('step-done')) {
					step.classList.add('step-done')
					const stepDoneCircle = step.children[0].children[0]
					stepDoneCircle.innerHTML = '<i class="fas fa-check"></i>'
				}
			})
		})
	})

	btnPrevList.forEach(function (btn) {
		btn.addEventListener('click', function () {
			stepperForm.previous()

			const steps = [...stepperForm._steps]

			const doneStep = steps.find(
				step =>
					step.classList.contains('step-done') &&
					step.classList.contains('active')
			)

			doneStep.classList.remove('step-done')
			const stepDoneCircle = doneStep.children[0].children[0]
			stepDoneCircle.innerHTML = ''
		})
	})

	stepperFormEl.addEventListener('show.bs-stepper', function (event) {
		form.classList.remove('was-validated')
		let nextStep = event.detail.indexStep
		let currentStep = nextStep

		if (currentStep > 0) {
			currentStep--
		}

		// let stepperPan = stepperPanList[currentStep]

		// if (stepperPan.getAttribute('id') === 'test-form-2') {
		// 	event.preventDefault()
		// 	form.classList.add('was-validated')
		// }
	})
})

function handleShowLeftColumn() {
	document.documentElement.classList.add('overflow-y-hidden')
	mainOverlay_ui.classList.add('active')
	calculatorPageLeftColumn_ui.classList.add('active')
}

function handleShowRightColumn() {
	document.documentElement.classList.add('overflow-y-hidden')
	mainOverlay_ui.classList.add('active')
	calculatorPageRightColumn_ui.classList.add('active')
}

function handleOverlayClick() {
	mainOverlay_ui.classList.remove('active')
	calculatorPageLeftColumn_ui.classList.remove('active')
	calculatorPageRightColumn_ui.classList.remove('active')
	document.documentElement.classList.remove('overflow-y-hidden')
}
