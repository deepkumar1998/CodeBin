import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService=inject(AuthService);
  const route=inject(Router)

  if (authService.getUid()) {
    return true;
  }
  route.navigate(["/"])
  return false;
  
};
