import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleDealsComponent } from './cattle-deals.component';

describe('CattleDealsComponent', () => {
  let component: CattleDealsComponent;
  let fixture: ComponentFixture<CattleDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CattleDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CattleDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
