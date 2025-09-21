import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // <-- importar Router
import { DropdownModule } from 'primeng/dropdown';
import { AvatarModule } from 'primeng/avatar';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    AvatarModule,
    CarouselModule,
    ButtonModule,
    AccordionModule,
    CheckboxModule,
    SelectButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categorias: any[] = [];
  categoriaSeleccionada: any;
  juegos: any[] = [];
  selectedSort: string = 'Relevancia';
  selectedCategories: string[] = [];
  sortOptions: any[] = [{label: 'Relevancia', value: 'Relevancia'}, {label: 'Precio', value: 'Precio'}];

  constructor(private router: Router) {} // <-- inyectar Router

  ngOnInit() {
    this.categorias = [
      { label: 'Acción', value: 'accion' },
      { label: 'Aventura', value: 'aventura' },
      { label: 'Deportes', value: 'deportes' },
      { label: 'Estrategia', value: 'estrategia' }
    ];

    this.juegos = [
      { name: 'Minecraft', image: 'https://xboxwire.thesourcemediaassets.com/sites/4/15YR_Free_Cape-1-7cbcb0739e3df57534ec-9063efed017354d1b1c3.jpg' },
      { name: 'Hollow Knight: Silksong', image: 'https://sm.ign.com/t/ign_latam/cover/h/hollow-kni/hollow-knight-silksong_vja9.1200.jpg' },
      { name: 'Sea of Thieves', image: 'https://blogs-images.forbes.com/erikkain/files/2018/03/sea-of-thieves-4.jpg' },
      { name: 'We Love Katamari', image: 'https://store-images.s-microsoft.com/image/apps.12124.14631306133674629.687e7683-f6ad-44db-a9b9-f0ee9c5b3b07.782c17f1-9d9a-4be4-90e7-0846c9433898?q=90&w=177&h=265' }
    ];
  }

  navigateToLogin() {  // <-- función para navegar
    this.router.navigate(['/login']);
  }
}
