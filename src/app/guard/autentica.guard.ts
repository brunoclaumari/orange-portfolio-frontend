import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginHelper } from '../helpers/LoginHelper';



export const AutenticaGuard: CanActivateFn = (route, state) =>{
  //var teste = route.params;
  //debugger;
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if(token == "undefined" || token == undefined || token == null || token == ""){
    router.navigate(['login'])
    return false;
  }
  else if(LoginHelper.prototype.tokenExpired(token)){
    router.navigate(['login'])
    return false;
  }


  return true;
}
