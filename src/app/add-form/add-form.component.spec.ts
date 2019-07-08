import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormComponent } from './add-form.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('AddFormComponent', () => {
  let component: AddFormComponent;
  let fixture: ComponentFixture<AddFormComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AddFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should track cost', async(() => {
    fixture.whenStable().then(() => {
      let costInput = fixture.debugElement.query(By.css('[name=cost]'));
      let costInputEl = costInput.nativeElement;
      costInputEl.value = '1234';
      var event = new Event("input", {});
      costInputEl.dispatchEvent(event);
      expect(fixture.componentInstance.payment.cost).toBe('1234');
    });
  }));

  
  it('should track name', async(() => {
    fixture.whenStable().then(() => {      
      let nameInput = fixture.debugElement.query(By.css('[name=name]'));
      let nameInputEl = nameInput.nativeElement;
      nameInputEl.value='asd';
      var event = new Event("input", {});
      nameInputEl.dispatchEvent(event);
      expect(fixture.componentInstance.payment.name).toBe('asd');
    });
  }));

});
