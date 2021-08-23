import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Feed } from '../feed';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vetor: Feed  = new Feed();
  show:boolean =  true;

  constructor(public dataService : DataService) {}

  ngOnInit(): void {
    this.dataService.getNews().subscribe((data)=>{
      console.log(data);
      this.vetor.articles = data.articles;
      return  data.articles;
      
    });
  }
}
