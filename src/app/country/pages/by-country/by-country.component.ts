import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  constructor( private countryService:CountryService ) {}

  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  search( term:string){
    this.hasError = false;
    this.term = term;
    
    this.countryService.searchCountry(this.term)
      .subscribe( (countries) => {
        this.countries = countries;
      }, (err)=>{
        this.hasError = true;
        this.countries = [];
      });
  }

  suggestions( term:string ){
    this.hasError = false;
    // create suggestion
  }
  
}
