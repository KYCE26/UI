document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const response = await fetch('https://130.162.195.228/mhs714220019/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                window.location.href = 'dashboard.html';
            } else {
                alert('Login failed');
            }
        });
    }

    const motorsContainer = document.getElementById('motors-container');

    if (motorsContainer) {
        fetchMotors();
    }

    async function fetchMotors() {
        const response = await fetch('https://130.162.195.228/mhs714220022/motors');
        const motors = await response.json();

        motors.forEach(motor => {
            const motorElement = document.createElement('div');
            motorElement.className = 'motor';
            motorElement.innerHTML = `
                <h2>${motor.nama_motor}</h2>
                <p>Teacher: ${motor.plat}</p>
            `;
            MotorsContainer.appendChild(motorElement);
        });
    }
});