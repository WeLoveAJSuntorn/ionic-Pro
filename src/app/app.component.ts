import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

import { MenuController, Nav, Platform } from 'ionic-angular';
import { ComponentsListPage } from '../pages/components/list/components.list.page';
import { GoogleMapsPage } from '../pages/google-maps/google-maps.page';

import { HomePage } from '../pages/home/home.page';
import { TeamsPage } from '../pages/teams/teams';
import { SlideBoxPage } from '../pages/slide-box/slide-box.page';
import { WordpressListPage } from '../pages/wordpress/list/wordpress.list.page';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	pages;
	rootPage;

	@ViewChild(Nav) nav: Nav;

	constructor(
		private platform: Platform,
		private menu: MenuController,
		private statusBar: StatusBar,
		private auth: AuthService
	) {
		this.initializeApp();

		// set our app's pages
		this.pages = [
			// { title: 'Home', component: HomePage, icon: 'home' },
			// { title: 'Wordpress', component: WordpressListPage, icon: 'logo-wordpress' },
			// { title: 'Slides', component: SlideBoxPage, icon: 'swap' },
			// { title: 'Google maps', component: GoogleMapsPage, icon: 'map' },
			// { title: 'Components', component: ComponentsListPage, icon: 'grid' }
			{ title: 'Home', component: HomePage, icon: 'home' },
			{ title: 'Teams', component: TeamsPage, icon: 'md-people' },
			{ title: 'Cartoons', component : HomePage, icon: 'ios-book'}
			
			
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
		  });
		
		  this.auth.afAuth.authState
			.subscribe(
			  user => {
				if (user) {
				  this.rootPage = HomePage;
				} else {
				  this.rootPage = LoginPage;
				}
			  },
			  () => {
				this.rootPage = LoginPage;
			  }
			);
	}

	login() {
  		this.menu.close();
		this.auth.signOut();
		this.nav.setRoot(LoginPage);
	}

	// logout() {
	// 	this.menu.close();
	// 	this.auth.signOut();
	// 	this.nav.setRoot(HomePage);
	// }
	
	openPage(page) {
		this.auth.afAuth.authState
			.subscribe(
			  user => {
				if (user) {
					this.menu.close();
					this.nav.setRoot(page.component);
				}
			  },
			  () => {
				this.rootPage = LoginPage;
			  }
			);
		// this.menu.close();
		// this.nav.setRoot(page.component);
	}

}
