// Modulos de uso en el servicio
import { HttpClient } from '@angular/common/http';

// Decorador
import { Injectable } from '@angular/core';

// Base URL
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService { 

  constructor( private httpClient: HttpClient) {  }

  public getRequest(url: string) {
    return this.httpClient.get(`${environment.baseUrl}${url}`)
  }

  public postRequest(url: string, element: any) {
      return this.httpClient.post(`${environment.baseUrl}${url}`, element)
        .subscribe( data => {
          console.log(data)
        })
  }
}
