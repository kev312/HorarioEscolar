document.getElementById('startButton').addEventListener('click', () => {
    const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
    const subjects = {};

    days.forEach(day => {
        subjects[day] = [];
        for (let i = 1; i <= 6; i++) {
            const subject = prompt(`Introduce la materia ${i} para ${day}`);
            subjects[day].push(subject);
        }
    });

    days.forEach(day => {
        subjects[day].forEach((subject, index) => {
            document.getElementById(`${day}${index + 1}`).innerText = subject;
        });
    });

    document.getElementById('input-container').style.display = 'none';
    document.getElementById('schedule-container').style.display = 'block';
});
