document.addEventListener('DOMContentLoaded', () => {
	const logo = document.getElementById('logo')
	const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

	function updateLogo() {
		if (darkModeMediaQuery.matches) {
			logo.src = '../images/erickay_dark.svg' // Chemin du logo pour le mode sombre
		} else {
			logo.src = '../images/erickay_04.svg' // Chemin du logo pour le mode clair
		}
	}

	// Vérifier le mode au chargement
	updateLogo()

	// Écouter les changements de mode
	darkModeMediaQuery.addEventListener('change', updateLogo)
})
