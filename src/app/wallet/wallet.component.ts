import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(public BitcoinService: BitcoinService, public timer: TimerService) {
    this.timer.start();
   }


  getCompra(){

  }

  ngOnInit() {
  }

}