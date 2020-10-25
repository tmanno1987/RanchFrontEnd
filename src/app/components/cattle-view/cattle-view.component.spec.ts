import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleViewComponent } from './cattle-view.component';

describe('CattleViewComponent', () => {
  let component: CattleViewComponent;
  let fixture: ComponentFixture<CattleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CattleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CattleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
