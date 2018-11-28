import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home.page';
import { TeamsPage } from '../pages/teams/teams';
import { CartoonsPage } from '../pages/cartoons/cartoons';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	pages;
	rootPage;
	lang:any;

	@ViewChild(Nav) nav: Nav;

	constructor(
		private platform: Platform,
		private menu: MenuController,
		private statusBar: StatusBar,
		private auth: AuthService,
		public translate: TranslateService
	) {
		this.initializeApp();
		this.pages = [
			{ title: 'Home', component: HomePage, icon: 'home' },
			{ title: 'Teams', component: TeamsPage, icon: 'md-people' },
			{ title: 'Cartoons', component : CartoonsPage, icon: 'ios-book'}
		];
			this.lang = 'en';
			this.translate.setDefaultLang('en');
			this.translate.use('en');
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

	switchLanguage(){
		this.translate.use(this.lang);
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
	}

}
