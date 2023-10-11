import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Word } from '../interfaces/word';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  newName: string = '';
  newContent: string  = '';

  // 2. 建立發射器
  @Output() dataEmit = new EventEmitter<Word>();
  // 接收父元件傳來的監聽事件
  @Input() clearInfoForm: boolean = false;

  // 初始化，可給初始值
  ngOnInit(): void {

  }

  // 監聽值改變
  ngOnChanges(changes: SimpleChanges): void {
    // 當監聽到 clearForm 值改變時，清空子元件 input 的值
    if (changes['clearInfoForm']?.currentValue) {
      this.newName = '';
      this.newContent = '';
    }
  }

  onAddRed() {
    // 1. 先組裝好資料
    let data: Word = {
      type: 'redprint',
      name: this.newName,
      content: this.newContent,
    };
    // 3. 將組裝好的資料透過發射器送到父元件
    this.dataEmit.emit(data);
  }

  onAddBlue() {
    let data: Word = {
      type: 'blueprint',
      name: this.newName,
      content: this.newContent,
    }

    this.dataEmit.emit(data);
  }
}
