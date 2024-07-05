import { Component, OnInit } from '@angular/core';
import { NavireService} from "../navire.service";
import { Navire } from './navire.model';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-navire',
  templateUrl: './navire.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./navire.component.css']
})
export class NavireComponent implements OnInit {

  navires: Navire[] = [];
  navire: Navire = { name: '', type: '', capacity: 0 };
  editMode = false;

  constructor(private navireService: NavireService) { }

  ngOnInit(): void {
    this.getNavires();
  }

  getNavires(): void {
    this.navireService.getNavires().subscribe(data => {
      this.navires = data;
    });
  }

  createNavire(): void {
    this.navireService.createNavire(this.navire).subscribe(data => {
      this.navires.push(data);
      this.navire = { name: '', type: '', capacity: 0 };
    });
  }

  updateNavire(): void {
    this.navireService.updateNavire(this.navire.id, this.navire).subscribe(data => {
      this.getNavires();
      this.navire = { name: '', type: '', capacity: 0 };
      this.editMode = false;
    });
  }

  deleteNavire(id: string | undefined): void {
    this.navireService.deleteNavire(id).subscribe(() => {
      this.navires = this.navires.filter(n => n.id !== id);
    });
  }

  editNavire(navire: Navire): void {
    this.navire = { ...navire };
    this.editMode = true;
  }

  clear(): void {
    this.navire = { name: '', type: '', capacity: 0 };
    this.editMode = false;
  }
}
