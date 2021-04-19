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

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    
    AOS.init();
    this.langueForm = this.fb.group({
      countryControl: ['FR']
    });
  }

}
