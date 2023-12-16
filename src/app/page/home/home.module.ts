import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { ApiService } from '../../api.service'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule],
  providers: [ApiService] // Assuming ApiService is a service needed in this module
})
export class HomeModule {}
