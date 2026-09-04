import { Component } from '@angular/core';

import { HeroComponent } from '../../components/hero/hero.component';
import { ShowcaseComponent } from '../../components/showcase/showcase.component';
import { ShowcaseCardComponent } from '../../components/showcase-card/showcase-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ShowcaseComponent, ShowcaseCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  onHeroCta(): void {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
