import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { RfbloyalitySharedModule, UserRouteAccessService } from './shared';
import { RfbloyalityAppRoutingModule} from './app-routing.module';
import { RfbloyalityHomeModule } from './home/home.module';
import { RfbloyalityAdminModule } from './admin/admin.module';
import { RfbloyalityAccountModule } from './account/account.module';
import { RfbloyalityEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        RfbloyalityAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        RfbloyalitySharedModule,
        RfbloyalityHomeModule,
        RfbloyalityAdminModule,
        RfbloyalityAccountModule,
        RfbloyalityEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class RfbloyalityAppModule {}
