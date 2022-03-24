import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
    h2 span {
      color: #0d6efd;
    }

    `
  ]
})
export class ByRegionComponent {

  regions:string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  activeRegion:string = '';
  countries: Country[] = [];

  constructor( private countryService:CountryService ) { }

  getCSSClass( region:string ){
    return (region === this.activeRegion) 
              ? 'btn btn-primary me-2'
              : 'btn btn-outline-primary me-2'
  }

  activateRegion( region:string ){
    this.activeRegion = region;

    this.countryService.searchRegion(region)
      .subscribe( countries => {
        this.countries = countries;
      });
    
    //TODO: hacer el llamado al servicio
  }

}
