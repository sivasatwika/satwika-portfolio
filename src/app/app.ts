
import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './sections/home/home';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';
import { Education } from './sections/education/education';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Skills, Experience, Projects, Contact, Education],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
