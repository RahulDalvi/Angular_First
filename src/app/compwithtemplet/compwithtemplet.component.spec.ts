import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompwithtempletComponent } from './compwithtemplet.component';

describe('CompwithtempletComponent', () => {
  let component: CompwithtempletComponent;
  let fixture: ComponentFixture<CompwithtempletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompwithtempletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompwithtempletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
