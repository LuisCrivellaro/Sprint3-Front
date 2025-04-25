// Script para o gerenciamento de laudos do Hospital

document.addEventListener('DOMContentLoaded', function() {
    // Inicialização de tooltips para os botões de ação
    initTooltips();

    // Adiciona evento de clique ao botão "Novo Laudo"
    const novoLaudoBtn = document.querySelector('.btn-primary:not(.nav-link)');
    if (novoLaudoBtn) {
        novoLaudoBtn.addEventListener('click', function() {
            abrirNovoLaudo();
        });
    }

    // Adiciona eventos aos botões de ação nas linhas da tabela
    addTableButtonEvents();

    // Adiciona eventos aos filtros de busca
    setupSearchFilters();

    // Efeito de transição ao scrollar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 10) {
            navbar.classList.add('navbar-scrolled');
            navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        }
    });

    // Evento para mostrar/esconder a barra lateral em dispositivos móveis
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('show-sidebar');
        });
    }
});

// Função para inicializar tooltips nos botões
function initTooltips() {
    // Usando o Bootstrap 5 tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Adiciona tooltips aos botões que não têm o atributo data-bs-toggle
    const actionButtons = document.querySelectorAll('.btn-sm');
    actionButtons.forEach(button => {
        if (button.querySelector('.fa-eye')) {
            button.setAttribute('data-bs-toggle', 'tooltip');
            button.setAttribute('data-bs-placement', 'top');
            button.setAttribute('title', 'Visualizar laudo');
        } else if (button.querySelector('.fa-edit')) {
            button.setAttribute('data-bs-toggle', 'tooltip');
            button.setAttribute('data-bs-placement', 'top');
            button.setAttribute('title', 'Editar laudo');
        } else if (button.querySelector('.fa-trash')) {
            button.setAttribute('data-bs-toggle', 'tooltip');
            button.setAttribute('data-bs-placement', 'top');
            button.setAttribute('title', 'Excluir laudo');
        }
    });

    // Reinicializa os tooltips
    tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Função para adicionar eventos aos botões da tabela
function addTableButtonEvents() {
    // Botões de visualizar
    const viewButtons = document.querySelectorAll('.btn-outline-primary');
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const row = this.closest('tr');
            const paciente = row.querySelector('h6').textContent;
            visualizarLaudo(paciente);
        });
    });

    // Botões de editar
    const editButtons = document.querySelectorAll('.btn-outline-secondary');
    editButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const row = this.closest('tr');
            const paciente = row.querySelector('h6').textContent;
            editarLaudo(paciente);
        });
    });

    // Botões de excluir
    const deleteButtons = document.querySelectorAll('.btn-outline-danger');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const row = this.closest('tr');
            const paciente = row.querySelector('h6').textContent;
            confirmarExclusao(paciente);
        });
    });
}

// Função para configurar os filtros de busca
function setupSearchFilters() {
    const searchInput = document.querySelector('input[type="text"]');
    const typeSelect = document.querySelector('select:nth-of-type(1)');
    const statusSelect = document.querySelector('select:nth-of-type(2)');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filtrarTabela();
        });
    }

    if (typeSelect) {
        typeSelect.addEventListener('change', function() {
            filtrarTabela();
        });
    }

    if (statusSelect) {
        statusSelect.addEventListener('change', function() {
            filtrarTabela();
        });
    }
}

// Função para filtrar a tabela
function filtrarTabela() {
    const searchValue = document.querySelector('input[type="text"]').value.toLowerCase();
    const typeValue = document.querySelector('select:nth-of-type(1)').value;
    const statusValue = document.querySelector('select:nth-of-type(2)').value;

    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const paciente = row.querySelector('h6').textContent.toLowerCase();
        const tipo = row.querySelectorAll('td')[2].textContent;
        const status = row.querySelector('.badge').textContent;

        const matchSearch = paciente.includes(searchValue);
        const matchTipo = typeValue === 'Todos os tipos' || tipo === typeValue;
        const matchStatus = statusValue === 'Status' || status === statusValue;

        if (matchSearch && matchTipo && matchStatus) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Função para abrir modal de novo laudo
function abrirNovoLaudo() {
    // Esta função seria implementada com um modal Bootstrap
    // Em uma implementação real, abriria um modal para criar novo laudo
    alert('Funcionalidade de criar novo laudo será implementada aqui!');
}

// Função para visualizar um laudo
function visualizarLaudo(paciente) {
    // Em uma implementação real, redirecionaria para uma página de detalhes
    alert(`Visualizando laudo do paciente: ${paciente}`);
}

// Função para editar um laudo
function editarLaudo(paciente) {
    // Em uma implementação real, abriria um formulário de edição
    alert(`Editando laudo do paciente: ${paciente}`);
}

// Função para confirmar exclusão de um laudo
function confirmarExclusao(paciente) {
    if (confirm(`Tem certeza que deseja excluir o laudo do paciente ${paciente}?`)) {
        // Em uma implementação real, realizaria uma chamada API para excluir o laudo
        alert(`Laudo do paciente ${paciente} excluído com sucesso!`);
    }
}

// Função para alternar entre modos claro e escuro (a ser implementada)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Em uma implementação completa, salvaria a preferência no localStorage
}

  