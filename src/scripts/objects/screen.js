const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML =
            `
            <div class="info">
                <img src="${user.avatarUrl}" alt="Imagem de perfil do usuário GitHub">
                <div class="data">
                    <h1>${user.name ?? "Não possui nome cadastrado 😢"}</h1>
                    <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
                    <div class="follows">
                        <h2>Seguidores: <span>${user.followers}</span></h2>
                        <h2>Seguindo: <span>${user.following}</span></h2>
                    </div>
                </div>
            </div>
            `
        let eventsList = "";
        user.events.forEach(event => {
            const commits = event.payload.commits;
            if (event.type === "PushEvent" || event.type === "CreateEvent") {
                eventsList += `<li>${event.actor.login}/${event.repo.name}  <span>- ${commits[commits.length -1].message}</span></li>`
            }
        })
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `
                <div class="events">
                    <h2>Eventos</h2>
                    <ul>${eventsList}</ul>
                </div>
                `
        }

        let reposList = "";
        user.repositories.forEach(repo => {
            reposList += `<li><a href="${repo.html_url}" target:"_blank">${repo.name}</a></li>`
        });
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
                <div class="repositories">
                    <ul>${reposList}<ul>
                </div>
                `
        }

    },
    renderNotFound(user) {
        this.userProfile.innerHTML = "<p>Nome de usuário não encontrado 🤔🔎</p>";
        return
    }
}

export { screen }