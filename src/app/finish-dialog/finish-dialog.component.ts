import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'finish-dialog',
    templateUrl: './finish-dialog.component.html',
    styleUrls: ['./finish-dialog.component.scss']
})
export class FinishDialogComponent {

    public finishMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<FinishDialogComponent>} _dialogRef
     */
    constructor(public _dialogRef: MatDialogRef<FinishDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public finishDialogData: any) {
    }

    //Start new game
    startNewGame() {
        this._dialogRef.close(true);
    }
}
