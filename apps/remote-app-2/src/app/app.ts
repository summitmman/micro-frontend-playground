import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './components/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('remote-app-2');
  private boundHandleHostRouteChange: EventListener;

  constructor(private router: Router) {
    this.boundHandleHostRouteChange = this.handleHostRouteChange.bind(this) as EventListener;
  }

  ngOnInit() {
    window.addEventListener('host-route-change', this.boundHandleHostRouteChange);
  }

  ngOnDestroy() {
    window.removeEventListener('host-route-change', this.boundHandleHostRouteChange);
  }

  private handleHostRouteChange(event: Event) {
    const customEvent = event as CustomEvent;
    const { basePath, subPath } = customEvent.detail;
    
    // Only respond to events for this remote app
    if (basePath === '/remote-2') {
      console.log('Remote App 2 (Angular): Navigating to', `/remote-2${subPath}`);
      this.router.navigate([`/remote-2${subPath}`]);
    }
  }
}
