import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list/list.service';

@Component({
  selector: 'app-prods-list',
  templateUrl: './prods-list.component.html',
  styleUrls: ['./prods-list.component.sass']
})
export class ProdsListComponent implements OnInit {

  currentProduct!: string;
  date!: string

  constructor(private listService: ListService) { }

  ngOnInit(): void {
     this.listService.get().subscribe(data => { console.log(data) });
    
  }

  // setDate() {
  //   this.listService.updateDate = new Date
  // }

}
