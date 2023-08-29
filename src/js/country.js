document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	callCountries()
})

const callCountries = () => {
	const input = document.querySelector("#tel")

	if(!input) return

	window.intlTelInput(input, {
		separateDialCode: true,
		excludeCountries: ['in', 'il'],
		preferredCountries: ['ru', 'jp', 'pk', 'no']
	})
}