import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GotHttpService {

  public baseUrl = 'https://www.anapioficeandfire.com/api'
  constructor(public http : HttpClient) { 
    console.log("service")
  }

  public getAllCharacters():any{
    let characters = this.http.get(`${this.baseUrl}/characters?page=1&pageSize=100`)
    console.log(characters)
    return characters
  }

  public getAllBooks():any{
    let books = this.http.get(`${this.baseUrl}/books?page=1&pageSize=100`)
    console.log(books)
    return books
  }

  public getAllHouses():any{
    let houses = this.http.get(`${this.baseUrl}/houses?page=1&pageSize=100`)
    console.log(houses)
    return houses
  }

  public getItem(url):any{
    let item = this.http.get(url);
    return item
  }
}
