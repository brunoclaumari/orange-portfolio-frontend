import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-registrer',
  templateUrl: './form-registrer.component.html',
  styleUrls: ['./form-registrer.component.css']
})
export class FormRegistrerComponent implements OnInit {

  public formLogin: FormGroup = new FormGroup({});
  senhaForte:RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

  aoMenosUmDigito:RegExp = /\d/;                        // deve conter ao menos um dígito
  aoMenosMinuscula:RegExp = /[a-z]+/;                   // deve conter ao menos uma letra minúscula
  aoMenosumaMaiuscula:RegExp = /[A-Z]+/;                // deve conter ao menos uma letra maiúscula
  aoMenosUmCaracterEspecial:RegExp = /[^a-zA-Z 0-9]+/;  // deve conter ao menos um caractere especial
  aoMenos8caracteres:RegExp = /^[0-9a-zA-Z$*&@#]{8,}$/; // deve conter ao menos 8 dos caracteres mencionados

  hide: boolean = true;
  focoNaSenha:boolean = false;

  panelLogin:string = '../../../assets/painel_login.png';
  panelCadastro:string = '../../../assets/img_cadastro.png';

  @Input() isRegister:boolean = false;

  @Output() alterouImagem = new EventEmitter();

  @Input() sourceImage:string = "";


  //objetoToken:Observable<RetornoToken>=new Observable<RetornoToken>();

  //oToken:RetornoToken | undefined;

  constructor(
    private formBuilder: FormBuilder,
    //private authService: AuthService,
    private router: Router,
    //private toastr: ToastrService,
    private activeRoute: ActivatedRoute,

    ) {
  }

  ngOnInit(): void{
    this.criarForm();
  }

  criarForm(){
    this.formLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required ]),
      password: new FormControl('',
      [
        Validators.required,
        Validators.min(3),
        Validators.pattern(this.aoMenos8caracteres),
        Validators.pattern(this.aoMenosMinuscula),
        Validators.pattern(this.aoMenosUmCaracterEspecial),
        Validators.pattern(this.aoMenosUmDigito),
        Validators.pattern(this.aoMenosumaMaiuscula),
      ]),
      nome: new FormControl(),
      sobrenome: new FormControl()
    });
  }

  focoSenha(temFoco:boolean){

  }

  getErrorMessageEmail(){

  }
  getErrorPassword(){

  }

  printEmail(){

  }

  fazAcaoCadastro(){
    if(this.isRegister){
      this.cadastraUsuario();
    }
    else{
      this.loginEntrar();
    }
  }

  loginEntrar(){

  }

  cadastraUsuario(){

  }

  habilitaRegistro(){
    this.isRegister = true;
    this.sourceImage = this.panelCadastro;

    this.alterouImagem.emit({novaImagem: this.sourceImage});
    console.log(this.sourceImage)
    //this.alterou.emit({isRegisterPai: this.isRegister});
    //this.isRegister = true;
  }

}
