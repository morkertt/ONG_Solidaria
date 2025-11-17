import { createAlert } from './templates.js';

export function setupFormValidation() {
    const form = document.getElementById('cadastro-form');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const existingAlert = form.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        if (!form.checkValidity()) {
            const alertHTML = createAlert('Por favor, preencha todos os campos obrigatórios corretamente.', 'error');
            form.insertAdjacentHTML('afterbegin', alertHTML);
            return;
        }

        const cpfInput = document.getElementById('cpf');
        const telefoneInput = document.getElementById('telefone');
        let isValid = true;
        let errorMessage = '';

        if (!validateCPF(cpfInput.value)) {
            isValid = false;
            errorMessage += 'O CPF inserido não é válido. ';
            cpfInput.classList.add('is-invalid');
        } else {
            cpfInput.classList.remove('is-invalid');
        }

        if (!validatePhone(telefoneInput.value)) {
            isValid = false;
            errorMessage += 'O número de telefone inserido não é válido. ';
            telefoneInput.classList.add('is-invalid');
        } else {
            telefoneInput.classList.remove('is-invalid');
        }

        if (!isValid) {
            const alertHTML = createAlert(`Erro de consistência de dados: ${errorMessage}`, 'error');
            form.insertAdjacentHTML('afterbegin', alertHTML);
            return;
        }

        const alertHTML = createAlert('Cadastro realizado com sucesso! Em breve entraremos em contato.', 'success');
        form.insertAdjacentHTML('afterbegin', alertHTML);
        form.reset();
    });
}

function validateCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]/g, '');
    if (cpf.length !== 11) return false;
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    return true;
}

function validatePhone(phone) {
    phone = phone.replace(/[^\d]/g, '');
    if (phone.length < 10 || phone.length > 11) return false;
    return true;
}
