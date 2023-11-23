import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompwithstyleComponent } from './compwithstyle.component';

describe('CompwithstyleComponent', () => {
  let component: CompwithstyleComponent;
  let fixture: ComponentFixture<CompwithstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompwithstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompwithstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
