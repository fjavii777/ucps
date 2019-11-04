import { Component, Input, OnInit } from '@angular/core';
import {NbMenuService, NbSidebarService} from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import {filter} from 'rxjs/operators';
import {SeguridadService} from '../../../services/authentication/seguridad.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile'}, { title: 'Cerrar sesion'}];
  tag = 'my-context-menu';

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserData,
              private seguridadService: SeguridadService,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
    this.menuService.onItemClick()
      .pipe(filter(({ tag }) => tag === this.tag))
      .subscribe(bag => {
        if (bag.item.title === 'Cerrar sesion') {
          this.seguridadService.cerrarSesion();
          window.location.reload();
        }
      });
  }
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
