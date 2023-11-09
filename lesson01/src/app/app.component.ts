
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';

import * as XLSX from 'xlsx';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    // primeng
    TableModule,
    InputTextModule,
    ButtonModule,
    PaginatorModule,
    DropdownModule,
    AutoCompleteModule,
    ToastModule,



    HttpClientModule,
    CommonModule,
    RouterOutlet,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  matchModeOptions: SelectItem[] | undefined;


  ngOnInit() {
    console.log("Oninit run");
    this.matchModeOptions = [
      {
        label: 'Starts With',
        value: FilterMatchMode.STARTS_WITH
      },
      {
        label: 'Contains',
        value: FilterMatchMode.CONTAINS
      },
      {
        label: 'Ends With',
        value: FilterMatchMode.ENDS_WITH
      },
      {
        label: 'Equals',
        value: FilterMatchMode.EQUALS
      },
    ];
  }

  clear(table: Table) {
    table.clear();
  }


  public jsonProducts: any;
  constructor(private http: HttpClient, private filterService: FilterService) {
    this.getJson();
  }


  public getJson() {
    this.http.get('https://fakestoreapi.com/products').subscribe(data => {
      this.jsonProducts = data;
      // console.log(data);
    });
  }





  /////////////

  products = [
    { code: '397', name: '199', category: '213', quantity: 216 },
    { code: '682', name: '736', category: '258', quantity: 796 },
    { code: '866', name: '432', category: '995', quantity: 19 },
    { code: '761', name: '633', category: '675', quantity: 842 },
    { code: '579', name: '175', category: '453', quantity: 165 },
    { code: '375', name: '785', category: '476', quantity: 443 },
    { code: '846', name: '830', category: '268', quantity: 391 },
    { code: '31', name: '146', category: '830', quantity: 148 },
    { code: '668', name: '782', category: '697', quantity: 532 },
    { code: '986', name: '332', category: '476', quantity: 267 },
    { code: '137', name: '111', category: '557', quantity: 272 },
    { code: '500', name: '338', category: '947', quantity: 734 },
    { code: '338', name: '273', category: '594', quantity: 44 },
    { code: '545', name: '756', category: '436', quantity: 254 },
    { code: '79', name: '907', category: '930', quantity: 653 },
    { code: '270', name: '950', category: '312', quantity: 85 },
    { code: '961', name: '604', category: '670', quantity: 791 },
    { code: '449', name: '839', category: '804', quantity: 934 },
    { code: '642', name: '474', category: '808', quantity: 73 },
    { code: '658', name: '750', category: '250', quantity: 813 },

  ];

  filename = "products.xlsx";
  exportExcel() {
    let data = document.getElementById("table-data");
    console.log(data?.innerHTML);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.filename);
  }

  r: boolean = false;
  alterRow() {
    this.r = !this.r;
    return this.r;
  }


  /// end of table

  searchValue: string = "Please search";
  title = 'lesson01';


}
