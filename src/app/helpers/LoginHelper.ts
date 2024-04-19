export class LoginHelper{


  public tokenExpired (token: string):boolean{
    //debugger
    if(token == undefined || token == ""){
      return false;
    }

    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    const tempoAtual:number = (Math.floor((new Date).getTime() / 1000));
    console.info(`Expira: ${expiry}`);
    console.info(`tempo atual: ${tempoAtual}`);
    console.info(this.tempoRestanteEmSegundos(token));
    //console.log(`Expira token: ${expiry - Math.floor((new Date).getTime() / 1000)}`)
    //return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    return this.tempoRestanteEmSegundos(token) < 0;
  }

  public tempoRestanteEmSegundos(token: string){
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;

    return (expiry - Math.floor((new Date).getTime() / 1000));
  }

}


