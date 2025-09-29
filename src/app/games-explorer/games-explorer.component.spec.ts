import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesExplorerComponent } from './games-explorer.component';

describe('GamesExplorerComponent', () => {
  let component: GamesExplorerComponent;
  let fixture: ComponentFixture<GamesExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesExplorerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
