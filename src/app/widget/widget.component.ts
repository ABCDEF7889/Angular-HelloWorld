import { Component, OnInit } from '@angular/core';

// full lib (works on Stackblitz and Angular CLI / webpack)
import { cloneDeep } from 'lodash';

// only clonedeep, which is smaller
// but only works on Stackkblitz out of the box!
//
// add tsconfig.json > compilerOptionsallowSyntheticDefaultImports: true when using Angular CLI / webpack)
// import cloneDeep from 'lodash.clonedeep';

@Component({
  selector: 'app-widget-example',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  public output1: any;
  public output2: any;

  ngOnInit() {

    const nestedObject = {
      nested: {
        hello: 'world'
      }
    }
    const deepCopy = cloneDeep(nestedObject);

    nestedObject === deepCopy // false
    nestedObject.nested === deepCopy.nested // false (it's a deep copy)

    this.output1 = nestedObject;
    this.output2 = deepCopy;
  }

}