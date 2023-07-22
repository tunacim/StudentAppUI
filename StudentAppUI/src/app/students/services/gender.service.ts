import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from 'src/app/Model/ApiModels/Gender.Model';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  private BaseApiUrl='https://localhost:7167';
  constructor(private httpClient:HttpClient) { }

  getGenderList():Observable<Gender[]>{
    return this.httpClient.get<Gender[]>(this.BaseApiUrl+"/Genders")
  }
}
