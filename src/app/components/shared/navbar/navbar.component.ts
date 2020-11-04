import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchHero(searchText: string): void {
    console.log(searchText);
    this.router.navigate(['/result-search', searchText]);
  }
}
