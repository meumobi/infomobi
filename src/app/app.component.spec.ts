import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';

import { AnalyticsProvider } from '../shared/analytics.service';
import { AuthService } from '../providers/auth';
import { AuthDataPersistenceService } from '../providers/auth-data-presistence';
import { MyApp } from './app.component';
import { createTranslateLoader } from "./app.module";

import {} from 'jasmine';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../test-config/mocks-ionic';
import {
  AnalyticsMock,
  AuthMock,
  AuthDataPersistenceMock
} from '../../test-config/mocks-master-details';

describe('MyApp Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp),
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        })
      ],
      providers: [
        TranslateService,
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock },
        { provide: AnalyticsProvider, useClass: AnalyticsMock },
        { provide: AuthService, useClass: AuthMock },
        { provide: AuthDataPersistenceService, useClass: AuthDataPersistenceMock },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof MyApp).toBe(true);
  });

  it('should have two pages', () => {
    expect(component.pages.length).toBe(2);
  });
});