const personalCabinetDropdownItems = document.querySelectorAll(
	'.personalCabinetNavShowMore-dropdown .dropdown-item'
)

const personalCabinetContent = document.querySelector('#personalCabinetContent')

personalCabinetDropdownItems.forEach(el => {
	el.addEventListener('click', e => {
		personalCabinetDropdownItems.forEach(el => el.classList.remove('active'))

		document.querySelector(e.target.getAttribute('data-target')).click()

		if (
			document
				.querySelector(e.target.getAttribute('data-target'))
				.classList.contains('active')
		) {
			el.classList.add('active')
		}
	})
})
