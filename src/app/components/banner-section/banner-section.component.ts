import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss']
})
export class BannerSectionComponent implements OnInit {

  monthlyIncome = 0;
  monthlyExpense = 0;
  minMonthlyIncome = 100000;
  maxMonthlyIncome = 300000;
  loanAmount = 100000;
  emiAmount = 15000;


  constructor() { }

  ngOnInit(): void {
  }

}
