import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any => {
  const router = inject(Router);

  // if(localStorage.getItem('') !== null){
  //   router.navigate([''])
  // }
}