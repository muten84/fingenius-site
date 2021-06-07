import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinHeaderComponent } from './fin-header.component';

describe('FinHeaderComponent', () => {
  let component: FinHeaderComponent;
  let fixture: ComponentFixture<FinHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
