import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  constructor( private countryService:CountryService ) {}

  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  search( term:string){
    this.hasError = false;
    this.term = term;
    
    this.countryService.searchCapital(this.term)
      .subscribe( (countries) => {
        this.countries = countries;
        console.log(countries)
      }, (err)=>{
        this.hasError = true;
        this.countries = [];
      });
  }

}
