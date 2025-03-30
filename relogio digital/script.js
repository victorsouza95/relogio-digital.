// script.js
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');  // Formatar hora
    const minutes = String(now.getMinutes()).padStart(2, '0');  // Formatar minutos
    const seconds = String(now.getSeconds()).padStart(2, '0');  // Formatar segundos

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

// Atualizar o relógio a cada segundo
setInterval(updateClock, 1000);

// Chama a função imediatamente para exibir a hora ao carregar a página
updateClock();
