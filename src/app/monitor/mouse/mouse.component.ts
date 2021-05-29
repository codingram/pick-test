import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  @Input() offName!: string;
  @Input() onnName!: string;

  @Output() changeStatus = new EventEmitter();
  constructor() {
    console.log('constructor')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  changePowerStatus(status: boolean) {
    this.changeStatus.emit(status);
  }

}
