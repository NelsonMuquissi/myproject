// Navegação ativa
document.addEventListener('DOMContentLoaded', function() {
    // Ativar link do menu conforme a página atual
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.menu a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('ativo');
        } else {
            link.classList.remove('ativo');
        }
    });

    // Filtro de projetos
    const filterButtons = document.querySelectorAll('.filtro');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Ativar botão
                filterButtons.forEach(btn => btn.classList.remove('ativo'));
                this.classList.add('ativo');
                
                // Filtrar projetos
                const category = this.dataset.categoria;
                const projects = document.querySelectorAll('.projeto-card');
                
                projects.forEach(project => {
                    if (category === 'todos' || project.dataset.categoria === category) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                });
            });
        });
    }

    // Validação do formulário de contato
    const contactForm = document.querySelector('.form-contato');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação simples
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos obrigatórios!');
                return;
            }
            
            // Simular envio
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
            this.reset();
        });
    }
});