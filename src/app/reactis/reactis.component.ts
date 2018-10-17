import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { User, Company, SuperUser } from '../user';

@Component({
  selector: 'app-reactis',
  templateUrl: './reactis.component.html',
  styleUrls: ['./reactis.component.css']
})
export class ReactisComponent implements OnInit {

  reactisForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    const myUser = new User();
    console.log('created a user', myUser);
    const superUser = new SuperUser();
    console.log('created a super user', superUser);

    this.reactisForm = this.fb.group(myUser);
    this.reactisForm.addControl('company', this.fb.group(new Company()));
    console.log('created FormGroup', this.reactisForm);

    this.userService.getUser(1).subscribe(user => {
      console.log('received a user', user);
      // this.reactisForm = this.fb.group(user);
      this.reactisForm.patchValue(user);
    });
  }

  onSubmit() {
    console.log('Submitting form', this.reactisForm.value);
  }

}
