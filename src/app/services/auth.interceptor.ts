import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let access_token  =  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0bW9iaWxlQGdtYWlsLmNvbSIsImZ1bGxOYW1lIjoixJDhurduZyBUaOG7iyBRdeG7s25oIE5nYSIsImVtYWlsIjoidGVzdG1vYmlsZUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IjE2NjI2NiIsImlhdCI6MTY1Mjg0MTIyNCwiZXhwIjoxNjU2NDQxMjI0fQ.RTrW_3PjDyNEmkA2_tAekuCxH0cKBWhvpe-ecx92EJY"
    httpRequest = httpRequest.clone({
      headers: httpRequest.headers.set('authorization', 'Bearer '+ access_token)
    })
    return next.handle(httpRequest);
  }
}
