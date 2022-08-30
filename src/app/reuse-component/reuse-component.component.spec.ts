import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseComponentComponent } from './reuse-component.component';

describe('ReuseComponentComponent', () => {
  let component: ReuseComponentComponent;
  let fixture: ComponentFixture<ReuseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
