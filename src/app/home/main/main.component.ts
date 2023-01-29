import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  // mostrar:Boolean;
  // mostrar:boolean=true;
  mostrar = true
  ngOnInit(): void {
    
  }
  
  buscar(){
    this.mostrar=false
    // if(this.mostrar){
    //   this.mostrar=true;
    // }
    // else{
    //   this.mostrar=false;
    // }
    
  }
}
