import { Component, OnInit, Input } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { CommonModule } from '@angular/common'
import {
  jamMessage,
  jamStarF,
  jamMessenger,
  jamPhone,
  jamChevronLeft
} from '@ng-icons/jam-icons'
import { faSolidPhoneVolume } from '@ng-icons/font-awesome/solid'
@Component({
  selector: 'app-product-article',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  templateUrl: './product-article.component.html',
  styleUrl: './product-article.component.css',
  viewProviders: [
    provideIcons({
      jamMessage,
      jamStarF,
      jamMessenger,
      jamPhone,
      faSolidPhoneVolume,
      jamChevronLeft
    })
  ]
})
export class ProductArticleComponent {
  @Input() products: any[] = []
}
