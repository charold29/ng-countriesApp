import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl:string = 'https://restcountries.com/v3.1/';

  constructor( private httpService: HttpClient ) { }

  searchCountry( term:string ): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${term}`

    return this.httpService.get<Country[]>(url);
            // .pipe(
            //   catchError(err => of([]))
            // );
    
  }

  searchCapital( term:string ): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${term}`

    return this.httpService.get<Country[]>(url);
  }

}
