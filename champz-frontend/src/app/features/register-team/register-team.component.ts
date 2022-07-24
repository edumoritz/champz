
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from 'src/app/core/models/Team';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.scss']
})
export class RegisterTeamComponent implements OnInit {

  formTeam!: FormGroup;

  cities: any[];

  constructor(private fb: FormBuilder, private teamService: TeamService) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formTeam = this.fb.group({
      name: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      initials: [
        "",
        Validators.compose([
          Validators.maxLength(5)
        ])
      ],
      city_state: [
        "",
        Validators.compose([
          Validators.required
        ])
      ]
    })
  }

  onSubmit() {
		console.log(this.formTeam?.value);

    const { name, code } = this.formTeam.get("city_state")?.value
    const team: Team = {
      name: this.formTeam.get("name")?.value,
      initials: this.formTeam.get("initials")?.value,
      city_state: name + "/" + code,
    }

    this.teamService.createTeam(team).finally(this.resertForm);
	}

  private resertForm = () => this.formTeam.reset();

}
