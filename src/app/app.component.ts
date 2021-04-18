import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    this.langueForm = this.fb.group({
      countryControl: ['FR']
    });
  }
}
