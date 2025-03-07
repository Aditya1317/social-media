import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpXSRFInterceptor implements HttpInterceptor {
  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const respHeaderName = 'X-XSRF-TOKEN';
    const tenantHeader = 'X-TENANT-ID';
    const tenantId = 'velocious';

    const token = this.tokenExtractor.getToken() as string;

    if (token !== null) {
      req = req.clone({
        headers: req.headers.set(respHeaderName, token),
      });
    }

    req = req.clone({
      headers: req.headers.set(tenantHeader, tenantId),
    });

    return next.handle(req);
  }
}
