import { Component } from '@angular/core';
import { Word } from '../interfaces/word';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  // 6. 將資料渲染到 HTML
  serverElements: Word[]  = [];
  clearInfoMain: boolean = false;

  // 5. 父元件接收子元件送來的資料
  mainGetFormData(formData: Word) {
    this.serverElements.push(formData);
  }

  clear(){
    this.serverElements.length = 0;
    this.clearInfoMain = !this.clearInfoMain;
  }
}

