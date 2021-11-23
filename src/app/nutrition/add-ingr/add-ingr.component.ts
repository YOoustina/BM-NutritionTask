import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NutritionAnalysisService } from 'src/app/_services/nutrition-analysis.service';

@Component({
  selector: 'app-add-ingr',
  templateUrl: './add-ingr.component.html',
  styleUrls: ['./add-ingr.component.scss'],
})
export class AddIngrComponent implements OnInit {
  ingr!: string;
  units = [
    { value: 'gr', viewValue: 'gram' },
    { value: 'kg', viewValue: 'kilogram' },
  ];
  ingrs!: Observable<string[]>;

  constructor(private _nutritionAnalysisService: NutritionAnalysisService, private router: Router) {}

  ngOnInit(): void {
    this.ingrs = this._nutritionAnalysisService.ingrsArrayChanged;
  }

  onAddIngr(form: NgForm): void {
    console.log(form.value);
    const tempStr = `${form.value.quantity? form.value.quantity : 100}${form.value.unit} ${form.value.ingr}`;
    this._nutritionAnalysisService.addIngr(tempStr);
    form.resetForm({quantity: '', unit: 'gr', ingr: ''});
  }

  onDeleteIngr(ingr: string): void {
    this._nutritionAnalysisService.deleteIngr(ingr);
  }

  onAnalyze(): void {
    this.router.navigate(['/summary']);
  }
}
