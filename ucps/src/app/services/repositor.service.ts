import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { appconfig } from '../app.config';
import {Branchs, Repositorio} from '../models/repositorio.model';
import { nextTick } from 'q';
import { Wiki } from '../models/wikis.modeL';
//let headers = new HttpHeaders();
//headers = headers.set('Content-Type', 'application/json; charset=utf-8');
//headers = headers.set('h1', 'v1').set('h2','v2');




//headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Key:PRIVATE-TOKEN','Value:fqKupypfHyDiCJfE8oUH');

// var headers = new HttpHeaders();
// headers.append('Content-Type','application/x-www-form-urlencoded');
// headers.append('Access-Control-Allow-Origin', 'http://localhost:4200/');
// headers.append('Access-Control-Allow-Methods','GET, POST, OPTIONS');
// headers.append('Access-Control-Allow-Credentials', 'true');


// const httpOptions = {
    
//   // headers: headers_object
//   };
  //let params = new HttpParams().set("paramName",paramValue).set("paramName2", paramValue2);
  
// Access-Control-Allow-Origin : http://localhost:3000
// Access-Control-Allow-Credentials : true
// Access-Control-Allow-Methods : GET, POST, OPTIONS
// Access-Control-Allow-Headers : Origin, Content-Type, Accept
const httpOptions = {   
    headers: new HttpHeaders({
    // 'Content-Type':  'application/json' ,'Authorization': 'my-auth-token','Access-Control-Allow-Origin':'http://localhost:4200',
    //  'Access-Control-Allow-Credentials':'true' , 'Access-Control-Allow-Methods':'GET, POST, OPTIONS',
    //  'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept'     
    "Authorization": "my-auth-token",
    "Access-Control-Allow-Credentials":"*",
    'Access-Control-Allow-Headers':'Content-Type',
    'Access-Control-Allow-Methods':'GET, POST, OPTIONS',
    'Access-Control-Allow-Origin': 'http://localhost:4200/#/pages/dashboard',
      Accept: "*/*",
      "PRIVATE-TOKEN": "9jHaksYQSQg4xmP8mZSn",
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache"
    })
  };

@Injectable()
export class RepositorService {
  
constructor(private http: HttpClient,private config: appconfig) { }
 ListReposit (): Observable<Repositorio> {
    console.log("asssssssssssssssss");
    // console.log(this.config.apiurl +'v4/projects/12434105/repository/commits');
      // return this.http.get<Repositorio>(this.config.apiurl +'v4/projects/12434105/repository/commits',{headers: headers, params: params})
      //return this.http.get<Repositorio>(this.config.apiurl +'v4/projects/12434105/repository/commits',httpOptions)
      //return this.http.get<Repositorio>('/v4/projects/12434105/repository/commits/asistencia',httpOptions)
      return this.http.get<Repositorio>('/v4/projects/12434105/events?action=pushed', httpOptions);
     }
  ListBranches (): Observable<Branchs> {
    return this.http.get<Branchs>('/v4/projects/12434105/repository/branches', httpOptions);
  }
  /*ListWikis():Observable<Wiki>{
    console.log("Estoy aquiiiiiiiiiiiiiiiiiiii");
    //this.config.log("Estoy aqui");
  return this.http.get<Wiki>('http://localhost/backup-repository-ucps/loggit.php?fbclid=IwAR3H9aFnW2DmHqidLdF2nkC88Eg3Z3JA5T-39U8R3e32ubqnN-6vHGLomRA',httpOptions);
   }*/
}
