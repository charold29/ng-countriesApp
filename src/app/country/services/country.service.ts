import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl:string = 'https://restcountries.com/v3.1/';

  get httpParams(){
    return new HttpParams().set( 'fields', 'name,cca2,capital,flags,population' );
  }

  constructor( private httpService: HttpClient ) { }

  searchCountry( term:string ): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${term}`

    return this.httpService.get<Country[]>(url, {params: this.httpParams});
            // .pipe(
            //   catchError(err => of([]))
            // );
    
  }

  searchCapital( term:string ): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${term}`

    return this.httpService.get<Country[]>(url, {params: this.httpParams});
            // .pipe(tap(console.log));
  }

  searchRegion( term:string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/region/${term}`
    
    return this.httpService.get<Country[]>(url, {params: this.httpParams});
  }
  
  getCountryByAlpha( id:string ): Observable<Country[]> {

    const url = `${this.apiUrl}/alpha/${id}`

    return this.httpService.get<Country[]>(url);
  }

}
