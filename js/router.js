async function loadContent(path) {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    let fileName = path.endsWith('/') ? 'index.html' : path.substring(path.lastIndexOf('/') + 1);
    if (fileName === '') fileName = 'index.html';

    try {
        const response = await fetch(fileName);
        if (!response.ok) {
            throw new Error(`Não foi possível carregar o arquivo: ${fileName}`);
        }
        const htmlText = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        const newMain = doc.querySelector('main');
        const newTitle = doc.querySelector('title');

        if (newMain) {
            mainContent.innerHTML = newMain.innerHTML;
        } else {
            mainContent.innerHTML = `
                <section id="error-content" aria-labelledby="error-heading">
                    <h2 id="error-heading">Erro de Conteúdo</h2>
                    <p>Não foi possível encontrar a seção principal (main) no arquivo ${fileName}.</p>
                </section>
            `;
        }

        if (newTitle) {
            document.title = newTitle.textContent;
        }

    } catch (error) {
        console.error('Erro ao carregar conteúdo:', error);
        mainContent.innerHTML = `
            <section id="error-content" aria-labelledby="error-heading">
                <h2 id="error-heading">Página Não Encontrada (404)</h2>
                <p>Ocorreu um erro ao tentar carregar o conteúdo da página: ${fileName}.</p>
                <p>Verifique se o arquivo existe e se o servidor está configurado corretamente.</p>
            </section>
        `;
        document.title = 'Erro 404 - ONG Solidária';
    }
}

export function initializeRouter() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            
            if (href && !href.startsWith('#') && !href.startsWith('http')) {
                event.preventDefault();
                
                const path = href.endsWith('/') ? 'index.html' : href;
                
                window.history.pushState({}, '', path);
                
                loadContent(path);
            }
        });
    });

    window.addEventListener('popstate', () => {
        loadContent(window.location.pathname);
    });

    loadContent(window.location.pathname);
}
