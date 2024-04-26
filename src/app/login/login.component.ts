import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

//import { panelLogin  }  '../../assets/painel_login.png';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  panelLogin:string = '../../assets/painel_login.png';
  panelCadastro:string = '../../assets/img_cadastro.png';

  @Input() sourceImage:string = "";

  @Input() isRegisterPai:boolean = false;
  //isRegisterPai:boolean = false;

  ngOnInit(): void{
    this.sourceImage = this.panelLogin;
  }

  onAlterouImagem(event:any){
    //debugger;
    if(event != undefined)
      this.sourceImage = event.novaImagem;
  }

/*   ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
    console.info("onchange login")
    //this.sourceImage = this.isRegister?this.panelCadastro:this.panelLogin;
  } */

}
