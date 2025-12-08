import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-detail',
  templateUrl: './suggestion-detail.component.html',
  styleUrls: ['./suggestion-detail.component.css']
})
export class SuggestionDetailComponent implements OnInit {
  suggestionId!: number;
  suggestion!: Suggestion;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.suggestionId = +params['id'];
      // Ici tu peux récupérer la suggestion correspondante depuis un service ou tableau
      // Exemple avec un tableau statique :
      const allSuggestions: Suggestion[] = [
        // copie des suggestions du ListSuggestionComponent
      ];
      this.suggestion = allSuggestions.find(s => s.id === this.suggestionId)!;
    });
  }

  goBack() {
    this.router.navigate(['/suggestions']);
  }
}
