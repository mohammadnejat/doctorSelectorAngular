import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Page1Component } from './page/page1/page1.component'
import { HomeComponent } from './page/home/home.component'
import { RouterOutlet } from '@angular/router'
import { ProductArticleComponent } from './components/product-article/product-article.component'
import { HeaderComponent } from './components/header/header.component'

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <!-- Your template content goes here -->
    <h1>Hello Angular!</h1>
  `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    CommonModule,
    Page1Component,
    AppComponent,
    HomeComponent,
    ProductArticleComponent,
    HeaderComponent
  ]
})
export class AppComponent {
  title = 'Tour of Heroes'
}
