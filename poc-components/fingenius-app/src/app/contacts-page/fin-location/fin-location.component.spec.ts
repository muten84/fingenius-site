import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinLocationComponent } from './fin-location.component';

describe('FinLocationComponent', () => {
  let component: FinLocationComponent;
  let fixture: ComponentFixture<FinLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
