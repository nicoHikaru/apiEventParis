import config from '../app/config.js';

class Search
{
    constructor(){
        this.url="views/search.html"
    }
    executeHttpRequest() {
        this.getValue();
        console.log("Hey! Bienvenue sur la page search!");
    }
    
    getValue()
    {
        let url = "?dataset=que-faire-a-paris-&q=paris";
        fetch(config.openDataURL+url)
        .then(response => response.json()).then(data => {
           this.dataApi(data);
            
        });
        
        let submit = document.getElementById('submit');
        submit.addEventListener('click',(e)=> {
             e.preventDefault();
             let title = document.getElementById('title');
             this.apiEventParis(title.value);
        });
        
        let sortDateCroissant = document.getElementById('sortDateCroissant');
        sortDateCroissant.addEventListener('click',(e) => {
           e.preventDefault();
           this.sortApiByDateCroissant();
        });
        
        let sortDateDecroissant = document.getElementById('sortDateDecroissant');
        sortDateDecroissant.addEventListener('click',(e) => {
           e.preventDefault();
           this.sortApiByDateDeCroissant();
        });
        
        let sortTitre = document.getElementById('sortTitre');
        sortTitre.addEventListener('click',(e) => {
            e.preventDefault();
            this.sortApiByTitle();
        })
    }
    apiEventParis(title)
    {

        if(title !== '') {
            //recherche par titre d'evenement
            let url = "?dataset=que-faire-a-paris-&q=paris&facet="+title;
            fetch(config.openDataURL+url)
                .then(response => response.json()).then(data => {
                    let res = document.getElementById('res');
                    let html = ``;
                    for(let i = 0 ; i < data.records.length ; i++){
                        if(title===data.records[i].fields.title) {
                            html += `<span class='cards'><p>${data.records[i].fields.title}</p>`;
                            html += `<p><img src='${data.records[i].fields.cover_url}' alt='${data.records[i].fields.cover_alt}' style='width:100px;height:100px;'/></p>`;
                            html += `<p>${data.records[i].fields.date_description}</p></span>`;
                        }
                    }
                    res.innerHTML = html;
                    console.log('ok');
            });
        }
    }
    //trier par date croissant
    sortApiByDateCroissant()
    {
        let url = "?dataset=que-faire-a-paris-&q=paris&sort=date_end";
        fetch(config.openDataURL+url)
            .then(response => response.json()).then(data => {
               this.dataApi(data);
        });
    }
    
    //trier par date decroissant
    sortApiByDateDeCroissant()
    {
        let url = "?dataset=que-faire-a-paris-&q=&sort=date_start";
        fetch(config.openDataURL+url)
            .then(response => response.json()).then(data => {
                this.dataApi(data);
                console.log(data);
        });
    }
    
    //trier par titre
    sortApiByTitle()
    {
        let url = "?dataset=que-faire-a-paris-&q=paris&sort=title";
        fetch(config.openDataURL+url)
            .then(response => response.json()).then(data => {
                this.dataApi(data);
        });
    }
    
    //affichage des données de l'api
    dataApi(data)
    {
        //console.log(data);
        let res = document.getElementById('res');
        let html = ``;
        for(let i = 0 ; i < data.records.length ; i++){
            html += `<span class='cards'><p>${data.records[i].fields.title}</p>`;
            html += `<p><img src='${data.records[i].fields.cover_url}' alt='${data.records[i].fields.cover_alt}' style='width:100px;height:100px;'/></p>`;
            html += `<p>${data.records[i].fields.date_description}</p></span>`;
            
        }
        res.innerHTML = html;
    }
}
export default Search;