import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, viewChild, } from '@angular/core';
import { getSVG } from '../../../../assets/icons/icon';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  template: `
   <div #icon></div>
  `,
  styles: ``
})
export class IconComponent implements AfterViewInit {
  @Input('name') iconName!: string;
  @Input('color') colorPreference!: 'dark' | 'light';

  @ViewChild('icon') iconEle!: ElementRef<HTMLDivElement>;
  ngAfterViewInit(): void {
    this.iconEle.nativeElement.innerHTML = getSVG(this.iconName, this.colorPreference) || '';
  }
}

