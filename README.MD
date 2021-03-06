# Angular DateTimePicker

**Angular date time picker - Angular reusable UI component**
**This package supports Angular 4**

### Description

Simple Angular date time picker. Online demo is [here](https://ng-community.github.io/date-time-picker/). 
This picker is responsive design, so feel free to try it in your desktops, tablets and mobile devices. 
This picker uses  [date-fns](https://date-fns.org/).

### How to Use

1. Install with [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com):

```bash
npm install @ng-community/date-time-picker --save
```

or

```bash
yarn add @ng-community/date-time-picker
```

2. Add fonts:

```css
@font-face {
    font-family: 'fontello';
    src: url('./assets/fonts/fontello.eot?81091010');
    src: url('./assets/fonts/fontello.eot?81091010#iefix') format('embedded-opentype'),
    url('./assets/fonts/fontello.woff2?81091010') format('woff2'),
    url('./assets/fonts/fontello.woff?81091010') format('woff'),
    url('./assets/fonts/fontello.ttf?81091010') format('truetype'),
    url('./assets/fonts/fontello.svg?81091010#fontello') format('svg');
    font-weight: normal;
    font-style: normal;
}
```

3. import __FormsModule__, __BrowserAnimationsModule__, __DateTimePickerModule__,  to your __@NgModule__ like example below

```js
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyTestApp } from './my-test-app';

import { DateTimePickerModule } from '@ng-community/date-time-picker';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        DateTimePickerModule,
        BrowserAnimationsModule
    ],
    declarations: [ MyTestApp ],
    bootstrap:    [ MyTestApp ]
})
export class MyTestAppModule {}
```

4. If you are using __systemjs__ package loader add the following `@ng-community/date-time-picker` properties to the __System.config__:
```js
(function (global) {
    System.config({
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            // Other components are here...

            '@ng-community/date-time-picker': 'npm:@ng-community/date-time-picker',
        },
        packages: {
            // Other components are here...

        // the picker
            '@ng-community/date-time-picker': {
                main: 'picker.bundle.js',
                defaultExtension: 'js'
            },
        }
    });
})(this);
```
5. Add picker component to your component:
```<owl-date-time [(ngModel)]="moment" ></owl-date-time>```

### Properties

|Name|Type|Required|Default|Description|
|:--- |:--- |:--- |:--- |:--- |
|`dataType`|string|Optional|`'date'`| Type of the value to write back to ngModel. Default type is Javascript Date object. You could change it as string type |
|`dateFormat`|string|Optional|`YYYY/MM/DD HH:mm`| Format of the date. You could find more in [this](https://date-fns.org/v1.28.5/docs/format).|
|`disabled`|boolean|Optional|`false`| When specified, disables the component.|
|`disabledDates`|Array-Date[]|Optional|`null`|Array with dates that should be disabled (not selectable).|
|`disabledDays`|Array-number[]|Optional|`null`|Array with weekday numbers that should be disabled (not selectable). Start from 0(Sunday) to 6(Saturday).|
|`hourFormat`|string|Optional|`'24'`|Specify the hour format, valid values are '12' and '24'.|
|`inline`|boolean|Optional|`false`|When enabled, displays the picker as inline. Default is false for popup mode.|
|`inputId`|string|Optional|`null`|Identifier of the focus input to match a label defined for the component.|
|`inputStyle`|Object|Optional|`null`|Inline style of the picker text input.|
|`inputStyleClass`|string|Optional|`null`|Style class of the picker text input.|
|`locale`|Object|Optional|`null`|An object having regional configuration properties for the dateTimePicker. You could learn more in below.|
|`maxDateCount`|number|Optional|`null`|Maximum number of selectable dates in multiple mode.|
|`max`|Date / string|Optional|`null`|Set the maximum date/time that is selectable.|
|`min`|Date / string|Optional|`null`|Set the minimum date/time that is selectable.|
|`placeHolder`|string|Optional|`'yyyy/mm/dd hh:mm'`|Placeholder text for the input.|
|`required`|boolean|Optional|`false`|When present, it specifies that an input field must be filled out before submitting the form.|
|`selectionMode`|string|Optional|`'single'`|Defines the quantity of the selection, valid values are "single", "multiple" and "range".|
|`showHeader`|boolean|Optional|`false`|Defines whether to show the picker dialog header.|
|`showOtherMonths`|boolean|Optional|`true`|When it is set to false, it would only show current month's days in calendar.|
|`showSecondsTimer`|boolean|Optional|`false`|Defines whether to show a timer to control time's second value.|
|`style`|Object|Optional|`null`|Inline style of the whole component.|
|`styleClass`|string|Optional|`null`|Style class of the whole component.|
|`tabIndex`|number|Optional|`null`|Index of the element in tabbing order.|
|`type`|string|Optional|`'both'`|Specify the type of the date-time picker, valid value are 'both', 'calendar' and 'timer'.|

### Events

|Events|Parameter|Description|
|:--- |:--- |:--- |
|`onBlur`|event: Blur event|Callback to invoke on blur of input field|
|`onFocus`|event: Focus event|Callback to invoke on focus of input field.|
|`onInvalid`|originalEvent: event, value: invalid date-time value|Callback to invoke when a invalid date-time value is selected.|


### Styling

Following is the list of structural style classes.

|Name|Element|
|:--- |:--- |
|`owl-dateTime`|Wrapper of the whole element|
|`owl-dateTime-input`|Input element|
|`owl-dateTime-dialog`|Wrapper of the dropdown dialog|

### DateFormat

Default date format is 'YYYY/MM/DD HH:mm', to customize this use dateFormat property.
Following options can be a part of the format.

 - s - second of the time value (no leading zero 0, 1, ..., 59)
 - ss - second of the time value (two digits 00, 01, ..., 59)
 - m - minute of the time value (no leading zero 0, 1, ..., 59)
 - mm - minute of the time value (two digits 00, 01, ..., 59)
 - h - hour of the time value, 12 hour format (no leading zero 1, 2, ..., 12)
 - hh - hour of the time value, 12 hour format (two digits 01, 02, ..., 12)
 - H - hour of the time value, 24 hour format (no leading zero 0, 1, ..., 23)
 - HH - hour of the time value, 24 hour format (two digits 00, 01, ..., 23)
 - A - meridian of the time value (AM, PM)
 - a - meridian of the time value (am, pm)
 - D - day of the month (no leading zero 1, 2, ..., 31)
 - DD - day of the month (two digits 01, 02, ..., 31)
 - M - month of the year (no leading zero 1, 2, ..., 12)
 - MM - month of the year (two digits 01, 02, ..., 12)
 - MMM - month of the year (Jan, Feb, ..., Dec)
 - MMMM - month of the year (January, February, ..., December)
 - YYYY - year(2015, 2016, 2017 ...)
 
Your could learn more about this from [here](https://date-fns.org/v1.28.5/docs/format).

### Localization

Localization for different languages and formats is defined by binding the locale settings object to the locale property. Following is the default values for English.

```
<owl-date-time [(ngModel)]="dateValue" [locale]="en"></owl-date-time>
```

```js
export class MyModel {
    
    en: any;
    
    ngOnInit() {
        this.en = {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
        };
    }
}
```

If you want the formatted date time to be localized as well, you need to npm install [date-fns](https://date-fns.org/).

```
<owl-date-time [(ngModel)]="dateValue" [locale]="es"></owl-date-time>
```

```js
export class MyModel {
    
    es: any;
    esLocale = require('date-fns/locale/es')
    
    ngOnInit() {
        this.es = {
			 firstDayOfWeek: 1,
		     dayNames:["domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
		     dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
		     monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
		     monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
		     dateFns: esLocale
        };
    }
}
```

### Dependencies

- [date-fns](https://date-fns.org/)

```bash
npm install date-fns --save
```

or

```bash
yarn install date-fns
```


### Demo
Online demo is [here](https://ng-community.github.io/#/date-time-picker)

### License
* License: MIT

### Author
**HieuNV**