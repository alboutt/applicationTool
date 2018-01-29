import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { ApplicationToolSharedModule, UserRouteAccessService } from './shared';
import { ApplicationToolAppRoutingModule} from './app-routing.module';
import { ApplicationToolHomeModule } from './home/home.module';
import { ApplicationToolAdminModule } from './admin/admin.module';
import { ApplicationToolAccountModule } from './account/account.module';
import { ApplicationToolEntityModule } from './entities/entity.module';
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
        ApplicationToolAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        ApplicationToolSharedModule,
        ApplicationToolHomeModule,
        ApplicationToolAdminModule,
        ApplicationToolAccountModule,
        ApplicationToolEntityModule,
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
export class ApplicationToolAppModule {}
