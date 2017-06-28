import {Quote} from "./data/quote.interface";

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFavoriteQuotes(quote: Quote) {
    this.favoriteQuotes.push(quote);
  }

  removeQuoteFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex(item => item.id == quote.id);
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes() {
    return [].concat(this.favoriteQuotes);
  }

  has(quote: Quote): boolean {
    return this.favoriteQuotes.some(item => item.id == quote.id);
  }
}
