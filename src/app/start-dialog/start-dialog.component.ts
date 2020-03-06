import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TokenOption } from './start-dialog-model';

@Component({
    selector: 'start-dialog',
    templateUrl: './start-dialog.component.html',
    styleUrls: ['./start-dialog.component.scss']
})
export class StartDialogComponent {

    public startMessage: string;
    public tokenOption: TokenOption;

    /**
     * Constructor
     *
     * @param {MatDialogRef<StartDialogComponent>} _dialogRef
     */
    constructor(public _dialogRef: MatDialogRef<StartDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public startDialogData: any) {
        this.tokenOption = new TokenOption();
    }

    //Insert coin options
    insertCoin() {
        this._dialogRef.close(this.tokenOption);
    }
}
