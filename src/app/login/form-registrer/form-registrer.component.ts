import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../service/login.service';
import { Observable, catchError, of } from 'rxjs';
import { RetornoToken } from 'src/app/models/RetornoToken';

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


  objetoToken:Observable<RetornoToken>=new Observable<RetornoToken>();

  oToken:RetornoToken | undefined;

  panelLogin:string = '../../../assets/painel_login.png';
  panelCadastro:string = '../../../assets/img_cadastro.png';

  @Input() isRegister:boolean = false;

  @Output() alterouImagem = new EventEmitter();

  @Input() sourceImage:string = "";


  //objetoToken:Observable<RetornoToken>=new Observable<RetornoToken>();

  //oToken:RetornoToken | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
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
    this.focoNaSenha = temFoco;
  }

  getErrorMessageEmail() {
    if (this.formLogin.get('email')?.hasError('required')) {
      return 'Campo email é obrigatório';
    }

    return this.formLogin.get('email')?.hasError('email')?'Email inválido' : '';
  }


  getErrorPassword(){
    if (this.formLogin.get('password')?.hasError('required')) {
      return '* Campo senha é obrigatório';
    }
    const senha:string = this.formLogin.get('password')?.value;

    let match = this.senhaForte.exec(senha);
    console.log(match);

    return '';
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
    //debugger;
    this.focoSenha(true);

    if(this.formLogin.valid && !this.formLogin.get('password')?.invalid){
      this.fazAutenticacaoLogin();
    }
    else{
      this.toastr.error("Verifique as mensagens de erro no formulário", "Formulário inválido");
    }
  }

  fazAutenticacaoLogin(){
    let msg:string = "";

    this.loginService.autenticaLoginViaBody(this.formLogin.value)
    .pipe(
      catchError((erro) => {

        //debugger;
        if(erro.status == 504){
          msg = "Erro de acesso ao servidor!!";
        }
        else if(erro.status == 404){
          msg = "Erro de acesso aos dados!!Verifique o funcionamento da API com o administrador";
        }
        else if(erro.status == 401){
          msg = "Email ou senha inválidos! Caso não seja usuário, cadastre-se!!";
        }
        else{
          msg = "Algo deu errado!!";
        }
        console.log(`log: ${msg}`);

        this.toastr.error(msg, "Erro");
        return of([]);
      })
    )
    .subscribe((result) => {
      this.oToken = result as RetornoToken;

      if(this.oToken.access_token != undefined){
        localStorage.setItem('token', this.oToken.access_token);
        this.toastr.success("Login realizado com sucesso", "Tudo certo!");
        this.router.navigate(['']);
      }
    });
  }

  cadastraUsuario(){

  }

  habilitaRegistro(){
    //debugger
    this.isRegister = true;
    this.sourceImage = this.panelCadastro;

    this.alterouImagem.emit({novaImagem: this.sourceImage});
    console.log(this.sourceImage)
  }

}
