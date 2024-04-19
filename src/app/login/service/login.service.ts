import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { LoginEntryDTO } from 'src/app/models/LoginEntryDTO';
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
  debugger
      const data: LoginEntryDTO = {
        email: '',
        password:''
      };
      if(form.email && form.password){
        data.email = form.email;
        data.password = form.password;
      }

      var teste = `Is production? ${environment.production}`;
      console.info(teste)

      const obtencao = this.httpClient.post<RetornoToken>(`${this.BASE_API}/myauth/login`, data).pipe(first());

      return obtencao;
    }

}
