import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';

declare const networkinterface;

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	wifiIP: string = "0.0.0.0";
	cellIP: string = "0.0.0.0";

	constructor(public navCtrl: NavController, private _ngZone: NgZone) {

	}

	refreshIP() {
		console.log('refreshIP clicked');
		try {
			networkinterface.getWiFiIPAddress((ip) => { 
				console.log('getWiFiIPAddress ip', ip);
				this._ngZone.run(() => {
					this.wifiIP = ip;
				});
			});

			networkinterface.getCarrierIPAddress((ip) => { 
				console.log('getCarrierIPAddress ip', ip);
				this._ngZone.run(() => {
					this.cellIP = ip;
				});
			});
		} catch (e) {
			console.error(e);
			this.wifiIP = "error, check logs";
		}

	}

}
