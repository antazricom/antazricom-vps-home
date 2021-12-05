import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() name: string = 'Noname Project';
  @Input() date: Date = new Date();
  @Input() description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  @Input() url: string = '#';
  @Input() available: boolean = false;

  @Input() imageFile: string = 'notfound.png';
  imgSrc: string = '/assets/images/project/notfound.png';
  imgHeight = 64;
  imgWidth = 64;

  constructor() {}

  ngOnInit(): void {
    this.imgSrc = '/assets/images/project/' + this.imageFile;
    console.log(`Add ${this.name} to project list in homepage`);
  }

}
