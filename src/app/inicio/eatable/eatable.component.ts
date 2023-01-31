import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eatable',
  templateUrl: './eatable.component.html',
  styleUrls: ['./eatable.component.css']
})
export class EatableComponent implements OnInit{
  constructor(private router: Router) { }
  ngOnInit(): void {
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.router.navigate(['/session/login']);
  }, 2000);
    
  }
  }

