document.addEventListener('DOMContentLoaded', function() {
    // ===== Funcionalidades para os formulários de login =====
    
    // Máscara para CPF
    const cpfInput = document.getElementById('cpfPaciente');
    if (cpfInput) {
        cpfInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            
            if (value.length > 9) {
                value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
            } else if (value.length > 6) {
                value = value.replace(/^(\d{3})(\d{3})(\d{3}).*/, '$1.$2.$3');
            } else if (value.length > 3) {
                value = value.replace(/^(\d{3})(\d{3}).*/, '$1.$2');
            }
            
            e.target.value = value;
        });
    }
    
    // Máscara para CRM (apenas números e letras)
    const crmInput = document.getElementById('crmMedico');
    if (crmInput) {
        crmInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/[^0-9A-Za-z\/]/g, '');
            e.target.value = value.toUpperCase();
        });
    }
    
    // Mostrar/Ocultar Senha
    const toggleSenhaButtons = document.querySelectorAll('.toggleSenha');
    toggleSenhaButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const senhaInput = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (senhaInput.type === 'password') {
                senhaInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                senhaInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
    
    // Formulário de Login de Paciente
    const formLoginPaciente = document.getElementById('formLoginPaciente');
    if (formLoginPaciente) {
        formLoginPaciente.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const cpf = document.getElementById('cpfPaciente').value;
            const senha = document.getElementById('senhaPaciente').value;
            const lembrar = document.getElementById('lembrarPaciente').checked;
            
            // Validação básica
            if (!validarCPF(cpf)) {
                mostrarMensagem('CPF inválido. Por favor, verifique e tente novamente.', 'erro');
                return;
            }
            
            if (senha.length < 6) {
                mostrarMensagem('A senha deve ter pelo menos 6 caracteres.', 'erro');
                return;
            }
            
            // Salvando dados no localStorage se a opção "lembrar" estiver marcada
            if (lembrar) {
                localStorage.setItem('cpfPaciente', cpf);
            } else {
                localStorage.removeItem('cpfPaciente');
            }
            
            // Simulação de login bem-sucedido
            mostrarMensagem('Login realizado com sucesso! Redirecionando...', 'sucesso');
            
            // Redirecionar para área do paciente (simulado com setTimeout)
            setTimeout(function() {
                window.location.href = 'area-paciente.html';
            }, 1500);
        });
    }
    
    // Formulário de Login de Médico
    const formLoginMedico = document.getElementById('formLoginMedico');
    if (formLoginMedico) {
        formLoginMedico.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const crm = document.getElementById('crmMedico').value;
            const senha = document.getElementById('senhaMedico').value;
            const lembrar = document.getElementById('lembrarMedico').checked;
            
            // Validação básica
            if (crm.length < 4) {
                mostrarMensagem('CRM inválido. Por favor, verifique e tente novamente.', 'erro');
                return;
            }
            
            if (senha.length < 6) {
                mostrarMensagem('A senha deve ter pelo menos 6 caracteres.', 'erro');
                return;
            }
            
            // Salvando dados no localStorage se a opção "lembrar" estiver marcada
            if (lembrar) {
                localStorage.setItem('crmMedico', crm);
            } else {
                localStorage.removeItem('crmMedico');
            }
            
            // Simulação de login bem-sucedido
            mostrarMensagem('Login realizado com sucesso! Redirecionando...', 'sucesso');
            
            // Redirecionar para área do médico (simulado com setTimeout)
            setTimeout(function() {
                window.location.href = 'area-medico.html';
            }, 1500);
        });
    }
    
    // Carregar dados salvos
    function carregarDadosSalvos() {
        const cpfSalvo = localStorage.getItem('cpfPaciente');
        const crmSalvo = localStorage.getItem('crmMedico');
        
        if (cpfSalvo && document.getElementById('cpfPaciente')) {
            document.getElementById('cpfPaciente').value = cpfSalvo;
            document.getElementById('lembrarPaciente').checked = true;
        }
        
        if (crmSalvo && document.getElementById('crmMedico')) {
            document.getElementById('crmMedico').value = crmSalvo;
            document.getElementById('lembrarMedico').checked = true;
        }
    }
    
    // Chamada para carregar dados salvos
    carregarDadosSalvos();
    
    // ===== Funcionalidades para o Assistente Virtual =====
    
    const botaoAssistente = document.getElementById('botaoAssistente');
    const assistenteIA = document.getElementById('assistenteIA');
    const minimizarAssistente = document.getElementById('minimizarAssistente');
    const fecharAssistente = document.getElementById('fecharAssistente');
    const mensagemUsuario = document.getElementById('mensagemUsuario');
    const enviarMensagem = document.getElementById('enviarMensagem');
    const mensagensAssistente = document.getElementById('mensagensAssistente');
    
    // Abrir/fechar o assistente
    if (botaoAssistente) {
        botaoAssistente.addEventListener('click', function() {
            assistenteIA.classList.toggle('ativo');
            // Rolar para a última mensagem
            mensagensAssistente.scrollTop = mensagensAssistente.scrollHeight;
            // Focar no campo de entrada
            mensagemUsuario.focus();
        });
    }
    
    // Minimizar o assistente
    if (minimizarAssistente) {
        minimizarAssistente.addEventListener('click', function() {
            assistenteIA.classList.remove('ativo');
        });
    }
    
    // Fechar o assistente
    if (fecharAssistente) {
        fecharAssistente.addEventListener('click', function() {
            assistenteIA.classList.remove('ativo');
        });
    }
    
    // Função para enviar mensagem
    function enviarMensagemAssistente() {
        const texto = mensagemUsuario.value.trim();
        if (texto === '') return;
        
        // Adicionar mensagem do usuário
        adicionarMensagem(texto, 'usuario');
        
        // Limpar campo de entrada
        mensagemUsuario.value = '';
        
        // Simular resposta do assistente após um pequeno delay
        setTimeout(function() {
            // Simular "digitando..."
            const respostaTemp = adicionarMensagem('Digitando...', 'assistente', 'digitando');
            
            // Simular processamento da resposta
            setTimeout(function() {
                // Remover mensagem temporária
                if (respostaTemp) {
                    mensagensAssistente.removeChild(respostaTemp);
                }
                
                // Gerar resposta baseada na pergunta
                const resposta = gerarRespostaAssistente(texto);
                adicionarMensagem(resposta, 'assistente');
            }, 1000);
        }, 500);
    }
    
    // Adicionar evento de clique no botão de enviar
    if (enviarMensagem) {
        enviarMensagem.addEventListener('click', enviarMensagemAssistente);
    }
    
    // Adicionar evento de tecla Enter no campo de entrada
    if (mensagemUsuario) {
        mensagemUsuario.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                enviarMensagemAssistente();
            }
        });
    }
    
    // Função para adicionar mensagem ao chat
    function adicionarMensagem(texto, tipo, classe = '') {
        const mensagemDiv = document.createElement('div');
        mensagemDiv.className = `mensagem mensagem-${tipo} ${classe}`;
        
        const conteudoDiv = document.createElement('div');
        conteudoDiv.className = 'conteudo-mensagem';
        conteudoDiv.textContent = texto;
        
        const timestampDiv = document.createElement('div');
        timestampDiv.className = 'timestamp';
        timestampDiv.textContent = 'Agora';
        
        mensagemDiv.appendChild(conteudoDiv);
        mensagemDiv.appendChild(timestampDiv);
        
        mensagensAssistente.appendChild(mensagemDiv);
        
        // Rolar para a nova mensagem
        mensagensAssistente.scrollTop = mensagensAssistente.scrollHeight;
        
        return classe === 'digitando' ? mensagemDiv : null;
    }
    
    // Função para gerar resposta do assistente baseada na pergunta
    function gerarRespostaAssistente(pergunta) {
        pergunta = pergunta.toLowerCase();
        
        // Respostas pré-definidas baseadas em palavras-chave
        if (pergunta.includes('senha') && (pergunta.includes('esqueci') || pergunta.includes('recuperar'))) {
            return 'Para recuperar sua senha, clique em "Esqueci minha senha" abaixo do formulário de login. Você receberá instruções no e-mail cadastrado.';
        }
        
        if (pergunta.includes('cadastro') || pergunta.includes('registrar')) {
            return 'Novos pacientes podem se cadastrar clicando em "Cadastre-se" abaixo do formulário de login. Médicos precisam solicitar acesso através do link "Solicite acesso".';
        }
        
        if (pergunta.includes('consulta') || pergunta.includes('agendar')) {
            return 'Você pode agendar consultas após fazer login na sua conta de paciente. Também oferecemos consultas por telemedicina, que podem ser agendadas na seção "Telemedicina".';
        }
        
        if (pergunta.includes('exame') || pergunta.includes('resultado')) {
            return 'Resultados de exames podem ser acessados na sua área de paciente após fazer login. Também enviamos uma notificação por e-mail quando novos resultados estão disponíveis.';
        }
        
        if (pergunta.includes('convênio') || pergunta.includes('plano')) {
            return 'O Hospital Sabará aceita os principais convênios médicos. Para verificar se o seu plano é aceito, faça login e acesse a seção "Convênios" ou entre em contato pelo telefone (11) 3000-5000.';
        }
        
        if (pergunta.includes('onde') || pergunta.includes('localização') || pergunta.includes('endereço')) {
            return 'Estamos localizados na Av. Paulista, 200 - São Paulo/SP. Você pode obter direções através do nosso site após fazer login na sua conta.';
        }
        
        if (pergunta.includes('telefone') || pergunta.includes('contato')) {
            return 'Você pode entrar em contato conosco pelo telefone (11) 3000-5000 ou pelo e-mail contato@hospitalsabara.com.br.';
        }
        
        if (pergunta.includes('horário') || pergunta.includes('atendimento')) {
            return 'O horário de atendimento do hospital é 24 horas, 7 dias por semana. Para consultas eletivas, o atendimento é de segunda a sexta, das 8h às 20h, e aos sábados, das 8h às 14h.';
        }
        
        // Resposta padrão
        return 'Obrigado pela sua mensagem. Como posso ajudar com relação ao acesso ao sistema do Hospital Sabará? Posso fornecer informações sobre login, cadastro ou funcionamento do portal.';
    }
    
    // ===== Funções auxiliares =====
    
    // Função para validar CPF
    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]/g, '');
        
        if (cpf.length !== 11) return false;
        
        // Verifica se todos os dígitos são iguais
        if (/^(\d)\1+$/.test(cpf)) return false;
        
        // Validação do primeiro dígito verificador
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        
        let resto = 11 - (soma % 11);
        let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;
        
        if (digitoVerificador1 !== parseInt(cpf.charAt(9))) return false;
        
        // Validação do segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        
        resto = 11 - (soma % 11);
        let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;
        
        if (digitoVerificador2 !== parseInt(cpf.charAt(10))) return false;
        
        return true;
    }
    
    // Função para mostrar mensagens de feedback
    function mostrarMensagem(texto, tipo) {
        // Remover mensagens anteriores
        const mensagensAnteriores = document.querySelectorAll('.mensagem-feedback');
        mensagensAnteriores.forEach(function(mensagem) {
            mensagem.remove();
        });
        
        // Criar elemento de mensagem
        const mensagemDiv = document.createElement('div');
        mensagemDiv.className = `alert ${tipo === 'erro' ? 'alert-danger' : 'alert-success'} mensagem-feedback`;
        mensagemDiv.textContent = texto;
        
        // Inserir mensagem antes do botão de submit
        const activeTab = document.querySelector('.tab-pane.active');
        const botaoSubmit = activeTab.querySelector('button[type="submit"]');
        botaoSubmit.parentNode.insertBefore(mensagemDiv, botaoSubmit);


// Função para mostrar mensagens de feedback (continuação)
function mostrarMensagem(texto, tipo) {
    // Remover mensagens anteriores
    const mensagensAnteriores = document.querySelectorAll('.mensagem-feedback');
    mensagensAnteriores.forEach(function(mensagem) {
        mensagem.remove();
    });
    
    // Criar elemento de mensagem
    const mensagemDiv = document.createElement('div');
    mensagemDiv.className = `alert ${tipo === 'erro' ? 'alert-danger' : 'alert-success'} mensagem-feedback`;
    mensagemDiv.textContent = texto;
    
    // Inserir mensagem antes do botão de submit
    const activeTab = document.querySelector('.tab-pane.active');
    const botaoSubmit = activeTab.querySelector('button[type="submit"]');
    botaoSubmit.parentNode.insertBefore(mensagemDiv, botaoSubmit);
    
    // Remover mensagem após alguns segundos se for sucesso
    if (tipo === 'sucesso') {
        setTimeout(function() {
            if (mensagemDiv.parentNode) {
                mensagemDiv.parentNode.removeChild(mensagemDiv);
            }
        }, 5000);
    }
}

// ===== Melhorias de acessibilidade e experiência do usuário =====

// Animar transição entre abas
const abas = document.querySelectorAll('button[data-bs-toggle="tab"]');
abas.forEach(function(aba) {
    aba.addEventListener('shown.bs.tab', function(e) {
        // Adicionar classe para animar a entrada do conteúdo
        const targetId = e.target.getAttribute('data-bs-target');
        const targetPane = document.querySelector(targetId);
        
        if (targetPane) {
            targetPane.classList.add('fade-in');
            setTimeout(function() {
                targetPane.classList.remove('fade-in');
            }, 500);
        }
        
        // Limpar mensagens de feedback ao trocar de aba
        const mensagensAnteriores = document.querySelectorAll('.mensagem-feedback');
        mensagensAnteriores.forEach(function(mensagem) {
            mensagem.remove();
        });
    });
});

// Validação em tempo real para melhorar feedback ao usuário
const camposFormulario = document.querySelectorAll('.form-control');
camposFormulario.forEach(function(campo) {
    campo.addEventListener('blur', function() {
        validarCampo(this);
    });
    
    campo.addEventListener('input', function() {
        // Remover mensagens de erro quando o usuário começa a digitar
        const formGroup = this.closest('.mb-4');
        if (formGroup) {
            const feedbackInvalido = formGroup.querySelector('.invalid-feedback');
            if (feedbackInvalido) {
                feedbackInvalido.remove();
            }
            this.classList.remove('is-invalid');
        }
    });
});

// Função para validar campo específico
function validarCampo(campo) {
    const id = campo.id;
    const valor = campo.value.trim();
    
    // Remover feedback anterior
    const formGroup = campo.closest('.mb-4');
    if (formGroup) {
        const feedbackAntigo = formGroup.querySelector('.invalid-feedback');
        if (feedbackAntigo) {
            feedbackAntigo.remove();
        }
    }
    
    let mensagemErro = '';
    
    // Validações específicas para cada campo
    if (id === 'cpfPaciente') {
        if (valor === '') {
            mensagemErro = 'Por favor, informe seu CPF.';
        } else if (!validarCPF(valor)) {
            mensagemErro = 'CPF inválido. Verifique os números digitados.';
        }
    } else if (id === 'crmMedico') {
        if (valor === '') {
            mensagemErro = 'Por favor, informe seu CRM.';
        } else if (valor.length < 4) {
            mensagemErro = 'CRM inválido. Verifique o formato correto.';
        }
    } else if (id === 'senhaPaciente' || id === 'senhaMedico') {
        if (valor === '') {
            mensagemErro = 'Por favor, informe sua senha.';
        } else if (valor.length < 6) {
            mensagemErro = 'A senha deve ter pelo menos 6 caracteres.';
        }
    }
    
    // Mostrar feedback se houver erro
    if (mensagemErro) {
        campo.classList.add('is-invalid');
        
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'invalid-feedback';
        feedbackDiv.textContent = mensagemErro;
        
        if (formGroup) {
            formGroup.appendChild(feedbackDiv);
        }
        
        return false;
    } else {
        campo.classList.remove('is-invalid');
        campo.classList.add('is-valid');
        return true;
    }
}

// Ajustar altura do conteúdo principal para telas menores
function ajustarAlturaPrincipal() {
    const navbar = document.querySelector('.navbar');
    const rodape = document.querySelector('.rodape');
    const secaoLogin = document.querySelector('.secao-login');
    
    if (navbar && rodape && secaoLogin) {
        const alturaNavbar = navbar.offsetHeight;
        const alturaRodape = rodape.offsetHeight;
        const alturaJanela = window.innerHeight;
        
        const minHeight = alturaJanela - alturaNavbar - alturaRodape;
        secaoLogin.style.minHeight = `${minHeight}px`;
    }
}

// Ajustar altura inicial e ao redimensionar
ajustarAlturaPrincipal();
window.addEventListener('resize', ajustarAlturaPrincipal);

// Detecção de preenchimento automático para melhorar UX
setTimeout(function() {
    const camposAutoPreenchidos = document.querySelectorAll('input:-webkit-autofill');
    camposAutoPreenchidos.forEach(function(campo) {
        campo.classList.add('is-valid');
        const inputGroup = campo.closest('.input-group');
        if (inputGroup) {
            const icon = inputGroup.querySelector('.input-group-text i');
            if (icon) {
                icon.style.color = 'var(--cor-primaria)';
            }
        }
    });
}, 100);

// Animação suave ao carregar a página
document.body.classList.add('carregado');

// Feedback visual ao clicar nos botões
const botoes = document.querySelectorAll('button, .btn');
botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        this.classList.add('btn-clicado');
        setTimeout(() => {
            this.classList.remove('btn-clicado');
        }, 200);
    });
});

// Sugestões contextuais para o assistente virtual
const sugestoes = [
    'Como recuperar minha senha?',
    'Como agendar uma consulta?',
    'Onde acessar meus exames?',
    'Quais convênios são aceitos?',
    'Como funciona a telemedicina?'
];

// Adicionar sugestões após a primeira mensagem do assistente
function adicionarSugestoes() {
    const containerSugestoes = document.createElement('div');
    containerSugestoes.className = 'sugestoes-assistente';
    
    sugestoes.forEach(function(sugestao) {
        const botaoSugestao = document.createElement('button');
        botaoSugestao.className = 'btn-sugestao';
        botaoSugestao.textContent = sugestao;
        
        botaoSugestao.addEventListener('click', function() {
            mensagemUsuario.value = sugestao;
            enviarMensagemAssistente();
        });
        
        containerSugestoes.appendChild(botaoSugestao);
    });
    
    // Adicionar após a primeira mensagem
    const primeiraMensagem = mensagensAssistente.querySelector('.mensagem-assistente');
    if (primeiraMensagem) {
        primeiraMensagem.appendChild(containerSugestoes);
    }
}

// Adicionar sugestões após um breve delay
setTimeout(adicionarSugestoes, 1000);


let tempoInatividade;
const botaoAssistente = document.getElementById('botaoAssistente');
const assistenteIA = document.getElementById('assistenteIA');

function reiniciarTempoInatividade() {
    clearTimeout(tempoInatividade);
    tempoInatividade = setTimeout(mostrarDicaAssistente, 30000);
    console.log("Atividade detectada. Timer reiniciado.");
}

function mostrarDicaAssistente() {
    if (!assistenteIA.classList.contains('ativo') && 
        (document.getElementById('cpfPaciente') || document.getElementById('crmMedico'))) {

        botaoAssistente.classList.add('pulso');

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip-assistente';
        tooltip.textContent = 'Precisa de ajuda com o login? Estou aqui para ajudar!';
        botaoAssistente.appendChild(tooltip);

        setTimeout(() => {
            if (tooltip.parentNode === botaoAssistente) {
                botaoAssistente.removeChild(tooltip);
            }
            botaoAssistente.classList.remove('pulso');
        }, 5000);
    }
}

document.addEventListener('mousemove', reiniciarTempoInatividade);
document.addEventListener('keypress', reiniciarTempoInatividade);

reiniciarTempoInatividade();
