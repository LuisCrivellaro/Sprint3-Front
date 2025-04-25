document.addEventListener('DOMContentLoaded', function() {
    // Inicialização do sistema
    console.log('Sistema de Gerenciamento de Documentos Médicos - Hospital Sabará');
    inicializarEventos();
    carregarConfiguracoesUsuario();
    
    // Exibir notificação de boas-vindas
    mostrarNotificacao('Bem-vindo ao Sistema de Documentos', 'Você tem 3 rascunhos salvos e 2 documentos pendentes de assinatura.', 'info');
});

// ===== NAVEGAÇÃO E INTERFACE =====


function inicializarEventos() {
    // Eventos dos links do menu lateral
    document.getElementById('novoDocLink').addEventListener('click', function(e) {
        e.preventDefault();
        alternarSecao('areaNovoDoc');
        ativarItemMenu(this);
    });
    
    document.getElementById('modelosLink').addEventListener('click', function(e) {
        e.preventDefault();
        carregarModelosSalvos();
        ativarItemMenu(this);
    });
    
    document.getElementById('historicoLink').addEventListener('click', function(e) {
        e.preventDefault();
        carregarHistoricoDocumentos();
        ativarItemMenu(this);
    });
    
    document.getElementById('configLink').addEventListener('click', function(e) {
        e.preventDefault();
        carregarConfiguracoes();
        ativarItemMenu(this);
    });
    
    // Eventos de formulários
    document.getElementById('formLaudo').addEventListener('submit', function(e) {
        e.preventDefault();
        salvarDocumento('laudo');
    });
    
    document.getElementById('formReceita').addEventListener('submit', function(e) {
        e.preventDefault();
        salvarDocumento('receita');
    });
    
    document.getElementById('formAtestado').addEventListener('submit', function(e) {
        e.preventDefault();
        salvarDocumento('atestado');
    });
    
    // Eventos de botões de IA
    document.getElementById('gerarAnamnese').addEventListener('click', gerarTextoComIA);
    document.getElementById('gerarExame').addEventListener('click', gerarTextoComIA);
    document.getElementById('gerarDiagnostico').addEventListener('click', gerarTextoComIA);
    document.getElementById('gerarConduta').addEventListener('click', gerarTextoComIA);
    document.getElementById('gerarRecomendacoes').addEventListener('click', gerarTextoComIA);
    document.getElementById('gerarMotivoAtestado').addEventListener('click', gerarTextoComIA);
    document.getElementById('atualizarIA').addEventListener('click', atualizarSugestoesIA);
    document.getElementById('sugerirMedicamentosIA').addEventListener('click', sugerirMedicamentos);
    
    // Eventos de importação e anexos
    document.getElementById('importarExames').addEventListener('click', importarExames);
    document.getElementById('anexarImagens').addEventListener('click', anexarImagens);
    document.getElementById('buscarCID').addEventListener('click', buscarCodigoCID);
    
    // Evento para adicionar medicamento na receita
    document.getElementById('addMedicamento').addEventListener('click', adicionarMedicamento);
    
    // Buscar paciente
    document.getElementById('buscarPaciente').addEventListener('click', function() {
        buscarPaciente(document.getElementById('pacienteLaudo').value);
    });
    
    // Eventos para campos de médico (auto-preenchimento do CRM)
    const medicoSelects = document.querySelectorAll('#medicoLaudo, #medicoReceita, #medicoAtestado');
    medicoSelects.forEach(select => {
        select.addEventListener('change', function() {
            autoPreencherCRM(this.value);
        });
    });
    
    // Tooltip para campos com ajuda
    inicializarTooltips();
    
    // Campo de busca de especialidade
    document.getElementById('especialidadeLaudo').addEventListener('change', atualizarMedicosPorEspecialidade);
}

function ativarItemMenu(elemento) {
    // Remove a classe 'active' de todos os itens do menu
    document.querySelectorAll('.list-group-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Adiciona a classe 'active' ao elemento clicado
    elemento.classList.add('active');
}

function alternarSecao(idSecao) {
    // Implementação para alternar entre as diferentes seções/áreas
    console.log(`Alternando para a seção: ${idSecao}`);
    // Aqui implementaríamos a lógica para mostrar/esconder seções
}

function inicializarTooltips() {
    const tooltips = document.querySelectorAll('.tooltip-medical');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', mostrarTooltip);
        tooltip.addEventListener('mouseleave', esconderTooltip);
    });
}

function mostrarTooltip() {
    // Lógica para mostrar tooltip
    const tooltipText = this.querySelector('.tooltip-text');
    if (tooltipText) {
        tooltipText.style.visibility = 'visible';
        tooltipText.style.opacity = '1';
    }
}

function esconderTooltip() {
    // Lógica para esconder tooltip
    const tooltipText = this.querySelector('.tooltip-text');
    if (tooltipText) {
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
    }
}

// ===== GERENCIAMENTO DE DOCUMENTOS =====

function salvarDocumento(tipo) {
    // Iniciar animação de carregamento
    mostrarCarregando(true);
    
    setTimeout(() => {
        // Simulação de salvamento
        console.log(`Salvando documento do tipo: ${tipo}`);
        
        // Aqui seria a implementação real de salvamento do documento
        const dadosDocumento = coletarDadosFormulario(tipo);
        
        // Simular validação e processamento
        if (validarDadosDocumento(dadosDocumento)) {
            // Salvar no "banco de dados" (simulado)
            const idDocumento = gerarIdUnico();
            salvarNoBancoDeDados(idDocumento, dadosDocumento);
            
            // Finalizar carregamento e mostrar sucesso
            mostrarCarregando(false);
            mostrarNotificacao('Documento Salvo', `O ${tipo} foi salvo com sucesso e está pronto para assinatura.`, 'sucesso');
            
            // Limpar formulário ou redirecionar
            limparFormulario(tipo);
        } else {
            // Tratar erro de validação
            mostrarCarregando(false);
            mostrarNotificacao('Erro ao Salvar', 'Por favor, verifique os campos obrigatórios e tente novamente.', 'erro');
        }
    }, 1500); // Simulação de processamento
}

function coletarDadosFormulario(tipo) {
    // Implementação para coletar os dados do formulário específico
    let dados = {
        tipo: tipo,
        dataRegistro: new Date().toISOString(),
        status: 'pendente'
    };
    
    // Coleta dados específicos de cada tipo de documento
    if (tipo === 'laudo') {
        dados.paciente = document.getElementById('pacienteLaudo').value;
        dados.especialidade = document.getElementById('especialidadeLaudo').value;
        dados.medico = document.getElementById('medicoLaudo').value;
        dados.anamnese = document.getElementById('anamneseLaudo').value;
        dados.exameFisico = document.getElementById('exameFisico').value;
        dados.diagnostico = document.getElementById('impressaoDiagnostico').value;
        dados.conduta = document.getElementById('condutaLaudo').value;
    } else if (tipo === 'receita') {
        dados.paciente = document.getElementById('pacienteReceita').value;
        dados.medico = document.getElementById('medicoReceita').value;
        dados.crm = document.getElementById('crmReceita').value;
        // Coletaria dados dos medicamentos e recomendações...
    } else if (tipo === 'atestado') {
        dados.paciente = document.getElementById('pacienteAtestado').value;
        dados.documento = document.getElementById('documentoAtestado').value;
        dados.afastamento = document.getElementById('diasAfastamento').value;
        dados.cid = document.getElementById('cid').value;
        dados.motivo = document.getElementById('motivoAtestado').value;
    }
    
    return dados;
}

function validarDadosDocumento(dados) {
    // Simulação de validação básica
    if (dados.tipo === 'laudo') {
        return dados.paciente && dados.medico && dados.anamnese;
    } else if (dados.tipo === 'receita') {
        return dados.paciente && dados.medico;
    } else if (dados.tipo === 'atestado') {
        return dados.paciente && dados.afastamento >= 0;
    }
    return false;
}

function salvarNoBancoDeDados(id, dados) {
    // Simulação de salvamento em banco de dados
    console.log(`Documento ${id} salvo no banco de dados`);
    console.log(dados);
    
    // Em uma implementação real, aqui seria feita uma chamada AJAX para o backend
    // Mas para este exemplo, vamos salvar no localStorage
    let documentos = JSON.parse(localStorage.getItem('documentos_hospital') || '[]');
    dados.id = id;
    documentos.push(dados);
    localStorage.setItem('documentos_hospital', JSON.stringify(documentos));
}

function limparFormulario(tipo) {
    // Implementação para limpar ou resetar o formulário
    if (tipo === 'laudo') {
        document.getElementById('formLaudo').reset();
    } else if (tipo === 'receita') {
        document.getElementById('formReceita').reset();
    } else if (tipo === 'atestado') {
        document.getElementById('formAtestado').reset();
    }
}

function gerarIdUnico() {
    // Gera um ID único para documentos
    return 'doc_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
}

// ===== FUNÇÕES DE INTELIGÊNCIA ARTIFICIAL =====

function gerarTextoComIA(e) {
    e.preventDefault();
    
    // Identificar qual elemento chamou a função
    const botaoClicado = e.currentTarget;
    const targetId = botaoClicado.id;
    
    // Determinar qual campo de texto será preenchido
    let campoAlvo;
    let tipoTexto;
    
    switch (targetId) {
        case 'gerarAnamnese':
            campoAlvo = document.getElementById('anamneseLaudo');
            tipoTexto = 'anamnese';
            break;
        case 'gerarExame':
            campoAlvo = document.getElementById('exameFisico');
            tipoTexto = 'exame físico';
            break;
        case 'gerarDiagnostico':
            campoAlvo = document.getElementById('impressaoDiagnostico');
            tipoTexto = 'impressão diagnóstica';
            break;
        case 'gerarConduta':
            campoAlvo = document.getElementById('condutaLaudo');
            tipoTexto = 'conduta';
            break;
        case 'gerarRecomendacoes':
            campoAlvo = document.getElementById('recomendacoesReceita');
            tipoTexto = 'recomendações';
            break;
        case 'gerarMotivoAtestado':
            campoAlvo = document.getElementById('motivoAtestado');
            tipoTexto = 'motivo do atestado';
            break;
        default:
            console.error('Campo não identificado');
            return;
    }
    
    // Indicar carregamento
    botaoClicado.classList.add('loading');
    botaoClicado.disabled = true;
    
    // Coletar informações do contexto para gerar conteúdo relevante
    const contexto = coletarContextoDocumento();
    
    // Simular chamada à API de IA (com delay para simular processamento)
    setTimeout(() => {
        // Gerar texto baseado no tipo solicitado
        const textoGerado = gerarTextoBaseadoNoContexto(tipoTexto, contexto);
        
        // Preencher o campo com o texto gerado
        campoAlvo.value = textoGerado;
        
        // Destacar brevemente o campo atualizado
        campoAlvo.classList.add('bg-highlight');
        setTimeout(() => campoAlvo.classList.remove('bg-highlight'), 1500);
        
        // Finalizar carregamento
        botaoClicado.classList.remove('loading');
        botaoClicado.disabled = false;
        
        // Mostrar notificação
        mostrarNotificacao('Texto Gerado', `${tipoTexto.charAt(0).toUpperCase() + tipoTexto.slice(1)} gerado com sucesso.`, 'sucesso');
        
        // Atualizar sugestões da IA
        atualizarSugestoesIA();
    }, 2000);
}

function coletarContextoDocumento() {
    // Coleta informações para contextualizar a geração de texto
    const contexto = {
        paciente: document.getElementById('pacienteLaudo')?.value || document.getElementById('pacienteReceita')?.value || document.getElementById('pacienteAtestado')?.value || '',
        especialidade: document.getElementById('especialidadeLaudo')?.value || '',
        motivoConsulta: document.getElementById('motivoConsulta')?.value || '',
        resultadosExames: document.getElementById('resultadosExames')?.value || '',
        // Outros campos relevantes...
    };
    
    return contexto;
}

function gerarTextoBaseadoNoContexto(tipo, contexto) {
    // Biblioteca de templates para diferentes tipos de texto
    const templates = {
        'anamnese': [
            `Paciente ${contexto.paciente || '[nome]'}, comparece à consulta de ${contexto.especialidade || 'especialidade'} relatando ${contexto.motivoConsulta || 'queixas'}. Nega alergias medicamentosas, tabagismo ou etilismo. Sem histórico de internações prévias. Faz uso contínuo de medicações para controle de pressão arterial. Histórico familiar positivo para diabetes e hipertensão.`,
            `${contexto.paciente || 'Paciente'} vem à consulta com queixa principal de ${contexto.motivoConsulta || 'sintomas'} há aproximadamente 7 dias. Relata piora progressiva, com intensificação dos sintomas nos últimos 2 dias. Nega febre, náuseas ou vômitos. Último episódio semelhante há aproximadamente 6 meses, com resolução espontânea.`,
            `Paciente ${contexto.paciente || '[nome]'} apresenta-se à consulta de ${contexto.especialidade || 'especialidade'} referindo ${contexto.motivoConsulta || 'sintomas'} de início súbito há 3 dias. Relata piora ao final do dia e melhora com repouso. Histórico prévio de condição semelhante há 2 anos, tratada com medicação sintomática com boa resposta.`
        ],
        
        'exame físico': [
            `Paciente em bom estado geral, lúcido, orientado no tempo e espaço, hidratado, corado, acianótico, anictérico, afebril. Sinais vitais: PA 120/80 mmHg, FC 76 bpm, FR 16 irpm, Sat O2 98%, Temp 36.5°C. Ausculta cardíaca: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros. Ausculta pulmonar: murmúrio vesicular presente bilateralmente sem ruídos adventícios.`,
            `Paciente apresenta-se em regular estado geral, consciente, orientado, hidratado. Sinais vitais estáveis: PA 130/85 mmHg, FC 82 bpm, Tax 36.7°C. Exame cardiopulmonar: ritmo regular, sem sopros, murmúrios vesiculares presentes sem ruídos adventícios. Abdome flácido, indolor à palpação, sem visceromegalias. Extremidades com pulsos palpáveis, simétricos, sem edemas.`,
            `Ao exame físico: paciente alerta, orientado, cooperativo. Sinais vitais: PA 125/75 mmHg, FC 68 bpm, FR 14 irpm. Cabeça e pescoço sem alterações. Ausculta cardíaca com ritmo regular, sem sopros. Ausculta pulmonar com murmúrio vesicular presente sem ruídos adventícios. Abdome plano, indolor, sem sinais de irritação peritoneal.`
        ],
        
        'impressão diagnóstica': [
            `Com base nos dados clínicos e exames realizados, a impressão diagnóstica é de ${contexto.especialidade === 'cardiologia' ? 'Hipertensão Arterial Sistêmica Estágio 1' : contexto.especialidade === 'pediatria' ? 'Infecção de Vias Aéreas Superiores' : 'condição compatível com o quadro apresentado'}. ${contexto.resultadosExames ? 'Os exames complementares corroboram com esta hipótese diagnóstica.' : 'Aguardar resultados de exames complementares para confirmação.'}`,
            `Diante do quadro clínico apresentado, associado aos achados do exame físico, a hipótese diagnóstica é de ${contexto.especialidade === 'dermatologia' ? 'Dermatite de Contato' : contexto.especialidade === 'neurologia' ? 'Cefaleia Tensional' : 'quadro compatível com a sintomatologia relatada'}. É importante destacar que ${contexto.resultadosExames ? 'os exames laboratoriais mostram alterações compatíveis com o diagnóstico' : 'exames complementares podem ser necessários para confirmação diagnóstica'}.`,
            `O conjunto de sinais e sintomas, somado aos achados do exame físico, sugere quadro de ${contexto.motivoConsulta?.includes('dor') ? 'Síndrome Dolorosa de provável origem muscular' : contexto.motivoConsulta?.includes('febre') ? 'Quadro Viral em evolução' : 'condição clínica relacionada à queixa principal'}. ${contexto.resultadosExames ? 'Os resultados laboratoriais complementam a avaliação e confirmam a suspeita inicial.' : 'Recomenda-se investigação complementar para elucidação diagnóstica definitiva.'}`
        ],
        
        'conduta': [
            `1. Prescrição medicamentosa conforme receituário anexo.\n2. Orientações quanto a hábitos de vida saudáveis: alimentação balanceada, atividade física regular, controle do estresse.\n3. Solicitação de exames complementares para melhor avaliação.\n4. Retorno em 30 dias com resultados de exames para reavaliação.`,
            `1. Tratamento medicamentoso sintomático conforme prescrito.\n2. Repouso relativo por 3 dias.\n3. Hidratação oral adequada (mínimo 2 litros de água por dia).\n4. Evitar esforços físicos intensos durante o período de recuperação.\n5. Retorno em 15 dias para reavaliação clínica ou antes se houver piora dos sintomas.`,
            `1. Iniciar terapia medicamentosa conforme receituário.\n2. Orientações nutricionais específicas entregues em folheto anexo.\n3. Encaminhamento para acompanhamento multidisciplinar.\n4. Solicitação de exames de controle.\n5. Retorno em 60 dias para avaliação da resposta terapêutica.`
        ],
        
        'recomendações': [
            `1. Tomar os medicamentos nos horários indicados, mesmo com melhora dos sintomas.\n2. Manter repouso adequado.\n3. Ingerir líquidos em abundância (2-3 litros por dia).\n4. Evitar alimentos condimentados, café e bebidas alcoólicas durante o tratamento.\n5. Retornar ao médico em caso de sintomas como febre acima de 38°C, dor intensa ou qualquer reação adversa aos medicamentos.`,
            `1. Seguir rigorosamente o esquema terapêutico prescrito.\n2. Evitar automedicação.\n3. Manter dieta leve nas próximas 48 horas.\n4. Realizar compressas mornas no local afetado 3 vezes ao dia.\n5. Entrar em contato com o consultório caso não haja melhora em 3 dias.`,
            `1. Administrar os medicamentos conforme orientado, respeitando doses e horários.\n2. Monitorar possíveis efeitos colaterais.\n3. Adotar medidas de higiene adequadas.\n4. Evitar exposição a fatores desencadeantes.\n5. Agendar retorno conforme indicado para reavaliação.`
        ],
        
        'motivo do atestado': [
            `Atesto para os devidos fins que o(a) paciente necessita de afastamento de suas atividades laborais/escolares por um período de ${document.getElementById('diasAfastamento')?.value || '#'} dias, a partir da presente data, devido a quadro clínico que exige repouso e tratamento médico.`,
            `Atesto para fins de justificativa que o(a) paciente acima identificado(a) foi atendido(a) nesta data e deverá permanecer afastado(a) de suas atividades por ${document.getElementById('diasAfastamento')?.value || '#'} dias para tratamento de saúde.`,
            `Atesto para os devidos fins que o(a) paciente supracitado(a) foi submetido(a) a exame médico nesta data, sendo recomendado afastamento de suas atividades habituais por ${document.getElementById('diasAfastamento')?.value || '#'} dias para adequado tratamento e recuperação.`
        ]
    };
    
    // Selecionar aleatoriamente um template do tipo solicitado
    const opcoesTemplate = templates[tipo] || ['Texto não disponível para este tipo'];
    const indiceAleatorio = Math.floor(Math.random() * opcoesTemplate.length);
    
    return opcoesTemplate[indiceAleatorio];
}

function atualizarSugestoesIA() {
    // Simula análise de IA nos dados do documento atual
    
    const botaoAtualizarIA = document.getElementById('atualizarIA');
    botaoAtualizarIA.disabled = true;
    botaoAtualizarIA.textContent = 'Analisando...';
    
    setTimeout(() => {
        // Aqui seria uma chamada real à API de IA
        const areaIA = document.querySelector('.sugestao-ia');
        
        // Analisar conteúdo dos campos para personalizar sugestões
        const contexto = coletarContextoDocumento();
        const especialidade = document.getElementById('especialidadeLaudo')?.value || '';
        const diagnostico = document.getElementById('impressaoDiagnostico')?.value || '';
        
        // Gerar HTML com sugestões personalizadas
        let htmlSugestoes = `
            <h6>Análise de Consistência</h6>
            <ul class="mb-3">
                <li class="${contexto.paciente ? 'item-ok' : 'item-atencao'}">
                    <i class="fas fa-${contexto.paciente ? 'check' : 'exclamation'}-circle me-2"></i>
                    ${contexto.paciente ? 'Dados do paciente completos' : 'Dados do paciente incompletos'}
                </li>
                <li class="${contexto.resultadosExames ? 'item-ok' : 'item-atencao'}">
                    <i class="fas fa-${contexto.resultadosExames ? 'check' : 'exclamation'}-circle me-2"></i>
                    ${contexto.resultadosExames ? 'Exames complementares registrados' : 'Exames complementares incompletos'}
                </li>
                <li class="${diagnostico ? 'item-ok' : 'item-atencao'}">
                    <i class="fas fa-${diagnostico ? 'check' : 'exclamation'}-circle me-2"></i>
                    ${diagnostico ? 'Diagnóstico coerente com os sintomas' : 'Diagnóstico não registrado'}
                </li>
            </ul>
        `;
        
        // Adicionar sugestões baseadas na especialidade
        htmlSugestoes += `<h6>Sugestões</h6>
            <p>Com base nos dados informados, considere:</p>
            <ul class="mb-0">`;
        
        if (especialidade === 'cardiologia') {
            htmlSugestoes += `
                <li>Verificar perfil lipídico completo</li>
                <li>Considerar avaliação de risco cardiovascular</li>
                <li>Incluir orientações sobre controle da pressão arterial</li>
            `;
        } else if (especialidade === 'pediatria') {
            htmlSugestoes += `
                <li>Incluir orientações sobre hidratação e alimentação</li>
                <li>Verificar calendário vacinal</li>
                <li>Agendar retorno em 7 dias para reavaliação</li>
            `;
        } else if (especialidade === 'dermatologia') {
            htmlSugestoes += `
                <li>Incluir cuidados específicos com a pele na conduta</li>
                <li>Considerar teste de contato/alergia</li>
                <li>Documentar com fotografias a evolução das lesões</li>
            `;
        } else {
            htmlSugestoes += `
                <li>Solicitar exames complementares adicionais</li>
                <li>Incluir recomendações específicas na conduta</li>
                <li>Agendar retorno para reavaliação em 15 dias</li>
            `;
        }
        
        htmlSugestoes += `</ul>`;
        
        // Atualizar conteúdo
        areaIA.innerHTML = htmlSugestoes;
        
        // Restaurar botão
        botaoAtualizarIA.disabled = false;
        botaoAtualizarIA.textContent = 'Atualizar';
        
        // Animar brevemente para chamar atenção
        areaIA.classList.add('animate-pulse');
        setTimeout(() => areaIA.classList.remove('animate-pulse'), 1000);
    }, 1500);
}

function sugerirMedicamentos() {
    // Sugere medicamentos com base no contexto clínico
    const botaoSugerir = document.getElementById('sugerirMedicamentosIA');
    botaoSugerir.classList.add('loading');
    botaoSugerir.disabled = true;
    
    // Coletar contexto para sugestões relevantes
    const especialidade = document.getElementById('especialidadeLaudo')?.value || '';
    const motivoConsulta = document.getElementById('motivoConsulta')?.value || '';
    
    setTimeout(() => {
        // Adicionar medicamentos sugeridos ao formulário
        const listaMedicamentos = document.getElementById('listaMedicamentos');
        
        // Limpar lista atual
        listaMedicamentos.innerHTML = '';
        
        // Gerar medicamentos baseados no contexto
        let medicamentos = gerarSugestoesMedicamentos(especialidade, motivoConsulta);
        
        // Adicionar cada medicamento como um card
        medicamentos.forEach(med => {
            const cardMedicamento = criarCardMedicamento(med);
            listaMedicamentos.appendChild(cardMedicamento);
        });
        
        // Restaurar botão
        botaoSugerir.classList.remove('loading');
        botaoSugerir.disabled = false;
        
        // Notificar usuário
        mostrarNotificacao('Medicamentos Sugeridos', 'Sugestões baseadas no quadro clínico foram adicionadas.', 'sucesso');
    }, 2000);
}

function gerarSugestoesMedicamentos(especialidade, motivo) {
    // Biblioteca de medicamentos por especialidade/condição
    let medicamentos = [];
    
    // Exemplo simplificado - em um sistema real seria uma base de dados mais robusta
    if (especialidade === 'cardiologia' || motivo.includes('pressão') || motivo.includes('cardio')) {
        medicamentos.push({
            nome: 'Losartana Potássica',
            dosagem: '50mg',
            apresentacao: 'Comprimido',
            posologia: '1 comprimido ao dia, preferencialmente pela manhã',
            quantidade: '30 comprimidos',
            observacoes: 'Monitorar pressão arterial regularmente.'
        });
        medicamentos.push({
            nome: 'Atenolol',
            dosagem: '25mg',
            apresentacao: 'Comprimido',
            posologia: '1 comprimido ao dia',
            quantidade: '30 comprimidos',
            observacoes: 'Tomar em jejum, 30 minutos antes do café da manhã.'
        });
    } else if (especialidade === 'pediatria' || motivo.includes('febre') || motivo.includes('dor')) {
        medicamentos.push({
            nome: 'Paracetamol',
            dosagem: '200mg/mL',
            apresentacao: 'Solução Oral',
            posologia: '1 gota/kg de peso a cada 6 horas se necessário',
            quantidade: '1 frasco',
            observacoes: 'Não exceder 5 doses em 24 horas.'
        });
        medicamentos.push({
            nome: 'Ibuprofeno',
            dosagem: '100mg/mL',
            apresentacao: 'Solução Oral',
            posologia: '1 gota/kg de peso a cada 8 horas se necessário',
            quantidade: '1 frasco',
            observacoes: 'Administrar após as refeições.'
        });
    } else if (especialidade === 'dermatologia' || motivo.includes('pele') || motivo.includes('coceira')) {
        medicamentos.push({
            nome: 'Loratadina',
            dosagem: '10mg',
            apresentacao: 'Comprimido',
            posologia: '1 comprimido ao dia',
            quantidade: '10 comprimidos',
            observacoes: 'Pode causar sonolência.'
        });
        medicamentos.push({
            nome: 'Hidrocortisona',
            dosagem: '10mg/g',
            apresentacao: 'Creme',
            posologia: 'Aplicar uma fina camada nas áreas afetadas 2 vezes ao dia',
            quantidade: '1 bisnaga',
            observacoes: 'Não usar por mais de 7 dias consecutivos sem avaliação médica.'
        });
    } else {
        // Medicamentos genéricos para outros casos
        medicamentos.push({
            nome: 'Dipirona Sódica',
            dosagem: '500mg',
            apresentacao: 'Comprimido',
            posologia: '1 comprimido a cada 6 horas se necessário',
            quantidade: '20 comprimidos',
            observacoes: 'Não usar em caso de alergia conhecida.'
        });
    }
    
    return medicamentos;
}

function criarCardMedicamento(medicamento) {
    // Cria elemento de UI para um medicamento na receita
    const divCard = document.createElement('div');
    divCard.className = 'card mb-3';
    
    divCard.innerHTML = `
        <div class="card-body">
            <div class="mb-3 row">
                <div class="col-md-6">
                    <label class="form-label">Nome do Medicamento</label>
                    <input type="text" class="form-control" value="${medicamento.nome}" placeholder="Ex: Amoxicilina">
                </div>
                <div class="col-md-3">
                    <label class="form-label">Dosagem</label>
                    <input type="text" class="form-control" value="${medicamento.dosagem}" placeholder="Ex: 500mg">
                </div>
                <div class="col-md-3">
                    <label class="form-label">Apresentação</label>
                    <select class="form-select">
                        <option ${medicamento.apresentacao === 'Comprimido' ? 'selected' : ''}>Comprimido</option>
                        <option ${medicamento.apresentacao === 'Cápsula' ? 'selected' : ''}>Cápsula</option>
                        <option ${medicamento.apresentacao === 'Solução Oral' ? 'selected' : ''}>Solução Oral</option>
                        <option ${medicamento.apresentacao === 'Xarope' ? 'selected' : ''}>Xarope</option>
                        <option ${medicamento.apresentacao === 'Injetável' ? 'selected' : ''}>Injetável</option>
                        <option ${medicamento.apresentacao === 'Creme' ? 'selected' : ''}>Creme</option>
                    </select>
                </div>
            </div>
            <div class="mb-3 row">
                <div class="col-md-9">
                    <label class="form-label">Posologia</label>
                    <input type="text" class="form-control" value="${medicamento.posologia}" placeholder="Ex: 1 comprimido a cada 8 horas por 7 dias">
                </div>
                <div class="col-md-3">
                    <label class="form-label">Quantidade</label>
                    <input type="text" class="form-control" value="${medicamento.quantidade}" placeholder="Ex: 21 comp">
                </div>
            </div>
            <div class="mb-0">
                <label class="form-label">Observações</label>
                <textarea class="form-control" rows="2" placeholder="Ex: Tomar após as refeições">${medicamento.observacoes}</textarea>
            </div>
            <div class="text-end mt-2">
                <button type="button" class="btn btn-sm btn-outline-danger remover-medicamento">
                    <i class="fas fa-trash me-1"></i>Remover
                </button>
            </div>
        </div>
    `;
    
    // Adicionar evento para remover medicamento
    divCard.querySelector('.remover-medicamento').addEventListener('click', function() {
        divCard.remove();
    });
    
    return divCard;
}

function adicionarMedicamento() {
    // Adiciona um novo medicamento em branco à lista
    const listaMedicamentos = document.getElementById('listaMedicamentos');
    
    const medicamentoVazio = {
        nome: '',
        dosagem: '',
        apresentacao: 'Comprimido',
        posologia: '',
        quantidade: '',
        observacoes: ''
    };
    
    const cardMedicamento = criarCardMedicamento(medicamentoVazio);
    listaMedicamentos.appendChild(cardMedicamento);
    
    // Scroll até o novo medicamento
    cardMedicamento.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ===== FUNÇÕES AUXILIARES =====

function buscarPaciente(termoBusca) {
    // Simulação de busca de paciente no banco de dados
    if (!termoBusca) {
        mostrarNotificacao('Atenção', 'Digite um nome para buscar', 'alerta');
        return;
    }
    
    const botaoBuscar = document.getElementById('buscarPaciente');
    botaoBuscar.disabled = true;
    botaoBuscar.textContent = 'Buscando...';
    
    setTimeout(() => {
        // Em um sistema real, aqui seria feita uma requisição AJAX
        // Simulação de resultado
        const pacientes = [
            {id: 1, nome: 'Maria Silva', idade: 45, sexo: 'F', prontuario: '12345'},
            {id: 2, nome: 'João Santos', idade: 38, sexo: 'M', prontuario: '23456'},
            {id: 3, nome: 'Ana Oliveira', idade: 29, sexo: 'F', prontuario: '34567'},
            {id: 4, nome: 'Pedro Costa', idade: 62, sexo: 'M', prontuario: '45678'},
            {id: 5, nome: 'Luiza Mendes', idade: 8, sexo: 'F', prontuario: '56789'}
        ];
        
        // Filtra pacientes que contenham o termo de busca
        const resultados = pacientes.filter(p => 
            p.nome.toLowerCase().includes(termoBusca.toLowerCase())
        );
        
        if (resultados.length > 0) {
            // Se encontrou resultados, preenche os campos
            const paciente = resultados[0]; // Pega o primeiro resultado
            
            // Preenche os campos em todos os formulários
            document.querySelectorAll('#pacienteLaudo, #pacienteReceita, #pacienteAtestado').forEach(campo => {
                campo.value = paciente.nome;
            });
            
            // Poderia preencher mais campos com dados do paciente
            
            mostrarNotificacao('Paciente Encontrado', `Carregando dados de ${paciente.nome}`, 'sucesso');
            
            // Carregar histórico do paciente
            carregarHistoricoPaciente(paciente.id);
        } else {
            mostrarNotificacao('Paciente não Encontrado', 'Nenhum paciente encontrado com este nome', 'alerta');
        }
        
        // Restaura o botão
        botaoBuscar.disabled = false;
        botaoBuscar.textContent = 'Buscar';
    }, 1000);
}

function carregarHistoricoPaciente(idPaciente) {
    // Simula carregamento do histórico do paciente
    console.log(`Carregando histórico do paciente ID: ${idPaciente}`);
    
    // Aqui seria implementada a lógica para carregar o histórico
    // e exibir em alguma área da interface
}

function importarExames() {
    // Simula importação de resultados de exames
    const botaoImportar = document.getElementById('importarExames');
    botaoImportar.disabled = true;
    
    // Simular diálogo de seleção de arquivo
    setTimeout(() => {
        // Em um sistema real, aqui seria um input file ou API de upload
        
        // Simular importação bem-sucedida
        const campoResultados = document.getElementById('resultadosExames');
        
        // Adicionar resultados simulados
        campoResultados.value = `HEMOGRAMA COMPLETO:
- Hemácias: 5.1 milhões/mm³ (Ref: 4.5-6.0)
- Hemoglobina: 14.2 g/dL (Ref: 13.5-18.0)
- Hematócrito: 42% (Ref: 40-54%)
- Leucócitos: 7.800/mm³ (Ref: 4.000-10.000)
- Plaquetas: 250.000/mm³ (Ref: 150.000-450.000)

BIOQUÍMICA:
- Glicemia de jejum: 98 mg/dL (Ref: 70-99)
- Colesterol total: 185 mg/dL (Ref: <200)
- HDL: 45 mg/dL (Ref: >40)
- LDL: 120 mg/dL (Ref: <130)
- Triglicérides: 150 mg/dL (Ref: <150)`;
        
        // Restaurar botão
        botaoImportar.disabled = false;
        
        // Notificar usuário
        mostrarNotificacao('Exames Importados', 'Resultados de exames importados com sucesso', 'sucesso');
        
        // Atualizar sugestões da IA
        atualizarSugestoesIA();
    }, 1500);
}
