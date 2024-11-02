// Data e horário do próximo Grande Prêmio (ajuste conforme necessário)
const targetDate = new Date('2024-11-03T14:00:00');

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    // Calcula dias, horas, minutos e segundos restantes
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Atualiza o HTML dos elementos de contagem regressiva
    document.querySelector("#days .time").textContent = days.toString().padStart(2, '0');
    document.querySelector("#hours .time").textContent = hours.toString().padStart(2, '0');
    document.querySelector("#minutes .time").textContent = minutes.toString().padStart(2, '0');
    document.querySelector("#seconds .time").textContent = seconds.toString().padStart(2, '0');
}

// Chama a função a cada segundo
updateCountdown();  // Primeira atualização imediata
setInterval(updateCountdown, 1000);  // Atualizações a cada segundo
