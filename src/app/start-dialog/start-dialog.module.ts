import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule,} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { StartDialogComponent } from './start-dialog.component';

@NgModule({
    declarations: [
        StartDialogComponent
    ],
    imports: [
        FormsModule,
        MatRadioModule,
        MatDialogModule,
        MatButtonModule,
    ],
    entryComponents: [
        StartDialogComponent
    ],
})
export class StartDialogModule {
}