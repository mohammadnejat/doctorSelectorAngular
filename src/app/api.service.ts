import { Injectable } from '@angular/core'
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor () {}
  fetchData () {
    return axios.get('https://doctor-fake-apis.vercel.app/posts')
  }
}
