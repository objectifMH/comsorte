import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Comsorte';

  langueForm: FormGroup;
  isShowDrapeauxLangues = false;
  langue = "fr";

  srcLangue = "assets/icon/france.svg"
  langues = [
    {
      "pays": "fr",
      "src": "france.svg"
    },
    {
      "pays": "es",
      "src": "paraguay.svg"
    },
    {
      "pays": "en",
      "src": "england.svg"
    },
    {
      "pays": "br",
      "src": "brazil.svg"
    }
  ];





  constructor(private fb: FormBuilder, private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }


  ngOnInit() {
    // Animation 
    AOS.init();

    // Langue internationalisation 
    this.langueForm = this.fb.group({
      countryControl: ['FR']
    });

    // Animation au scroll 


    document.addEventListener('scroll', function (e) {
      let top = window.pageYOffset + window.innerHeight;


      // Apparition au scroll aqui items : 

      let aqui_conteneur = document.getElementById('id_aqui');
      let anais_conteneur = document.getElementById('id_anais');


      let top_aqui = aqui_conteneur.offsetTop;
      let top_anais = anais_conteneur.offsetTop;

      let aqui_items = document.querySelectorAll('.aqui_item');

      (top > top_aqui + 200 && top < top_anais) ?
        aqui_items.forEach(items => {
          items.classList.add('glissement_animation');
        })
        :
        aqui_items.forEach(items => {
          items.classList.remove('glissement_animation');
        })



      // Apparition au Scroll Chiffres items

      let chiffre_conteneur = document.getElementById('id_chiffres');
      let formule_conteneur = document.getElementById('id_formules');


      let top_chiffre = chiffre_conteneur.offsetTop;
      let top_formule = formule_conteneur.offsetTop;

      let chiffres_items = document.querySelectorAll('.chiffre_item');


      (top > top_chiffre + 200 && top < top_formule + 300) ?
        chiffres_items.forEach(items => {
          items.classList.add('glissement_animation');
        })
        :
        chiffres_items.forEach(items => {
          items.classList.remove('glissement_animation');
        })
    });
  }

  showDrapeauxLangues(lang) {
    this.langue = lang;

    console.log(lang);
    this.translate.setDefaultLang(lang);
    this.langues.forEach(lg => {
      if (lg.pays === lang) {
        this.srcLangue = "assets/icon/" + lg.src;
      }
    })
    this.isShowDrapeauxLangues = !this.isShowDrapeauxLangues;
  }

  // "p": " Vous êtes un organisme de formation? Organisme de langue à la recherche d'une formatrice indépendante? Demandez votre devis! " 




}
