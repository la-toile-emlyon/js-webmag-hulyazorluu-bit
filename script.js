function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      /// EXAM: COMPLÉTEZ LE CODE ICI !
      console.log(data);


      let journal = data.journal;




      // TODO 1: REMPLIR LE HEADER
      let nomJournal = document.getElementById('nom-journal');
      let phraseAccroche = document.getElementById('phrase-accroche');

      nomJournal.textContent = journal.nomJournal;
      phraseAccroche.textcontent = journal.phraseAccroche;






      // TODO 2: REMPLIR LA NAVIGATION

      let themesNav = document.getElementById('themes-nav');
      themesNav.innerHTML += `
      <button class = "nav-theme-btn active">Tous</button>`;

      journal.themes.forEach(theme => {
        let boutonTheme = `
        <button class = "nav-theme-btn">${theme.nom}</button>`;

        themesNav.innerHTML += boutonTheme;

      });






      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL
      let articlePrincipal = journal.articlePrincipal;

      let articlePrincipalHTML = `

      <img id="hero-image" src="${articlePrincipal.image}" alt= "${articlePrincipal.titre}">
      <div class="hero-info">
        <span class="theme-badge">${articlePrincipal.theme}</span>
        <h2 id="hero-titre">${articlePrincipal.titre}</h2>
        <p id="hero-description">${articlePrincipal.description}</p>
        <p class="date">${articlePrincipal.date}</p>
      
      </div>
    `;










      // TODO 4: REMPLIR LA GRILLE D'ARTICLES

      let articlesGrid = document.getElementById('articles-grid');

      journal.articles.forEach((article) => {

        let articleHTML = `
          <div class="article-card">
          <img src="${article.image}" alt="${article.titre}">
          <div class="article-content">
         <span class="theme-badge">${article.theme}</span>
         <h3>${article.titre}</h3>
         <p class="date">${article.date}</p>

        </div>

        </div>
      `;

        articlesGrid.innerHTML += articleHTML;
      });






      // TODO 5: REMPLIR LES THEMES
      let themesList = document.getElementById('themes-list');

      journal.themes.forEach(theme => {

        let themeHTML = `
        <div class ="theme-item">
        <h3>${theme.nom}</h3>
        <p>${theme.description}</p>
      </div>
    `;

        themesList.innerHTML += themeHTML;
      });





      // TODO 6: REMPLIR LES AUTEURS
      let authorsList = document.getElementById('authors-list');

      journal.auteurs.forEach(auteur => {

        let auteurHTML = `
        <div class="author-card">
        <img class="author-image" src="${auteur.photo}" alt="${auteur.prenom}">
        <h3>${auteur.prenom}</h3>
        <p class="author-role">${auteur.typeExperience}</p>
        <p class="author-bior">${auteur.presentation}</p>

      </div>
      `;

        authorsList.innerHTML += auteurHTML;
      });






      // TODO 7: REMPLIR LE CALL TO ACTION
      let calltoAction = document.getElementById('call-to-action');

      let ctaHTML = `
        <p>${journal.texteAppelAction}</p>
        <button class="cta-button">S'abonner</button>
      `;

      calltoAction.innerHTML = ctaHTML;


      /// FIN DU CODE







      // BONUS 1 : Alert sur le bouton CTA

      `alert()`

      // BONUS 2 : Filtrage par thème


      // BONUS 3 : Tri par popularité
      `popularite`

    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();
