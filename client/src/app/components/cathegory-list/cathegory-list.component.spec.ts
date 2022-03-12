import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CathegoryListComponent } from './cathegory-list.component';

describe('CathegoryListComponent', () => {
  let component: CathegoryListComponent;
  let fixture: ComponentFixture<CathegoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CathegoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CathegoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
