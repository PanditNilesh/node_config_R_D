import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let isLogged = localStorage.getItem('isLogged');
  
  if(isLogged === 'yes'){
    return true;
  } else{

    return false;
  }
   
};
