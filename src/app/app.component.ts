import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'antazricom-vps-home';
  projects = [
    {
      'name': 'Boten Anna Discord',
      'date': new Date('2021-01-01'),
      'description': 'Bot Discord pour jouer au Mastermind',
      'imageFile': 'discord.png',
      'url': '#',
      'available': false
    },
    {
      'name': 'VPS',
      'date': new Date('2021-02-01'),
      'description': 'VPS Server to test projects',
      'imageFile': 'notfound.png',
      'url': 'https://vps.antazri.com',
      'available': true
    },
    {
      'name': 'Boten Anna Discord',
      'date': new Date('2021-03-01'),
      'description': 'Bot Discord pour jouer au Mastermind',
      'imageFile': 'discord.png',
      'url': '#',
      'available': true
    }
  ];
}
