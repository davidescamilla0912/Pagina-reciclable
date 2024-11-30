class Auth {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.currentPage = window.location.pathname.includes('register.html') ? 'register' : 'login';
        this.initializeEvents();
    }

    initializeEvents() {
        // Inicializar eventos según la página actual
        if (this.currentPage === 'login') {
            document.getElementById('loginForm').addEventListener('submit', (e) => this.handleLogin(e));
        } else {
            document.getElementById('registerForm').addEventListener('submit', (e) => this.handleRegister(e));
        }

        // Inicializar toggles de contraseña
        document.querySelectorAll('.toggle-password').forEach(toggle => {
            toggle.addEventListener('click', (e) => this.togglePasswordVisibility(e));
        });
    }

    togglePasswordVisibility(e) {
        const passwordField = e.target.previousElementSibling;
        const type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;
        e.target.classList.toggle('fa-eye');
        e.target.classList.toggle('fa-eye-slash');
    }

    handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        if (this.validateLogin(email, password)) {
            const user = this.users.find(u => u.email === email && u.password === password);
            
            if (user) {
                if (rememberMe) {
                    localStorage.setItem('currentUser', JSON.stringify({
                        email: user.email,
                        name: user.name
                    }));
                }
                
                this.showNotification('¡Inicio de sesión exitoso!', 'success');
                setTimeout(() => {
                    // Redirigir a la página principal después de 1.5 segundos
                    window.location.href = 'INICIO.html';
                }, 1500);
            } else {
                this.showNotification('Credenciales incorrectas', 'error');
            }
        }
    }

    handleRegister(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (this.validateRegister(name, email, password, confirmPassword)) {
            if (this.users.some(u => u.email === email)) {
                this.showNotification('Este correo ya está registrado', 'error');
                return;
            }

            const newUser = {
                name,
                email,
                password,
                createdAt: new Date().toISOString()
            };

            // Guardar el nuevo usuario
            this.users.push(newUser);
            localStorage.setItem('users', JSON.stringify(this.users));
            
            // Mostrar mensaje de éxito
            this.showNotification('¡Registro exitoso! Redirigiendo al login...', 'success');

            // Redireccionar al login después de 2 segundos
            setTimeout(() => {
                window.location.href = 'Login.html'; // Cambiar esta línea si deseas redirigir a otra página
            }, 2000);
        }
    }

    validateLogin(email, password) {
        if (!this.validateEmail(email)) {
            this.showNotification('Por favor, ingresa un email válido', 'error');
            return false;
        }
        if (password.length < 6) {
            this.showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
            return false;
        }
        return true;
    }

    validateRegister(name, email, password, confirmPassword) {
        if (name.length < 3) {
            this.showNotification('El nombre debe tener al menos 3 caracteres', 'error');
            return false;
        }
        if (!this.validateEmail(email)) {
            this.showNotification('Por favor, ingresa un email válido', 'error');
            return false;
        }
        if (password.length < 6) {
            this.showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
            return false;
        }
        if (password !== confirmPassword) {
            this.showNotification('Las contraseñas no coinciden', 'error');
            return false;
        }
        return true;
    }

    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    showNotification(message, type) {
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Mostrar la notificación
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        // Ocultar y remover la notificación después de 3 segundos
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Inicializar la autenticación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new Auth();
}); 

