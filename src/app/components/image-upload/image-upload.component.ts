import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  selectedFiles: FileList;
  progressInfo = [];
  message: string = '';
  fileInfo: Observable<any>;

  constructor(private us: UploadService) { }

  ngOnInit(): void {
    this.fileInfo = this.us.getFiles();
  }

  selectFiles(event): void {
    this.progressInfo = [];
    const files = event.target.files;
    let isImg: boolean = true;

    for (let f of files) {
      if (f.item().type.match('image.*')) {
        continue;
      } else {
        isImg = false;
        alert('Invalid Format: Images only..');
        break;
      }
    }

    if (isImg) {
      this.selectedFiles = event.target.files;
    } else {
      this.selectedFiles = undefined;
      event.srcElement.percentage = null;
    }
  }

  uploadFiles(): void {
    this.message = '';

    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }

  upload(index, file): void {
    this.progressInfo[index] = {
      value: 0,
      fileName: file.name
    };

    this.us.upload(file).subscribe(
      d => {
        if (d.type === HttpEventType.UploadProgress) {
          this.progressInfo[index].percentage = Math.round(100 * d.loaded / d.total);
        }
        else if (d instanceof HttpResponse) {
          this.fileInfo = this.us.getFiles();
        }
      },
      e => {
        this.progressInfo[index].percentage = 0;
        this.message = `Could not upload file: ${file.name}`;
      }
    );
  }
}
