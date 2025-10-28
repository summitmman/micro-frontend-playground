import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <div class="profile-container">
      <h1>Profile</h1>
      <div class="profile-card">
        <div class="profile-header">
          <div class="avatar">
            <span>👤</span>
          </div>
          <div class="profile-info">
            <h2>Angular User</h2>
            <p class="role">Remote App 2 User</p>
          </div>
        </div>
        
        <div class="profile-details">
          <h3>User Information</h3>
          <div class="info-grid">
            <div class="info-item">
              <strong>Application:</strong>
              <span>Remote App 2 (Angular)</span>
            </div>
            <div class="info-item">
              <strong>Framework:</strong>
              <span>Angular {{ angularVersion }}</span>
            </div>
            <div class="info-item">
              <strong>Architecture:</strong>
              <span>Micro Frontend</span>
            </div>
            <div class="info-item">
              <strong>Type:</strong>
              <span>Standalone Components</span>
            </div>
          </div>
        </div>
        
        <div class="profile-actions">
          <button class="btn primary">Edit Profile</button>
          <button class="btn secondary">Settings</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }
    
    h1 {
      color: #1976d2;
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }
    
    .profile-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    
    .profile-header {
      background: linear-gradient(135deg, #1976d2, #42a5f5);
      color: white;
      padding: 2rem;
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
    
    .avatar {
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }
    
    .profile-info h2 {
      margin: 0 0 0.5rem 0;
      font-size: 1.5rem;
    }
    
    .role {
      margin: 0;
      opacity: 0.9;
      font-size: 1rem;
    }
    
    .profile-details {
      padding: 2rem;
    }
    
    .profile-details h3 {
      color: #333;
      margin: 0 0 1.5rem 0;
      font-size: 1.2rem;
    }
    
    .info-grid {
      display: grid;
      gap: 1rem;
    }
    
    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 0;
      border-bottom: 1px solid #eee;
    }
    
    .info-item:last-child {
      border-bottom: none;
    }
    
    .info-item strong {
      color: #555;
      font-weight: 600;
    }
    
    .info-item span {
      color: #1976d2;
      font-weight: 500;
    }
    
    .profile-actions {
      padding: 1.5rem 2rem 2rem;
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    
    .btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .btn.primary {
      background: #1976d2;
      color: white;
    }
    
    .btn.primary:hover {
      background: #1565c0;
      transform: translateY(-1px);
    }
    
    .btn.secondary {
      background: #f5f5f5;
      color: #666;
    }
    
    .btn.secondary:hover {
      background: #e0e0e0;
      transform: translateY(-1px);
    }
  `]
})
export class ProfileComponent {
  angularVersion = '20';
}