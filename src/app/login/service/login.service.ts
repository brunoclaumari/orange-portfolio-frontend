import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { EnumRole } from 'src/app/models/EnumRole';
import { LoginEntryDTO } from 'src/app/models/LoginEntryDTO';
import { RegisterDTO } from 'src/app/models/RegisterDTO';
import { RetornoToken } from 'src/app/models/RetornoToken';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly BASE_API = environment.BASE_URL;

  constructor(private httpClient: HttpClient) { }
/**
* @description Método que faz login passando dados no body
**/
autenticaLoginViaBody(form : Partial<LoginEntryDTO>):Observable<RetornoToken>{
    //debugger;
      const data: LoginEntryDTO = {
        email: '',
        password:''
      };
      if(form.email && form.password){
        data.email = form.email;
        data.password = form.password;
      }

      //debugger
      var teste = `Is production? ${environment.production}`;
      console.info(teste)

      const obtencao = this.httpClient.post<RetornoToken>(`${this.BASE_API}/myauth/login`, data).pipe(first());

      return obtencao;
  }

  /**
* @description Método que faz login passando dados no body
**/
fazCadastro(form : Partial<RegisterDTO>):Observable<RegisterDTO>{
  debugger;

  const data: RegisterDTO = {
    first_name: '',
    surname: '',
    email: '',
    password: '',
    user_role: EnumRole.User
  };
  if(form.email && form.password && form.first_name && form.surname){
    data.first_name = form.first_name;
    data.surname = form.surname;
    data.email = form.email;
    data.password = form.password;
  }

  localStorage.setItem('pass', data.password || '');
  const retorno = this.httpClient.post<RegisterDTO>(`${this.BASE_API}/myauth/register`, data).pipe(first());

  return retorno;
}

}
