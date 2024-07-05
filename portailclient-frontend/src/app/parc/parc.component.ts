// parc.component.ts
import { Component, OnInit } from '@angular/core';
import { ParcService} from "../parc.service";
import { Parc } from './parc.model';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-parc',
  templateUrl: './parc.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./parc.component.css']
})
export class ParcComponent implements OnInit {

  parcs: Parc[] = [];
  parc: Parc = { nom: '', localisation: '', superficie: 0 };
  editMode = false;

  constructor(private parcService: ParcService) { }

  ngOnInit(): void {
    this.getParcs();
  }

  getParcs(): void {
    this.parcService.getParcs().subscribe(data => {
      this.parcs = data;
    });
  }

  createParc(): void {
    this.parcService.createParc(this.parc).subscribe(data => {
      this.parcs.push(data);
      this.parc = { nom: '', localisation: '', superficie: 0 };
    });
  }

  updateParc(): void {
    this.parcService.updateParc(this.parc.id, this.parc).subscribe(data => {
      this.getParcs();
      this.parc = { nom: '', localisation: '', superficie: 0 };
      this.editMode = false;
    });
  }

  deleteParc(id: string | undefined): void {
    this.parcService.deleteParc(id).subscribe(() => {
      this.parcs = this.parcs.filter(p => p.id !== id);
    });
  }

  editParc(parc: Parc): void {
    this.parc = { ...parc };
    this.editMode = true;
  }

  clear(): void {
    this.parc = { nom: '', localisation: '', superficie: 0 };
    this.editMode = false;
  }
}
