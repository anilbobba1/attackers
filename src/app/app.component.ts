import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StartDialogComponent } from './start-dialog/start-dialog.component';
import { TokenOption } from './start-dialog/start-dialog-model';

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public tokenOption: TokenOption;
    public gameStatus = "Iniciando";
    public title = 'Attackers';

    constructor(public _dialog: MatDialog) {
        this.tokenOption = new TokenOption();
    }

    ngOnInit(): void {
        this.showGameOptionDialog();
    }

    showGameOptionDialog() {
        const dialogRef = this._dialog.open(StartDialogComponent, {
            width: '400px',
            data: { confirmMessage: "" }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.tokenOption = result;
                console.log(this.tokenOption);
            }
        });
    }
}