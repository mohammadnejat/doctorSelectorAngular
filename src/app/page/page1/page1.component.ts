import { Component, OnInit, Input } from '@angular/core'
import { HeaderComponent } from '../../components/header/header.component'
import { Router } from '@angular/router'
import { ApiService } from '../../api.service'
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { AccordionModule } from 'primeng/accordion'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CdkAccordionModule } from '@angular/cdk/accordion'
import {
  faSolidUserDoctor,
  faSolidHospital,
  faSolidFile,
  faSolidStar,
  faSolidCheck
} from '@ng-icons/font-awesome/solid'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [HeaderComponent, CommonModule, NgIcon, AccordionModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css',
  viewProviders: [
    provideIcons({
      faSolidUserDoctor,
      faSolidHospital,
      faSolidFile,
      faSolidStar,
      faSolidCheck
    })
  ]
})
export class Page1Component implements OnInit {
  products: any[] = []
  currentObject: any
  numbers: any = Number
  constructor (
    private router: Router,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}
  ngOnInit () {
    this.route.params.subscribe(params => {
      const id = +params['id']
      // Ensure that id is a valid index and products array is long enough
      if (!isNaN(id) && id > 0 && id <= this.products.length) {
        this.currentObject = this.products[id - 1]
      } else {
        // Handle the case where id is invalid (out of bounds)
        this.numbers = id
        console.log(this.numbers)
      }
    })
    this.apiService
      .fetchData()
      .then(response => {
        this.products = [response.data[this.numbers - 1]]
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }
  formatPrice (price: number): string {
    return price.toLocaleString() // You can provide additional options if needed
  }
}
