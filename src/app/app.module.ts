import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './ui/pages/main-page/main-page.component';
import { PilotPreviewComponent } from './ui/components/pilot-preview/pilot-preview.component';
import { SearchBoxComponent } from './ui/components/search-box/search-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PilotGateway } from './domain/pilot/gateway/pilot.gateway';
import { PilotService } from './infrastructure/driven-adapter/pilot.service';
import { HeaderComponent } from './ui/components/header/header.component';
import { SearchMessageComponent } from './ui/components/search-message/search-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PilotPreviewComponent,
    SearchBoxComponent,
    HeaderComponent,
    SearchMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: PilotGateway,
      useClass: PilotService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
