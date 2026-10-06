// Array contendo a lista dos seus projetos anteriores para alimentar o portfólio dinamicamente
const myProjects = [
    {
        title: "Cronômetro Digital",
        description: "Um aplicativo de gerenciamento de tempo focado em loops e manipulação do DOM assíncrona.",
        link: "#" // Insira o link do GitHub Pages aqui
    },
    {
        title: "Lista de Tarefas (To-Do)",
        description: "App completo de produtividade usando LocalStorage para persistência de dados no navegador.",
        link: "#"
    },
    {
        title: "Gerador de Gradientes",
        description: "Ferramenta utilitária para desenvolvedores que gera códigos CSS lineares customizáveis.",
        link: "#"
    },
    {
        title: "Jogo da Forca",
        description: "Jogo interativo com tratamento de arrays de strings e captura de eventos de teclado.",
        link: "#"
    }
];

const projectsGrid = document.getElementById('projects-grid');

// Função para renderizar os cartões na tela
function renderPortfolio() {
    projectsGrid.innerHTML = myProjects.map(project => `
        <div class="project-card">
            <div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
            <a href="${project.link}" target="_blank" class="project-link">Visualizar Projeto &rarr;</a>
        </div>
    `).join('');
}

// Simulação de envio do formulário de contato
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! (Esta é uma simulação de envio profissional)');
    e.target.reset();
});

// Inicializa a renderização
renderPortfolio();
