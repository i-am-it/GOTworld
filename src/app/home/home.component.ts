import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import { $ } from 'protractor';

//import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allItems : any[]=[];
  public allCharacters;
  public allBooks;
  public allHouses;
  public selected:any;
  public status = ["All","Characters","Books","Houses"]
  public cha:boolean = true;
  public boo:boolean = true;
  public hou:boolean = true;

  constructor(public gotService : GotHttpService) {
    console.log("home")
   }

  ngOnInit() {

    this.allCharacters = this.gotService.getAllCharacters().subscribe(

      data=>{
        console.log(data);
        this.allCharacters = data;
        console.log(this.allCharacters)
        //this.allItems.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);})
        this.allItems = this.allItems.concat(this.allCharacters)
        //library.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);} );
        //this.allItems.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);})
      },
      error=>{
        console.log(error.errorMessage)
      }
    )

    this.allBooks = this.gotService.getAllBooks().subscribe(

      data=>{
        console.log(data);
        this.allBooks = data;
        console.log(this.allBooks)
        //this.allItems.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);})
        this.allItems=this.allItems.concat(this.allBooks)
        //this.allItems.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);})
      },
      error=>{
        console.log(error.errorMessage)
      }
    )

    

    this.allHouses = this.gotService.getAllHouses().subscribe(

      data=>{
        console.log(data);
        this.allHouses = data;
        console.log(this.allHouses)
        //this.allItems.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);})
        this.allItems = this.allItems.concat(this.allHouses)
        //this.allItems.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);})
        console.log(this.allItems)
      },
      error=>{
        console.log(error.errorMessage)
      }
    )
    // complete=>{
    //   if(complete){
    //   this.allItems.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);})
    //   }
    // }
  }

  onOptionsSelected(event) {
    //let value = event.target.value;
     console.log(this.selected);
    if(this.selected === "Characters")
    {
      // $(".background-char").show()
      // $(".background-book").hide()
      // $(".background-house").hide()
      this.cha = true
      this.boo = false
      this.hou = false
    }
    else if(this.selected==="Books")
    {
      // $(".background-char").hide()
      // $(".background-book").show()
      // $(".background-house").hide()
      this.cha = false
      this.boo = true
      this.hou = false
    }
    else if(this.selected==="Houses")
    {
      // $(".background-char").hide()
      // $(".background-book").hide()
      // $(".background-house").show()
      this.cha = false
      this.boo = false
      this.hou = true
    }
    else{
      this.cha = true
      this.boo = true 
      this.hou = true
    }
  }

}
