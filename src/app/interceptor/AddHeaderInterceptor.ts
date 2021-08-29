import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
  } from '@angular/common/http';

  import { Observable } from 'rxjs';
   
  export class AddHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // Clone the request to add the new header
      const token= 'BQCT9Iz-vdPcxB0tBj13XQJnkv6QvOkYHcygTch_7vEga_vL4KjDoCNOpju8p8NFPzdwZg7V3U4Bd2FGgiU0AwsiuanLUBB2agX2o1hNWoZwdHXC5qJboYwE-U96YVprjFNkiWDVnrWxnMnFe42nOkqaFhRzvydchgWU5lr-6rxYf7lN3URd2_BzizKDSATuM7oq293EMbuMNEN46QLu5hx3Ks0WfApWtLJ6u4yR3V34U3HMEzsYkDAkuAL9VVDNOLydQWC0ugc7nFMqc_WnZ_-oQQ'
      const clonedRequest = req.clone({ headers: req.headers.append('Authorization', 'Bearer '+token) });
  
      // Pass the cloned request instead of the original request to the next handle
      return next.handle(clonedRequest);
    }
  }