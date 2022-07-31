import { CategoryDTO } from './../../shared/dtos/category.dto';
import { TeamDTO } from './../../shared/dtos/team.dto';
import { TeamService } from 'src/app/core/services/team.service';
import { BeltDTO } from '../../shared/dtos/belt.dto';
import { CategoryService } from './../../core/services/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-competitor',
  templateUrl: './register-competitor.component.html',
  styleUrls: ['./register-competitor.component.scss']
})
export class RegisterCompetitorComponent implements OnInit {

  formCompetitor!: FormGroup;

  text!: string;

  belts!: BeltDTO[];
  teams!: TeamDTO[];
  categories!: CategoryDTO[];
  filterCategories!: string[];

  constructor(private fb: FormBuilder, 
    private categoryService: CategoryService,
    private teamService: TeamService
    ) {
  }

  ngOnInit() {
    this.categoryService.getBelts().subscribe((res) => this.belts = res);
    this.teamService.getTeam().subscribe((res) => this.teams = res);
    this.categoryService.getAll().subscribe((categories: CategoryDTO[]) => {
      this.categories = categories;
      
      this.filterCategories = categories.map((category) => {
        const { division, gender, maturity, max_weight } = category;
        return division.concat('-').concat(maturity).concat('-').concat(gender).concat('-').concat(max_weight)
      })
    });
    
    this.createForm();
  }

  createForm() {
    this.formCompetitor = this.fb.group({
      name: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      age: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],
      weight: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],
      belt: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],
      idTeam: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],
      idCategory: [
        "",
        Validators.compose([
          Validators.required
        ])
      ]
    })
  }

  onSubmit() {
    console.log(this.formCompetitor?.value);
  }

  private resertForm = () => this.formCompetitor.reset();

  search(event: any) {
    console.log(event);
    this.filterCategories = this.filterCategories.filter((res) => res.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
  }

}
