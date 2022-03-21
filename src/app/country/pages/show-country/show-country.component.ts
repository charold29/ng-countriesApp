import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country, Translation } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  country !: Country;

  constructor( 
    private activatedRoute: ActivatedRoute, 
    private countryService: CountryService 
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({countryId}) => this.countryService.getCountryByAlpha(countryId) ),
        tap(console.log)
      )
      .subscribe( countries => {
        this.country = countries[0]
      });

    // this.activatedRoute.params
    //   .subscribe( ({countryId}) => {
    //     this.countryService.getCountryByAlpha(countryId)
    //       .subscribe( country => {
    //         console.log(country);
    //       })
    //   })

  }

}
