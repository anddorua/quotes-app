import { Component } from '@angular/core';
import {IonicPage, NavParams, ModalController} from 'ionic-angular';
import {QuotesService} from "../../services";
import {Quote} from "../../data/quote.interface";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(
    private navParams: NavParams,
    private quotesService: QuotesService,
    private modalController: ModalController,
    private settings: SettingsService
  ) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onQuoteClick(quote: Quote) {
    const modal = this.modalController.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.quotesService.removeQuoteFromFavorites(quote);
        this.quotes = this.quotesService.getFavoriteQuotes();
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  isAltBackground():boolean {
    return this.settings.getToggle();
  }

}
