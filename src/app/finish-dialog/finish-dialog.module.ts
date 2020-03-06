import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule, } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FinishDialogComponent } from './finish-dialog.component';

@NgModule({
    declarations: [
        FinishDialogComponent
    ],
    imports: [
        FormsModule,
        MatRadioModule,
        MatDialogModule,
        MatButtonModule,
    ],
    entryComponents: [
        FinishDialogComponent
    ],
})
export class FinishDialogModule {
}