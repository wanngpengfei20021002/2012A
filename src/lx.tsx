// interface Card {
//   suit: string;
//   card: number;
// }
// interface Deck {
//   suits: string[];
//   cards: number[];
//   createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function(this: Deck) {
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);
//       console.log(this, 'this');
      
//       return { 
//         suit: this.suits[pickedSuit], 
//         card: pickedCard % 13
//       };
//     }
//   }
// }

// const xxx = deck.createCardPicker
// xxx()()

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

