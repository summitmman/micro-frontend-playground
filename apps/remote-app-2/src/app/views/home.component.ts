import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-container">
      <h1>Home</h1>
      <p>Welcome to the Home page of Remote App 2 (Angular)!</p>
      <div class="content">
        <h2>Angular Application</h2>
        <p>This is the home view of the Angular remote application.</p>
        <ul>
          <li>Built with Angular</li>
          <li>Standalone components</li>
          <li>Module Federation ready</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    h1 {
      color: #1976d2;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    
    h2 {
      color: #333;
      font-size: 1.5rem;
      margin: 1.5rem 0 1rem 0;
    }
    
    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .content {
      background: #f5f5f5;
      padding: 1.5rem;
      border-radius: 8px;
      margin-top: 2rem;
    }
    
    ul {
      color: #666;
      padding-left: 1.5rem;
    }
    
    li {
      margin-bottom: 0.5rem;
    }
  `]
})
export class HomeComponent {}