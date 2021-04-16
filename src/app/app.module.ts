import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './wallet/wallet.component';
import { AlunoComponent } from './aluno/aluno.component';
import { TimerService } from './timer.service';
import { BitcoinService } from './bitcoin.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
    HttpClientModule,
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'bitcoin', component: BitcoinComponent},
      {path: 'wallet', component: WalletComponent},
    ])
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    NavbarComponent, 
    BitcoinComponent, 
    HomeComponent, 
    WalletComponent, 
    AlunoComponent 
    ],
  bootstrap:    [ AppComponent ],
  providers: [TimerService, BitcoinService]
})
export class AppModule { }
