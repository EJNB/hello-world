import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private service: GithubFollowersService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe();
    let id = this.route.snapshot.paramMap.get('id');
    
    this.route.queryParamMap.subscribe();
    let page = this.route.snapshot.queryParamMap.get('page');
    
    /* para evitar la subscription doble a un observable usaremos el operador combineLatest */
    Observable.combineLatest([this.route.paramMap,this.route.queryParamMap])
      .switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        //this.service.getAll({ id, page })
        return this.service.getAll()
      })
      .subscribe(followers => this.followers = followers);
  }
}
