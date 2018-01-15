import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  paramsSubscription: Subscription;

  constructor(private serversService: ServersService, private activeRoute: ActivatedRoute
  , private router: Router) { }

  ngOnInit() {
    this.activeRoute.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );

    // this.server = this.serversService.getServer(+this.activeRoute.snapshot.params['id']); // El "+" es para asegurarnos que es un number
    // this.paramsSubscription = this.activeRoute.params.subscribe(
    //   (params: Params) => { this.server = this.serversService.getServer(+params['id']); }  // El "+" es para asegurarnos que es un number
    // );
  }

  onEdit() {
    // this.router.navigate(['/servers', this.server.id, 'edit'], {queryParams: {allowEdit: '1'}});
    // Como es un children route, puede ser una ruta relativa
    this.router.navigate(['edit'], {relativeTo: this.activeRoute, queryParamsHandling: 'preserve'});

  }

}
