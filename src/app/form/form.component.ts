import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['ram', Validators.required],
      email: ['email.com', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submitHandler() {
    console.log(this.myForm.value)
  }
}
