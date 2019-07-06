import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Payment } from 'src/models/payment';
import { MatTableDataSource, MatTable } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import * as moment from 'moment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public dataSource = new MatTableDataSource<Payment>();
  public selection = new SelectionModel<Payment>(true, []);
  public months = [];
  public displayedColumns = [];

  @Input()
  public set data(v: Payment[]) {
    this.dataSource.data = v;
    if (this.table) {
      this.table.renderRows();
    }
  }

  @Output()
  public dataChange: EventEmitter<Payment[]> = new EventEmitter();
  
  @ViewChild('table', { static: false })
  public table: MatTable<Payment>;

  constructor() { }

  ngOnInit() {
    moment.locale('ru');
    this.months.push(...moment.monthsShort());
    this.displayedColumns = ['name', 'cost', ...this.months, 'delete'];
  }

  onCheckBoxChange($event, row: Payment, month) {
    let monthNumber = +moment().month(month).format("M") - 1;
    let index = row.months.findIndex(item => item === monthNumber);
    if ($event.checked && index === -1) {
      row.months.push(monthNumber);
    } else if (!$event.checked && index !== -1) {
      row.months.splice(index, 1);
    }
    this.dataChange.emit(this.dataSource.data);
  }

  deleteRow(item) {
    const index = this.dataSource.data.indexOf(item.id);
    this.dataSource.data.splice(index, 1);
    if (this.table) {
      this.table.renderRows();
    }
    this.dataChange.emit(this.dataSource.data);
  }

}
