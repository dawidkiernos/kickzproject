const lines = [
    "Phoenix BIOS 4.0 Release 6.0",
    "Copyright © 1985-1999 Phoenix Technologies Ltd.",
    "",
    "CPU: Intel 80486DX4 @ 100MHz",
    "Memory Test: 65536K OK",
    "",
    "Detecting IDE Devices...",
    "Primary Master: ST3144A",
    "Primary Slave: None",
    "",
    "Loading operating system", // kropki dodajemy ręcznie
    ""
];

let index = 0;
let screen = document.getElementById("screen");

function typeLine(line, callback) {

 // --- Specjalna animacja kropek ---
if (line === "Loading operating system") {

    screen.innerHTML += "Loading operating system"; // bez kropek

    setTimeout(() => { screen.innerHTML += "."; }, 300);  // 1 kropka
    setTimeout(() => { screen.innerHTML += "."; }, 700);  // 2 kropka

    setTimeout(() => {
        screen.innerHTML += "."; // 3 kropka
        screen.innerHTML += "\n";

        // -------------------------------------
        //   1 SEKUNDA PO 3 KROPCE → ZNIKNIĘCIE
        // -------------------------------------
        setTimeout(() => {
            const boot = document.getElementById("boot-screen");
            boot.style.display = None;

            setTimeout(() => {
                boot.style.display = None;
                document.getElementById("main-content").style.display = "block";
            }, 600); // musi odpowiadać CSS transition
        }, 1000); // << tu ustawiasz 1 sekundę (1000ms)

        callback();
    }, 1100);

    return;
}

    // --- Normalne szybkie pisanie reszty linii ---
    let i = 0;
    function typeChar() {
        if (i < line.length) {
            screen.innerHTML += line[i];
            i++;
            setTimeout(typeChar, 1 + Math.random() * 5);
        } else {
            screen.innerHTML += "\n";
            callback();
        }
    }
    typeChar();
}

function nextLine() {
    if (index < lines.length) {
        let delay = 30 + Math.random() * 80;
        setTimeout(() => {
            typeLine(lines[index], nextLine);
            index++;
        }, delay);
    } else {
        // Kiedy BOOT jest gotowy → znikanie + pokazanie treści strony
        setTimeout(() => {
            const boot = document.getElementById("boot-screen");
            boot.style.opacity = 0;

            setTimeout(() => {
                boot.style.display = "none";
                document.getElementById("main-content").style.display = "block";
            }, 600);
        }, 300);
    }
}

setTimeout(nextLine, 100);

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const yesButton = document.getElementById('yes-button');
    const closeButton = document.querySelector('.close-button');
    const overlay = document.getElementById('overlay');
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

	// Dynamiczne wypełnianie paska ładowania
	const fill = document.querySelector('.retro-loader-fill'); // upewnij się, że masz w HTML element z klasą .retro-loader-fill
	let width = 0;

	const interval = setInterval(() => {
    width += Math.random() * 5; // losowy przyrost 0-5%
    if(width >= 100) {
        width = 100;
        clearInterval(interval);
        // Opcjonalnie: automatyczne ukrycie ekranu po zakończeniu ładowania
       // setTimeout(() => {
   //         document.getElementById('retro-shutdown-screen').classList.remove('show');
 //       }, 500);
    }
    fill.style.width = width + '%';
}, 100);


	// Opcjonalnie: automatyczne ukrycie po 4 sekundach
	//setTimeout(() => {
    	//document.getElementById('retro-shutdown-screen').classList.remove('show');
	//}, 4000);
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
    }
    );
     //czarny ekran 
button.addEventListener('click', () => {
    overlay.classList.toggle('active');
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
