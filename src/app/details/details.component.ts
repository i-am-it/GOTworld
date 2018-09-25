import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public item;
  public itemUrl;
  constructor( private route: ActivatedRoute, private router: Router, private gotService: GotHttpService) { 

  }

  ngOnInit() {
    this.itemUrl = this.route.snapshot.paramMap.get('itemId');
    console.log(this.itemUrl)

    this.item = this.gotService.getItem(this.itemUrl).subscribe(

      data=>{
        this.item = data;
        console.log(this.item)
      },
      error=>{
        console.log(error.message)
      }
      
    )
    
  }

}
