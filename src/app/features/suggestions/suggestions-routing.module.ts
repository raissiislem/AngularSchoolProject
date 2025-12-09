import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionDetailComponent } from './suggestion-detail/suggestion-detail.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';

const routes: Routes = [
  { path: '', component: SuggestionsComponent, children:[
     { path: '', component: ListSuggestionComponent },
     { path: ':id', component: SuggestionDetailComponent }

  ] },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
