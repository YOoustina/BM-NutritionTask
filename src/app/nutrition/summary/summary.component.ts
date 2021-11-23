import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { NutritionAnalysisService } from "src/app/_services/nutrition-analysis.service";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"],
})
export class SummaryComponent implements OnInit {
  ingrArray!: string[];
  data: any;
  totalNutData: any;
  dataArray: any[] = [];
  singleDataArray: any[] = [];
  constructor(private _nutritionAnalysisService: NutritionAnalysisService) {}

  ngOnInit(): void {
    this.ingrArray = this._nutritionAnalysisService.ingrs;
  }

  log(event: boolean, i: number) {
    if (event) {
      this._nutritionAnalysisService
        .getIngrNutritionData(this.ingrArray[i])
        .subscribe((res) => {
          this.data = res;
          for (const property in res.totalDaily) {
            this.singleDataArray.push(res.totalDaily[property]);
          }
        });
    }
  }

  getTotalNut() {
    this._nutritionAnalysisService.getNutritionAnalysis().subscribe((res) => {
      this.totalNutData = res;
      for (const property in res.totalDaily) {
        this.dataArray.push(res.totalDaily[property]);
      }
    });
  }
}
