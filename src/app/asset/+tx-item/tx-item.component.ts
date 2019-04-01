import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '@/app/core';

@Component({
    selector: 'tx-item',
    templateUrl: 'tx-item.component.html',
    styleUrls: ['tx-item.component.scss']
})
export class TxItemComponent implements OnInit {
    @Input() public time: number = 0;
    @Input() public value: string = '';
    @Input() public txid: string = '';
    constructor(
        private global: GlobalService
    ) { }

    ngOnInit(): void { }

    public txDetail(txid: string) {
        if (this.global.apiDomain.match('main') !== null) {
            window.open(`https://blolys.com/#/mainnet/transaction/${txid}`);
        }
    }
}
