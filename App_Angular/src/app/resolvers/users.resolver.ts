import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {empty, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export default class UsersResolver implements Resolve<Observable<any>> {
  constructor(private http: HttpClient,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`).pipe(
      catchError(() => {
        alert('Error From The Server');
        this.router.navigate(['posts']);
        return of(null);
      })
    );
  }

}
