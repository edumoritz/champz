import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, Observable } from 'rxjs';

const URL = "http://localhost:3000/categories";
@Injectable({
    providedIn: "root"
})
export class CategoryService {
    constructor(private http: HttpClient) {}

    getBelts(): Observable<any> {
        return this.http.get(URL + "/belts")
            .pipe(catchError((err: any) => err));
    }

    getAll(): Observable<any> {
        return this.http.get(URL)
            .pipe(catchError((err: any) => err));
    }
}