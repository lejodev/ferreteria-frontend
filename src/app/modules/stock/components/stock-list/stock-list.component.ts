import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, Validator, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { IStock } from '../../interfaces/stock.interface';
import { StockListService } from '../../services/stock-list/stock-list.service';
import { StockDataSourceService } from '../../services/stockDataSource/stock-data-source.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { HttpService } from 'src/app/core/services/http/http.service';
import { JwtServiceService } from 'src/app/core/services/jwtService/jwt-service.service';
import { NotificationsService } from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  @ViewChild('modal') modalTemplate!: TemplateRef<any>

  selectedStock!: IStock;
  stockForm!: FormGroup;

  stockList: IStock[] = []
  options!: string[];
  myControl = new FormControl();
  modalFormControl = new FormControl();
  filteredOptions!: Observable<string[]>
  stockDatasource!: StockDataSourceService;
  displayColumns: string[] = ['id', 'name', 'amount', 'buyPrice', 'sellPrice', 'actions']

  constructor(
    private stockService: StockListService,
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private http: HttpService,
    private jwtService: JwtServiceService,
    private notificationService: NotificationsService
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
    console.log(this.selectedStock);
    this.stockForm = this.formBuilder.group({
      name: [stockItem.products?.name, [Validators.required]],
      amount: [stockItem.amount, [Validators.required, Validators.min(1)]],
      buyPrice: [stockItem.products.buyPrice, [Validators.min(1)]],
      sellPrice: [stockItem.products.sellPrice, [Validators.min(1)]]
    }, {
      validators: this.priceValidator()
    })

    const dialogRef = this.dialog.open(this.modalTemplate, {
      width: '350px',
      disableClose: false,

    })

    this.modalFormControl

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log(result);
      }
    })

  }

  saveChanges() {
    console.log(this.selectedStock);
    this.stockService.EditStock(this.selectedStock.id, {
      amount: this.stockForm.get('amount')?.value,
      products: {
        id: this.selectedStock.products.id,
        name: this.stockForm.get('name')?.value,
        buyPrice: this.stockForm.get('buyPrice')?.value,
        sellPrice: this.stockForm.get('sellPrice')?.value,
      },
      id: this.selectedStock.products.id
    }).subscribe({
      next: (data) => console.log('Modidied', data),
      error: (err) => console.log('Error', err),
      complete: () => {
        console.log('completed');
      }
    })

    this.dialog.closeAll()
  }

  onCancel() {
    this.selectedStock = {} as IStock;
    this.dialog.closeAll()
  }

  priceValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const buyPrice = formGroup.get('buyPrice')?.value;
      const sellPrice = formGroup.get('sellPrice')?.value;
      const buyPriceControl = formGroup.get('buyPrice');
      const sellPriceControl = formGroup.get("sellPrice")

      console.log(buyPrice, sellPrice);

      const buyErrors = buyPriceControl?.errors || {};
      const sellErrors = sellPriceControl?.errors || {};
      delete buyErrors['priceError'];
      delete sellErrors['priceError'];


      if (buyPrice && sellPrice && buyPrice > sellPrice) {
        buyPriceControl?.setErrors({ ...buyPriceControl.errors, priceError: true })
        sellPriceControl?.setErrors({ ...sellPriceControl.errors, priceError: true })
        return { priceError: true }
      }
      return null
    };
  }

  onDelete(id: number) {
    console.log(id);
  }


}
