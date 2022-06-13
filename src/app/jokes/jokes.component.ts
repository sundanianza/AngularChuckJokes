import { Component, OnInit } from '@angular/core';
import { Jokes } from '../jokes';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  jokess: Jokes[];
  categories: Object[];


  constructor(private jokesService: JokesService) { }



  ngOnInit(): void {



    this.jokesService.getAllJokes().subscribe((data: Jokes[]) => {

      console.log(data);
      this.jokess = data;

    });


    this.jokesService.getAllJokesComplete().subscribe((data: Object[]) => {

      console.log(data);
      this.categories = data;
    });

  }
 

}
