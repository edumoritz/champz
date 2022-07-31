import { catchError, Observable } from 'rxjs';
import { Team } from './../models/Team';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TeamDTO } from 'src/app/shared/dtos/team.dto';

const URL = "http://localhost:3000/team";
@Injectable({
    providedIn: "root"
})
export class TeamService {
    constructor(private http: HttpClient) {}

    async createTeam(team: Team) {
        this.http.post(URL, team).subscribe((res) => {
            console.log("create Team: ", res);
        })
    }

    getTeam(): Observable<any> {
        return this.http.get(URL).pipe(catchError((err: any) => err));
    }
}