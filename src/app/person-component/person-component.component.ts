import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-component',
  templateUrl: './person-component.component.html',
  styleUrls: ['./person-component.component.css']
})
export class PersonComponentComponent implements OnInit {

  personForm: FormGroup;
  constructor( private userService: UserService, private fb: FormBuilder) { }

  get companyName() {
    return this.personForm.controls.company.get('name');
  }
  get userId() {
    return this.personForm.get('id');
  }
  ngOnInit() {
    this.personForm = this.fb.group({
      id: ['0', [Validators.required, Validators.pattern('[0-9]+')]],
      name: '',
      email: '',
      company: this.fb.group({
        name: '',
        catchphrase: ''
      })
    });
    this.userService.getUser(1).subscribe(data=>
      this.personForm.setValue({
        id: data.id,
        name: data.name,
        email: data.email,
        company: {
          name: data.company.name,
          catchphrase: data.company.catchPhrase
        }
      })
    );
  }

}
