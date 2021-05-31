import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VigilateGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router:Router){

  }

  redirect(flag: boolean):any {
    if(!flag){
      this.router.navigate(['/','login'])
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //conprobar si esta la cookie token_access
    const cookie =this.cookieService.check('token_access');
    this.redirect(cookie);

    return cookie;
  }
  
}
