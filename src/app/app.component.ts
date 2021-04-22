import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      "pays":"fr",
      "src": "france.svg"
    },
    {
      "pays":"es",
      "src": "paraguay.svg"
    },
    {
      "pays":"en",
      "src": "england.svg"
    },
    {
      "pays":"br",
      "src": "brazil.svg"
    }
  ];




  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    AOS.init();
    this.langueForm = this.fb.group({
      countryControl: ['FR']
    });
  }

  showDrapeauxLangues(lang) {
    this.langue = lang;
    this.langues.forEach(lg => {
      if (lg.pays === lang) {
        this.srcLangue = "assets/icon/" + lg.src;
      }
    })
    this.isShowDrapeauxLangues = !this.isShowDrapeauxLangues;
    
  }

}
