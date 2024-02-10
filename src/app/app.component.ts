import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, CardsComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'NEST';

	districts: any = [
		{
			id: 1,
			title: "Thiruvananthapuram",
			image: "https://irisholidays.com/keralatourism/wp-content/uploads/2021/10/trivandrum.jpg",
			desc: "The Capital of Kerala"
		},
		{
			id: 2,
			title: "Kollam",
			image: "https://www.keralabackwater.com/blog/wp-content/uploads/2019/01/jatayupara.jpg",
			desc: "The Land of Cashew"

		},
		{
			id: 3,
			title: "Pathanamthitta",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1djBO0oG5wODz6vUgMctnWhKoqch4akrNUg&usqp=CAU",
			desc: "The Pilgrim's Path"

		},
		{
			id: 4,
			title: "Alappuzha",
			image: "https://keralatourism.travel/images/destinations/headers/alleppey-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg",
			desc: "Houseboats and Backwaters"

		},
		{
			id: 5,
			title: "Kottayam",
			image: "https://townplanning.kerala.gov.in/town/wp-content/uploads/2018/12/Kottayam_district.jpg",
			desc: "The City of Letters"

		},
		{
			id: 6,
			title: "Idukki",
			image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/11/Feature-image-Idukki.jpg",
			desc: "Mountains and Forests"

		},
		{
			id: 7,
			title: "Ernakulam",
			image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/INS_Vikrant_under_construction_at_Cochin_Shipyard.png",
			desc: "The Economic Capital"

		},
		{
			id: 8,
			title: "Thrissur",
			image: "https://www.keralatourism.org/images/festivals/large/20170330115924_321_1.jpg",
			desc: "The Cultural Capital"

		},
		{
			id: 9,
			title: "Palakkad",
			image: "https://www.paradise-kerala.com/blog/wp-content/uploads/2022/11/26677079964_fac640c391_b.jpg",
			desc: "The granary of Kerala"

		},
		{
			id: 10,
			title: "Malappuram",
			image: "https://im.hunt.in/cg/Malappuram/City-Guide/mala-areas.jpg",
			desc: "City of Hills"

		},
		{
			id: 11,
			title: "Kozhikode",
			image: "https://www.holidify.com/images/compressed/attractions/attr_1878.jpg",
			desc: "City of Spices"

		},
		{
			id: 12,
			title: "Wayanad",
			image: "https://www.raindropsresorts.com/blog/wp-content/uploads/2019/03/chembra-peak.jpg",
			desc: "Ooty of Kerala"

		},
		{
			id: 13,
			title: "Kannur",
			image: "https://www.holidify.com/images/cmsuploads/compressed/1024px-Payyambalam_Beach_Back_Water_20180425181108.jpg",
			desc: "Land of looms and lores"

		},
		{
			id: 14,
			title: "Kasargod",
			image: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/09/Places-To-Visit-In-Kasargod-cover.jpg",
			desc: "The Land of Seven Languages"

		}
	]
}
