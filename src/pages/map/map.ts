import { Component, ElementRef, ViewChild } from '@angular/core';
import { Locations } from '../../providers/locations';
import { GoogleMaps } from '../../providers/google-maps';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

	@ViewChild('map') mapElement: ElementRef;
	@ViewChild('pleaseConnect') pleaseConnect: ElementRef;

	constructor(public navCtrl: NavController, public maps: GoogleMaps, public platform: Platform, public locations: Locations) {

	}

	ionViewDidLoad(){

		this.platform.ready().then(() => {

		    let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
	    	let locationsLoaded = this.locations.load();

	    	Promise.all([
	    		mapLoaded,
	    		locationsLoaded
	    	]).then((result) => {

	    		let locations = result[1];

	    		for(let location of locations){
	    			this.maps.addMarker(location.latitude, location.longitude);
	    		}

	    	});

		});

	}

}