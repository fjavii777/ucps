import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {SeguridadService} from './seguridad.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector: Injector) {
  }

  private applyCredentials = (req: HttpRequest<any>, token: string) => {
    return req.clone({
      setHeaders: {
        Authorization: 'Bearer $' + token,
      },
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const segurdadService = this._injector.get(SeguridadService);
    if (segurdadService.existeToken()) {
      const authReq = this.applyCredentials(req, segurdadService.obtenerToken());
      return next.handle(authReq)
        .map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            return event;
          }
        });
        // .catch((error: any) => {
        //   if (error instanceof HttpErrorResponse) {
        //     if (error.status === 401) {
        //       console.log('Token Vencido');
        //     } else {
        //       return Observable.throw(error);
        //     }
        //   }
        // });
    }
    return next.handle(req);
  }
}
