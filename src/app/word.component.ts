import { Component } from '@angular/core';

@Component({
    // Day-1
    // Component decorators
    // template: Khai báo file UI của component (file .html hoặc html)
    // template: '<h3>This is word component</h3>',
    templateUrl: './word.component.html',
    //  selector: Tên thẻ component (dùng như thẻ html)
    selector: 'app-word',
    styleUrls: ['./word.component.scss']
})

export class WordComponent {}
