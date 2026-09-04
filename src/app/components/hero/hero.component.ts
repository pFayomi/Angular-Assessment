import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  // Signal-based @Input()s - headline/subtext are no longer hardcoded
  // inside this component, they're passed down by the parent page.
  readonly headline = input.required<string>();
  readonly subtext = input.required<string>();
  readonly midtext = input.required<string>();
  readonly purchasetext = input.required<string>();
  readonly ctaLabel = input('Get Started');

  // The primary CTA emits an event instead of using an inline onclick.
  readonly ctaClicked = output<void>();

  onCtaClick(): void {
    this.ctaClicked.emit();
  }
}
