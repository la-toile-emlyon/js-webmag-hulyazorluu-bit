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
      phraseAccroche.textContent = journal.phraseAccroche;







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

      document.getElementById('article-principal').innerHTML = articlePrincipalHTML;








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


      //API
      fetch('https://www.colourlovers.com/api/palettes/random?format=json')
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur API");
          }
          return response.json();
        })
        .then((data) => {

          console.log("API reçue :", data);

          let palette = data[0];

          let couleursHTML = '';

          palette.colors.forEach((color) => {
            couleursHTML += `
        <div style="
          width: 50px;
          height: 50px;
          background: #${color};
          display: inline-block;
          margin: 5px;
          border-radius: 8px;
        "></div>
      `;
          });

          calltoAction.innerHTML += `
      <h3>${palette.title}</h3>
      <div>${couleursHTML}</div>
    `;
        })
        .catch((error) => {
          console.error("Erreur API :", error);

          calltoAction.innerHTML += `
      <p>Impossible de charger la palette de couleurs.</p>
    `;
        });


      /// FIN DU CODE







      // BONUS 1 : Alert sur le bouton CTA

      let ctaButton = document.querySelector('.cta-button');
      ctaButton.addEventListener('click', () => {
        alert("Merci pour votre abonnement");
      });






      // BONUS 2 : Filtrage par thème

      let buttons = document.querySelectorAll('.nav-theme-btn');

      buttons.forEach((btn) => {
        btn.addEventListener('click', () => {

          let theme = btn.textContent;

          if (theme === "Tous") {
            afficherArticles(journal.articles);
          } else {
            let articlesFiltres = journal.articles.filter(article =>
              article.theme === theme
            );

            afficherArticles(articlesFiltres);
          }
        });
      });


      function afficherArticles(articles) {

        articlesGrid.innerHTML = '';

        articles.forEach((article) => {

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
      }





      // BONUS 3 : Tri par popularité

      journal.articles.sort((a, b) => b.popularite - a.popularite);


    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();

