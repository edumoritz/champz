import { Team } from './../models/Team';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const URL = "http://localhost:3000/team";
@Injectable({
    providedIn: "root"
})
export class TeamService {
    constructor(private http: HttpClient) {}

    async createTeam(team: Team) {
        this.http.post(URL, team).subscribe((res) => {
            console.log("res: ", res);
        })
    }
}