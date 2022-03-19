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

  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  search(){
    this.hasError = false;
    console.log(this.term);
    this.countryService.searchCountry(this.term)
      .subscribe( (countries) => {
        this.countries = countries;
        console.log(countries)
      }, (err)=>{
        this.hasError = true;
        this.countries = [];
      });
  }

  constructor( private countryService:CountryService ) {}
  
}
