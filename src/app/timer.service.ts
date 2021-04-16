import { Injectable } from "@angular/core";
import { BitcoinService } from "./bitcoin.service";

@Injectable()
export class TimerService {
  constructor(public BitcoinService: BitcoinService) {}

  private timer: any;
  private counter: number = 0;
  // private counterMinutos: number = 0;

  start() {
    this.BitcoinService.update();
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.counter++;
        if (this.counter == 60) {
          this.BitcoinService.update();
          this.counter = 0;
          // this.counterMinutos++;
        }
      }, 100);
    }
  }
  getCount() {
    return this.counter;
  }


  // getCountMinutos() {
  //   return this.counterMinutos;
  // }
}
