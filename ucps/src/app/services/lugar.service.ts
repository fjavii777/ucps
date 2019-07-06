import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lugar } from  '../models/lugar.model';
import { Observable } from  'rxjs';
@Injectable({
providedIn: 'root'
})
export class LugarService {
    PHP_API_SERVER = "http://localhost/ProyectoUCPS/backend";

constructor(private httpClient: HttpClient) {}
    readPolicies(): Observable<Lugar[]>{
        return this.httpClient.get<Lugar[]>(`${this.PHP_API_SERVER}/api/read.php`);
    }
}