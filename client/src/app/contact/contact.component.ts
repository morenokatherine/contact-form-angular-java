import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { Contact } from './models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      ocupation: [''],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(10)]],
    })
  }

  ngOnInit(): void {
  }

  get name() {
    return this.form.get('name') as FormControl;
  }

  get ocupation() {
    return this.form.get('ocupation') as FormControl;
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get subject() {
    return this.form.get('subject') as FormControl;
  }

  get content() {
    return this.form.get('content') as FormControl;
  }

  submit() {
    this.form.markAllAsTouched();
      if (this.form.valid) {
      const contact = new Contact(
        this.name.value,
        this.ocupation.value,
        this.email.value,
        this.subject.value,
        this.content.value,
      );
      this.form.disable();
      this.contactService.createContact(contact).subscribe(() => {
        this.form.disable();
      });
    }
  }
}
