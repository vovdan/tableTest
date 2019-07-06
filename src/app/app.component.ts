import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { Payment } from '../models/payment';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  months = ['Янв', 'Фев', 'Мар', 'Апр', 'Мая', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
  public displayedColumns = ['name', 'cost', ...this.months, 'delete'];
  sumCost=0;
  //public dataSources: Payment[] = [{ name: "Vova", cost: "2" },{ name: "Roma", cost: "3" }];
  dataSource = new MatTableDataSource<Payment>();
  selection = new SelectionModel<Payment>(true, []);
  public payment: Payment = { name: '', cost: '' };
  title = 'my-app';

  add(p: Payment) {
    this.dataSource.data.push(p);
    this.dataSource._updateChangeSubscription();
    console.log('add');
    console.log('p', p);
    console.log('data', this.dataSource);
  }

  /* masterToggle() {
    this.selection.clear();
  }[checked]="selection.isSelected(row)" */

  checkboxLabel(row?: Payment): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  deleteRow(item){
    const index = this.dataSource.data.indexOf(item.id);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
  }

}
