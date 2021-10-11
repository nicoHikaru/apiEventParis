let app = {
    // ----------------------------------------------------------------------------------------------------------------
    // MANIPULATION DU DOM DE L'APPLICATION
    // ----------------------------------------------------------------------------------------------------------------
    dom: {
        getFormFieldValues: function (...formFields) {
            let values = {};

            // Récupère la valeur du champ de formulaire pointé par l'id spécifié.
            formFields.forEach(field => {
                values[field] = document.getElementById(field).value;
            });

            return values;
        },

        emptyNode: function (node) {
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
        },

        renderTemplateCopies: function (templateSelector, targetSelector, values, copyInitCallBack) {
            // Recherche l'élément cible dans l'arbre DOM.
            let target = document.querySelector(targetSelector);

            // Recherche le template dans l'arbre DOM.
            let template = document.querySelector(templateSelector);

            // Création d'un fragment de DOM vide.
            let fragment = document.createDocumentFragment();

            for (let value of values) {
                // Création d'une copie du template dans l'arbre DOM.
                let copy = document.importNode(template.content, true);

                // Exécution du callback d'initialisation de la copie du template.
                copyInitCallBack(copy, value);

                // Insertion de la copie du template dans le fragment de DOM (mieux pour les performances durant la boucle)
                fragment.appendChild(copy);
            }

            // Fin de boucle : Insertion du fragment dans l'élément cible dans l'arbre DOM.
            this.emptyNode(target);
            target.appendChild(fragment);
        },

        onClick: function (selector, eventHandler) {
            // Installe un gestionnaire d'évènement clic sur l'élément DOM pointé par le sélecteur spécifié.
            document.querySelector(selector).addEventListener('click', eventHandler);
        },
    },


    // ----------------------------------------------------------------------------------------------------------------
    // ARCHITECTURE MVC DE L'APPLICATION
    // ----------------------------------------------------------------------------------------------------------------
    mvc: {
        // Instance de la classe Router de la librairie vanilla-router.js
        router: null,

        dispatchRoute: function (controllerInstance) {
            // Vérifie que le contrôleur est un contrôleur valide
            if (!controllerInstance.hasOwnProperty('url') || !controllerInstance.executeHttpRequest) {
                return console.warn(`Le controller ${controllerInstance.constructor.name} est invalide.`);
            }

            // Exécute une requête HTTP GET pour récupérer la vue, et définir la chaîne de promesses pour traiter la réponse
            fetch(controllerInstance.url)
                .then(response => response.text()) // Renvoie d'une promesse avec le contenu de la réponse HTTP.
                .then(htmlContent => {
                    // La réponse HTTP contient le HTML de la vue à injecter.
                    document.querySelector('main').innerHTML = htmlContent;

                    // Exécution du gestionnaire de la vue.
                    controllerInstance.executeHttpRequest();
                });
        },

        redirectTo: function (url) {
            // Demande au routeur de charger une nouvelle route.
            app.mvc.router.navigateTo(url);
        }
    }
};


// L'application est exportée afin d'être accessible par d'autres modules.
export default app;