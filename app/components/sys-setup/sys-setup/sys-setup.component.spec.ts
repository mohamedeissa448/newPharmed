import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysSetupComponent } from './sys-setup.component';

describe('SysSetupComponent', () => {
  let component: SysSetupComponent;
  let fixture: ComponentFixture<SysSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
