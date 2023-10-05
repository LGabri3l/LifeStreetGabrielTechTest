import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ServiceService {
    readonly APIUrl = "https://localhost:5001/api"

    private items: any = { ID: 0, Employee: "" };

    constructor(private http: HttpClient) { }

    // Calling API

    getEmployeesList(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/Employee')
    }

    addEmployee(val: any) {
        return this.http.post(this.APIUrl + '/Employee', val)
    }

    updateEmployee(val: any) {
        return this.http.put(this.APIUrl + '/Employee', val)
    }

}