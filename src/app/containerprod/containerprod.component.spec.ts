import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerprodComponent } from './containerprod.component';

describe('ContainerprodComponent', () => {
  let component: ContainerprodComponent;
  let fixture: ComponentFixture<ContainerprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
