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
  selector: 'app-games-explorer',
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
  templateUrl: './games-explorer.component.html',
  styleUrls: ['./games-explorer.component.css']
})
export class GamesExplorerComponent implements OnInit {
  categorias: any[] = [];
  categoriaSeleccionada: any;
  selectedSort: string = 'Relevancia';
  selectedCategories: string[] = [];
  sortOptions: any[] = [
    {label: 'Relevancia', value: 'Relevancia'}, 
    {label: 'Precio', value: 'Precio'},
    {label: 'Fecha de lanzamiento', value: 'Fecha'},
    {label: 'Alfabético', value: 'Alfabetico'}
  ];

  // Juegos organizados por categorías
  masVendidos: any[] = [];
  masBuscados: any[] = [];
  gratisPlus: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.categorias = [
      { label: 'Todos', value: 'todos' },
      { label: 'Acción', value: 'accion' },
      { label: 'Aventura', value: 'aventura' },
      { label: 'Deportes', value: 'deportes' },
      { label: 'Estrategia', value: 'estrategia' }
    ];

    this.masVendidos = [
      { 
        name: 'RAINBOX 6 SIEGE X', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqMQI3DVBgWL2tyVSrIEcg99CAx2oG6Ms2w&s',
        price: 'Gratis+',
        category: 'FREE ACCESS'
      },
      { 
        name: 'CALL OF DUTY', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIjH_PYQL1I9Ky7rcRS_nGE2IoMiHl1SJaw&s',
        price: 'Gratis+',
        category: 'FREE ACCESS'
      },
      { 
        name: 'MADDEN 20', 
        image: 'https://mx.static.webuy.com/product_images/Juegos/Xbox%20One%20Juegos/014633372878_l.jpg',
        price: 'Gratis+',
        category: 'SPORTS'
      }
    ];

    this.masBuscados = [
      { 
        name: 'BORDERLANDS 3', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldQhKNx7ONEJvgEQu6MMq7Fb_bXW9lvvz7Q&s',
        price: 'Gratis+',
        category: 'ACTION'
      },
      { 
        name: 'RAINBOX 6 SIEGE X', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnSS-LpGf4S3Rulim5x2bTGbiwYon141QgQ&s',
        price: 'Gratis+',
        category: 'FREE ACCESS'
      },
      { 
        name: 'CALL OF DUTY', 
         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIjH_PYQL1I9Ky7rcRS_nGE2IoMiHl1SJaw&s',
        price: 'Gratis+',
        category: 'FREE ACCESS'
      }
    ];

    this.gratisPlus = [
      { 
        name: 'RIVALS', 
        image: 'https://cdn2.unrealengine.com/01-1920x1080-1920x1080-88255a697e4f.jpg',
        price: 'Gratis',
        category: 'STRATEGY'
      },
      { 
        name: 'RAINBOX 6 SIEGE X', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiPt7A1FZJOqwRkWQBAfXdrJFmkWkPrdv8Q&s',
        price: 'Gratis+',
        category: 'FREE ACCESS'
      },
      { 
        name: 'BORDERLANDS 3', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-gtbaCLl7MkK-B3o7y8zo9OZ2tlhVuquHg&s',
        price: 'Gratis+',
        category: 'ACTION'
      }
    ];
  }

  navigateBack() {
    this.router.navigate(['/home-login']);
  }

  onGameClick(game: any) {
    console.log('Juego seleccionado:', game);
    // Aquí puedes navegar a la vista de detalles del juego
  }

  onCategoryChange() {
    console.log('Categoría seleccionada:', this.categoriaSeleccionada);
    // Aquí puedes filtrar los juegos por categoría
  }

  onSortChange() {
    console.log('Ordenamiento seleccionado:', this.selectedSort);
    // Aquí puedes ordenar los juegos
  }

  onFilterChange() {
    console.log('Filtros seleccionados:', this.selectedCategories);
    // Aquí puedes aplicar filtros adicionales
  }
}