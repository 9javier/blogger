import { Component, OnInit,OnDestroy ,ChangeDetectorRef, Input,AfterViewChecked} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { DataService } from '../../services/dataService';

@Component({
  selector: 'MenuComponent',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnDestroy, OnInit ,AfterViewChecked{

  @Input() name:String ="";
  @Input() departament: String  = "";
  @Input() itemsMenu:Array<any> = [];
  @Input() role:String="";
  mobileQuery: MediaQueryList;
  public menuActive:String="";


  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private router: Router,
    private dataService :DataService
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

   ngAfterViewChecked() {
  
    this.initMenu()
  }


  ngOnInit(): void {

  }

  initMenu(){
    
    if(this.menuActive.length <= 0){
      this.itemsMenu.map((menu,i) =>{
        if(i==0){
          this.menuActive = menu.name;
        }
      })
    }
   
  }
  changeMenu(menu){
    if(menu == 'Salir'){
      this.dataService.logueado = false;
      this.router.navigate(['']);
    }
    else{
      this.menuActive = menu;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

}
