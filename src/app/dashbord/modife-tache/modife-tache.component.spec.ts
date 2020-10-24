import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifeTacheComponent } from './modife-tache.component';

describe('ModifeTacheComponent', () => {
  let component: ModifeTacheComponent;
  let fixture: ComponentFixture<ModifeTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifeTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifeTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
