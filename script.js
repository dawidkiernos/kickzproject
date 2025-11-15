document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const yesButton = document.getElementById('yes-button');
    const closeButton = document.querySelector('.close-button');
    
    // Funkcja zapisywania e-maila
    function saveEmail() {
        const email = emailInput.value.trim();
        
        if (email === '') {
            alert('Proszę wprowadzić adres e-mail!');
            return;
        }
        
        // Walidacja podstawowa e-maila
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Proszę wprowadzić prawidłowy adres e-mail!');
            return;
        }
        
        // Zapisanie e-maila lokalnie
        let savedEmail = email;
        console.log('E-mail zapisany:', savedEmail);
        
        // Opcjonalnie: zapisanie do localStorage
        localStorage.setItem('kickzz_waitlist_email', savedEmail);
        
        // Pokazanie ekranu starego Windowsa
	document.getElementById('retro-shutdown-screen').classList.add('show');

	// Opcjonalnie: automatyczne ukrycie po 4 sekundach
	setTimeout(() => {
    	document.getElementById('retro-shutdown-screen').classList.remove('show');
	}, 4000);
        // Wyczyszczenie pola
        emailInput.value = '';
    }
    
    // Obsługa kliknięcia przycisku "Yes"
    yesButton.addEventListener('click', saveEmail);
    
    // Obsługa naciśnięcia Enter w polu e-mail
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            saveEmail();
        }
    });
    
    // Obsługa przycisku zamykania (opcjonalna)
    closeButton.addEventListener('click', function() {
        // Można dodać logikę zamykania okna lub ukrycia
        console.log('Przycisk zamykania kliknięty');
        // window.close(); // Nie zadziała w większości przeglądarek ze względów bezpieczeństwa
    });
    
    // Efekt hover dla przycisków (dodatkowy efekt retro)
    yesButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e0e0e0';
    });
    
    yesButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#c0c0c0';
    });
    
    closeButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e0e0e0';
    });
    
    closeButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#c0c0c0';
    });
});
