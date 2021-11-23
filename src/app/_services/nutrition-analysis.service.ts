import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiKeys, baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NutritionAnalysisService {

  url = baseUrl + '/nutrition-details';
  dataUrl = baseUrl + '/nutrition-data';
  params: {} = {...apiKeys};
  ingrs: string[] = [];
  ingrsArrayChanged = new EventEmitter<string[]>();
  constructor(private http: HttpClient) { }


  addIngr(ingr:string){
    this.ingrs.push(ingr);
    this.ingrsArrayChanged.emit(this.ingrs);
  }

  deleteIngr(ingr: string): void {
    this.ingrs = this.ingrs.filter((i) => i !== ingr);
    this.ingrsArrayChanged.emit(this.ingrs);
  }

  getNutritionAnalysis():  Observable<any> {
    return this.http.post(this.url, {ingr: this.ingrs, title: 'new rec'}, { params: this.params }) ;
  }

  getIngrNutritionData(ingr: string): Observable<any> {
    this.params = {...this.params, ingr: ingr};
    return this.http.get(this.dataUrl, { params: this.params });
  }
}
