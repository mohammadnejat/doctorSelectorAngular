import { Routes } from '@angular/router'
import { Page1Component } from './page/page1/page1.component'
import { HomeComponent } from './page/home/home.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: Page1Component },
  { path: '1', component: Page1Component },
  { path: '2', component: Page1Component },
  { path: '3', component: Page1Component },
  { path: '4', component: Page1Component },
  { path: '5', component: Page1Component },
  { path: '6', component: Page1Component }
]
