import { Component, Input, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() name: string;

  constructor(public BitcoinService: BitcoinService) {
    this.BitcoinService.getStatus();
  }
  ngOnInit() {
  }

}

