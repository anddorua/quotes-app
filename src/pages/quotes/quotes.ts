import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams, AlertController} from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quotesGroup: { category: string, quotes: Quote[], icon: string };

  constructor(
    private navParams: NavParams,
    private alertController: AlertController,
    private quotesService: QuotesService) {
  }

  ngOnInit(): void {
    this.quotesGroup = this.navParams.data;
  }

  onAddToFavorite(quote: Quote) {
    const alert = this.alertController.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote to favorites?',
      buttons: [
        {
          text: 'Yes',
          handler: () => { this.quotesService.addQuoteToFavoriteQuotes(quote); }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => { console.log('Cancel'); }
        },
      ],
    });

    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote): boolean {
    return this.quotesService.has(quote);
  }
}
