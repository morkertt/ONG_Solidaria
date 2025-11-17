export function createProjectCard(project) {
    return `
        <article class="projeto col-12 col-md-6 col-lg-4">
            <h3>${project.title}</h3>
            <figure>
                <img src="${project.image}" alt="${project.altText}">
                <figcaption>${project.caption}</figcaption>
            </figure>
            <p>${project.description}</p>
            <div class="tags">
                <span class="badge badge-primary">${project.category}</span>
                <span class="badge badge-secondary">${project.status}</span>
            </div>
            <a href="#" class="saiba-mais cta-button">Saiba Mais</a>
        </article>
    `;
}

export function createAlert(message, type = 'info') {
    return `
        <div class="alert alert-${type}" role="alert">
            ${message}
        </div>
    `;
}
