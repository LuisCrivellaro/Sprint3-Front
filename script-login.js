document.addEventListener('DOMContentLoaded', function() {
    const formPaciente = document.getElementById('formLoginPaciente');
    const cpfPaciente = document.getElementById('cpfPaciente');
    const senhaPaciente = document.getElementById('senhaPaciente');
    
    const formMedico = document.getElementById('formLoginMedico');
    const crmMedico = document.getElementById('crmMedico');
    const senhaMedico = document.getElementById('senhaMedico');
    
    const toggleButtons = document.querySelectorAll('.toggleSenha');
    
    cpfPaciente.addEventListener('input', function(e) {
        let valor = e.target.value;
        
        valor = valor.replace(/\D/g, '');
        
        if (valor.length > 0) {
            valor = valor.replace(/^(\d{3})(\d)/, '$1.$2');
            valor = valor.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
            valor = valor.replace(/\.(\d{3})(\d)/, '.$1-$2');
        }
        
        if (valor.length > 14) {
            valor = valor.substring(0, 14);
        }
        
        e.target.value = valor;
    });
    
    crmMedico.addEventListener('input', function(e) {
        let valor = e.target.value.toUpperCase();
        e.target.value = valor;
    });
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const senhaInput = this.previousElementSibling;
            const icone = this.querySelector('i');
            
            if (senhaInput.type === 'password') {
                senhaInput.type = 'text';
                icone.className = 'fas fa-eye-slash';
            } else {
                senhaInput.type = 'password';
                icone.className = 'fas fa-eye';
            }
        });
    });
    
    formPaciente.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const cpf = cpfPaciente.value.replace(/\D/g, '');
        if (cpf.length !== 11 || !validarCPF(cpf)) {
            exibirErro(cpfPaciente, 'CPF inválido. Por favor, verifique.');
            return;
        }
        
        if (senhaPaciente.value.length < 6) {
            exibirErro(senhaPaciente, 'A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        
        const lembrar = document.getElementById('lembrarPaciente').checked;
        if (lembrar) {
            localStorage.setItem('lembrarCPF', cpfPaciente.value);
        } else {
            localStorage.removeItem('lembrarCPF');
        }
        
        notificarSucesso('Paciente', 'Login realizado com sucesso!');
        
    });
    
    formMedico.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (crmMedico.value.trim().length < 4) {
            exibirErro(crmMedico, 'CRM inválido. Por favor, verifique.');
            return;
        }
        
        if (senhaMedico.value.length < 6) {
            exibirErro(senhaMedico, 'A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        
        const lembrar = document.getElementById('lembrarMedico').checked;
        if (lembrar) {
            localStorage.setItem('lembrarCRM', crmMedico.value);
        } else {
            localStorage.removeItem('lembrarCRM');
        }
        
        notificarSucesso('Médico', 'Login realizado com sucesso!');
        
    });
    
    if (localStorage.getItem('lembrarCPF')) {
        cpfPaciente.value = localStorage.getItem('lembrarCPF');
        document.getElementById('lembrarPaciente').checked = true;
    }
    
    if (localStorage.getItem('lembrarCRM')) {
        crmMedico.value = localStorage.getItem('lembrarCRM');
        document.getElementById('lembrarMedico').checked = true;
    }
    
    function exibirErro(input, mensagem) {
        removerErro(input);
        
        const erro = document.createElement('div');
        erro.className = 'erro-validacao';
        erro.textContent = mensagem;
        erro.style.color = '#dc3545';
        erro.style.fontSize = '0.85rem';
        erro.style.marginTop = '-0.5rem';
        erro.style.marginBottom = '1rem';
        
        input.classList.add('is-invalid');
        input.style.borderColor = '#dc3545';
        
        input.closest('.input-group').after(erro);
        
        setTimeout(() => {
            removerErro(input);
        }, 5000);
    }
    
    function removerErro(input) {
        const mensagemErro = input.closest('.mb-4').querySelector('.erro-validacao');
        if (mensagemErro) {
            mensagemErro.remove();
        }
        input.classList.remove('is-invalid');
        input.style.borderColor = '';
    }
    
    function notificarSucesso(tipo, mensagem) {
        const notificacao = document.createElement('div');
        notificacao.className = 'notificacao-sucesso';
        notificacao.innerHTML = `
            <div style="background-color: #28a745; color: white; padding: 15px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); position: fixed; top: 20px; right: 20px; z-index: 1000;">
                <div style="display: flex; align-items: center;">
                    <i class="fas fa-check-circle" style="margin-right: 10px; font-size: 1.2rem;"></i>
                    <div>
                        <strong>${tipo}</strong>
                        <p style="margin: 0;">${mensagem}</p>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notificacao);
        
        setTimeout(() => {
            notificacao.remove();
        }, 3000);
    }
    
    function validarCPF(cpf) {
        if (
            cpf === '00000000000' || 
            cpf === '11111111111' || 
            cpf === '22222222222' || 
            cpf === '33333333333' || 
            cpf === '44444444444' || 
            cpf === '55555555555' || 
            cpf === '66666666666' || 
            cpf === '77777777777' || 
            cpf === '88888888888' || 
            cpf === '99999999999'
        ) {
            return false;
        }
        
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = 11 - (soma % 11);
        let dv1 = resto > 9 ? 0 : resto;
        
        if (dv1 !== parseInt(cpf.charAt(9))) {
            return false;
        }
        
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = 11 - (soma % 11);
        let dv2 = resto > 9 ? 0 : resto;
        
        if (dv2 !== parseInt(cpf.charAt(10))) {
            return false;
        }
        
        return true;
    }
    
    cpfPaciente.addEventListener('input', function() {
        removerErro(this);
    });
    
    senhaPaciente.addEventListener('input', function() {
        removerErro(this);
    });
    
    crmMedico.addEventListener('input', function() {
        removerErro(this);
    });
    
    senhaMedico.addEventListener('input', function() {
        removerErro(this);
    });
});