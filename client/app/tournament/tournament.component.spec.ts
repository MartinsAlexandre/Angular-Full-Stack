import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TournamentComponent } from './tournament.component';

describe('Component: Tournament', () => {
  let component: TournamentComponent;
  let fixture: ComponentFixture<TournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TournamentComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the string "Tournament" in h4', () => {
    const el = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(el.textContent).toContain('Tournament');
  });

});
