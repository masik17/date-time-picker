import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DateTimePickerComponent } from './components';
import { NumberFixedLenPipe } from './pipes';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [DateTimePickerComponent],
    declarations: [DateTimePickerComponent, NumberFixedLenPipe],
    providers: [],
})
export class DateTimePickerModule { }
