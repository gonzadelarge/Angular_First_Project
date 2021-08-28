import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/service/request.service';
import { UserRegister } from '../../../models/icontacto';

@Component({
  selector: 'foyone-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  @Input() public contact?: UserRegister;

  public userRegisterForm!: FormGroup;
  public submitted: boolean = false;


  constructor(private formBuilder: FormBuilder, private requestService: RequestService) { 

    this.initForm();

  }

  ngOnInit(): void { }

  public initForm() {
    this.userRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mesage: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  public onSubmit(): void {

     this.submitted = true;

       const mensaje: UserRegister = {
          name: this.userRegisterForm.get('name')?.value,
          surname: this.userRegisterForm.get('surname')?.value,
          email: this.userRegisterForm.get('email')?.value,
          mesage: this.userRegisterForm.get('mesage')?.value
        }

       console.log(mensaje);

      if (this.userRegisterForm.valid) {
        this.userRegisterForm.reset();
        this.submitted = false;

        this.requestService.postRequest('mensajes', mensaje)
      }
  }
}
