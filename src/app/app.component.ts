import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogListComponent } from './blog-list/blog-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, ProfileComponent, BlogListComponent],
})
export class AppComponent {
  title = 'your-app-name';
}
