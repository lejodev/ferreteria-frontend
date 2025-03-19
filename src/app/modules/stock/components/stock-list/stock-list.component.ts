import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { IStock } from '../../interfaces/stock.interface';
import { StockListService } from '../../services/stock-list/stock-list.service';
import { StockDataSourceService } from '../../services/stockDataSource/stock-data-source.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  @ViewChild('modal') modalTemplate!: TemplateRef<any>

  selectedStock!: IStock;

  stockList: IStock[] = []
  options!: string[];
  myControl = new FormControl();
  filteredOptions!: Observable<string[]>
  stockDatasource!: StockDataSourceService;
  displayColumns: string[] = ['id', 'name', 'amount', 'buyPrice', 'sellPrice', 'actions']

  constructor(
    private stockService: StockListService,
    private modalService: ModalService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.stockService.getAllStock().subscribe(data => {
      console.log(data);
      this.stockList = data
      this.options = this.stockList.map(stock => {
        console.log(stock);

        return stock.products?.name || 'unknown'
      });
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || ''))
      )
    })

    this.stockDatasource = new StockDataSourceService(this.stockService);
    this.stockDatasource.loadStock();

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.options.filter(option => option.toLowerCase().includes(filterValue))
  }

  getStock(input: string) {
    console.log(input)
  }

  onSearch(e: Event) {
    const searchInput = this.myControl.value?.trim();
    console.log(searchInput);

    e.preventDefault();
    console.log('clicked');
    this.filteredOptions.subscribe(val => console.log(val))
  }

  onEdit(id: number) {
    console.log(id);
  }

  openModal(stockItem: IStock) {
    this.selectedStock = stockItem;

    const dialogRef = this.dialog.open(this.modalTemplate, {
      width: '250px',
      disableClose: false,

    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log(result);
      }
    })

  }

  saveChanges() {
    console.log(this.selectedStock);

    this.dialog.closeAll()
  }

}
