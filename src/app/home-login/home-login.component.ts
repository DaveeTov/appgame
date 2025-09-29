import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// PrimeNG imports
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
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {
  categorias: any[] = [];
  categoriaSeleccionada: any;
  juegos: any[] = [];
  selectedSort: string = 'Relevancia';
  selectedCategories: string[] = [];
  sortOptions: any[] = [
    {label: 'Relevancia', value: 'Relevancia'}, 
    {label: 'Precio', value: 'Precio'}
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.categorias = [
      { label: 'Todos', value: 'todos' },
      { label: 'Acción', value: 'accion' },
      { label: 'Aventura', value: 'aventura' },
      { label: 'Deportes', value: 'deportes' },
      { label: 'Estrategia', value: 'estrategia' },
      { label: 'Multijugador', value: 'multiplayer' }
    ];

    this.juegos = [
      { name: 'Minecraft', image: 'https://xboxwire.thesourcemediaassets.com/sites/4/15YR_Free_Cape-1-7cbcb0739e3df57534ec-9063efed017354d1b1c3.jpg' },
      { name: 'Hollow Knight: Silksong', image: 'https://sm.ign.com/t/ign_latam/cover/h/hollow-kni/hollow-knight-silksong_vja9.1200.jpg' },
      { name: 'Sea of Thieves', image: 'https://blogs-images.forbes.com/erikkain/files/2018/03/sea-of-thieves-4.jpg' },
      { name: 'We Love Katamari', image: 'https://store-images.s-microsoft.com/image/apps.12124.14631306133674629.687e7683-f6ad-44db-a9b9-f0ee9c5b3b07.782c17f1-9d9a-4be4-90e7-0846c9433898?q=90&w=177&h=265' }
    ];
  }

  // Navegación general al explorador de juegos
  navigateToGamesExplorer() {
    this.router.navigate(['/games-explorer']);
  }

  // Navegación específica cuando seleccionan categoría desde dropdown
  onCategoryChange() {
    console.log('Categoría seleccionada:', this.categoriaSeleccionada);
    
    if (this.categoriaSeleccionada && this.categoriaSeleccionada.value === 'multiplayer') {
      this.navigateToGamesExplorer();
    } else if (this.categoriaSeleccionada) {
      // Navegar al explorador con filtro específico
      this.router.navigate(['/games-explorer'], { 
        queryParams: { category: this.categoriaSeleccionada.value } 
      });
    }
  }

  // Click específico en el checkbox/label de Multijugador
  onMultiplayerClick() {
    this.navigateToGamesExplorer();
  }

  // Otros métodos para filtros
  onFilterChange() {
    console.log('Filtros seleccionados:', this.selectedCategories);
    
    if (this.selectedCategories.includes('multiplayer')) {
      this.navigateToGamesExplorer();
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}