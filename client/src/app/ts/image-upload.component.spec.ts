import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageUploadComponent } from '../components/image-upload/image-upload.component';

describe('ImageUploadComponent', () => {
  let component: ImageUploadComponent;
  let fixture: ComponentFixture<ImageUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageUploadComponent]
    });
    fixture = TestBed.createComponent(ImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
