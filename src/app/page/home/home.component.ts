import { Component, OnInit } from '@angular/core'
import { ProductArticleComponent } from '../../components/product-article/product-article.component'
import { HeaderComponent } from '../../components/header/header.component'
import { ApiService } from '../../api.service'
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductArticleComponent, HeaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: any[] = []
  constructor (private apiService: ApiService) {}

  ngOnInit () {
    this.apiService
      .fetchData()
      .then(response => {
        this.products = response.data
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }
}
