import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire : {
		apiKey: "AIzaSyCz-faSqqHKhaSbh877U9lNfUaZnz3N8vk",
		authDomain: "softdevcartoon.firebaseapp.com",
		databaseURL: "https://softdevcartoon.firebaseio.com",
		projectId: "softdevcartoon",
		storageBucket: "softdevcartoon.appspot.com",
		messagingSenderId: "245895696277"
	  }
};