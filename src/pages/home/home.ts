import { Component } from '@angular/core';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = MapPage;
  tab2Root: any = ListPage;

  constructor(){

  }

}