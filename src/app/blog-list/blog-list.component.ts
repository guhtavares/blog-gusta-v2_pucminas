import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  standalone: true,
  imports: [CommonModule], // Importando o CommonModule para usar *ngFor
})
export class BlogListComponent {
  posts = [
    {
      title: '5 dicas para sua carreira profissional',
      summary:
        '<ul><li>1.Mantenha-se Atualizado com as Tecnologias</li><li>2.Construa um Portfólio Sólido</li><li>3.Aprofunde-se em Ferramentas e Frameworks</li><li>4.Aprimore suas Habilidades de Design</li><li>5.Desenvolva Habilidades de Soft Skills</li></ul>',
    }
  ];
}
