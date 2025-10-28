import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <nav class="nav">
        <div class="nav-brand">
          <h2>Remote App 2</h2>
        </div>
        <ul class="nav-links">
          <li>
            <a 
              routerLink="/remote-2" 
              routerLinkActive="active" 
              [routerLinkActiveOptions]="{exact: true}"
              class="nav-link"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              routerLink="/remote-2/profile" 
              routerLinkActive="active"
              class="nav-link"
            >
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: #1976d2;
      color: white;
      padding: 0;
      margin-bottom: 2rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
    }
    
    .nav-brand h2 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }
    
    .nav-link {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: all 0.2s;
      font-weight: 500;
    }
    
    .nav-link:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);
    }
    
    .nav-link.active {
      background: rgba(255, 255, 255, 0.2);
      font-weight: 600;
    }
    
    @media (max-width: 768px) {
      .nav {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
      
      .nav-links {
        gap: 1rem;
      }
    }
  `]
})
export class HeaderComponent {}