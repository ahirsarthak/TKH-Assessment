// TKH Solution Sarthak Ahir

/* Problem 1 */

/* Skill: Git

You want to grow a new branch from any commit. Identify the code you will use to swtich to "HEAD-5" and create a branch named 'testbranch'

*/
//YOUR CODE HERE
git checkout HEAD-5

git branch testbranch

/* Problem 2 */

/*Skill: React, API call  

You are creating an API that calls an application in ReactJS. The application allows the fetching of data from the following endpoint. 

API ENDPOINT: https://www.reddit.com/r/react.json


complete the code as per the given instructions:

*/
class APICaller extends React.Component {
  callApi() {
    //#1 Implement a fetch method with the given API ENDPOINT
    // YOUR CODE HERE
    fetch("https://www.reddit.com/r/react.json")
      .then((result) => {
        //#2 Return the result in json format
        if (result.ok) {
          return result.json();
        }

        throw result;
      })
      .then((jsonData) => {
        //#3 Print/log the jsonData in the console of the browser
        console.log(jsonData);
      });
  }
  render() {
    return (
      <div>
        <button
          //#4 Implement an onCLick functionality to the button such that it calls the callApi() function when it is clicked.
          onClick={() => this.callApi()}
        >
          Call the API now.
        </button>
      </div>
    );
  }
}

React.render(<APICaller />, document.getElementById("myapicaller"));

/* Problem 3 */

/*
A function which calls itself is called recursive function
In other words it's a function that calls itself until it doesn’t
And also it must have a condition that stops it from calling itself.
*/

function myRecursiveFunction(number) {
  //YOUR CODE WITH COMMENTS HERE
  console.log(number);

  let nextNo = number - 1;
  if (nextNo > 0) {
    myRecursiveFunction(nextNo);
  }
}

myRecursiveFunction(5);

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5));

/* Problem 4 */
/* Skill: algorithms 
Please write an explanation for an introduction to sorting algorithms. 
Write an example of Bubble Sort and comment each line of your code 
with explanation
*/

/* 
Sorting Algorithm is a way to reorganise large number of items in specific order.
It takes input data as lists and then performs specific operations on it and outputs an ordered array or list.
/*Bubble sort example HERE*/

const bubbleSort = (arr) => {
  // length of the array
  let n = arr.length;

  //iterate n times over the array
  for (let i = 0; i < n; i++) {
    //visit each pair of elements in the array
    for (let j = 0; j < n - i - 1; j++) {
      //if they are out of order, susch as checking present item is greater than next item
      if (arr[j] > arr[j + 1]) {
        // If true then make the swap
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  console.log(arr);
};

//problem 5

/*first we store the value of money in house 1
then we choose max between one and twoo house and then store it
then we will check on max vmoney we can get by 
*/
var rob = function (nums) {
  // if there's no value we need to return 0
  if (nums.length == 0) return 0;
  // if there's only one value we need to return that value
  if (nums.length == 1) return nums[0];
  // creating our array
  let array = Array(nums + 1).fill(0);

  //our base cases
  // storing the first value of array
  array[0] = nums[0];
  //checking which is the highest value among first 2 values in array
  array[1] = Math.max(nums[0], nums[1]);
  //looping through rest of houses
  for (let i = 2; i < nums.length; i++) {
    //storing the values into our dynamic array
    array[i] = Math.max(nums[i] + array[i - 2], array[i - 1]);
  }
  return array[array.length - 1];
};



/* Problem 6 

/*Skill: Leetcode Algorithms

solve the following leetcode in JavaScript: 


https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/


and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
*/
var longestSubstring = function(s, k) {
  //object to store freq pf each character
    const freq = {};
    // iterating through the string to count frequency of each character
    for(let c of s) {
// checking if character is already present in string then increase it's frequency count
        if(freq[c]) 
        freq[c]++;
        else
        // if not in string then set the frequency to 1
        freq[c] = 1;

    }
    
    let start = 0, r = 0, maxLength = 0;
    // Setting a valid variable to set there is no valid variable whose frequency is less than k
    let valid = true;
    // Iterating through array again
    for(; r < s.length ; r++) {
      // checking if frequency of variable in string is less than k
      //point of split
        if(freq[s[r]] < k) {
      //creating a substring from that point
      // reduced the problem to lower length 
            maxLength = Math.max(maxLength, longestSubstring(s.slice(start, r), k));
      // Updating valid to the false
      // so that it satisfies the condition where spliit is required
            valid = false;
      // incrementing the start from second part of the string
            start = r + 1;
        }
    }
      // If the condition is not met ie valid = true, will return the string
    if(valid) return s.length;
      // Else we will return the splitted string
    return Math.max(maxLength, longestSubstring(s.slice(start), k));
};
console.log(longestSubstring("aaabb",3))
 //  Problem 7 
/*Skill: SQL

Please fork and complete this SQL exercise: 

https://gist.github.com/harrisonmalone/e06ea120532e5cd323ef0b0b37a4d6


LINK TO YOUR REPO HERE

It's not working but here it is
https://github.com/ahirsarthak/TKH-Assessment/tree/main/TKH-SQL

*/

/* Problem 8 */
/*Skill: React
Explain state management and lifting state in React. Please include the difference between Redux and Context API. Your audience is a beginner learner with an understanding of React components, props and basic state. 
//Your explanation HERE

State management in React is a way to share and communicate between components of your application. 
In simple words, state is just a JavaScript object which changes according to the actions of the user.
 React follows top-down approach when communicating between components meaning the lower components are informed about state changes by the upper components. 
 Sometimes when state is needed to be changed between different components, state is lifted to a common ancestor so that all the components that need the state can share it. 
 Redux is a state management library used to manage state in applications not necessarily React but mostly used with React. On the other hand Context API was introduced in React at a much later stage to manage state internally. 
 The key difference between the two is Redux contains a centralized store which all the components in the application can share whenever needed whereas the Context API stores at the top component which the lower level components can share.

*/

/* Problem 9 */

/* 

Skill: Node/Express


How would you explain what Node and Express do to a beginner learner with no experience in server side programming?

Your explanation HERE (2 paragraphs)

Node.js is a backend javascsript cross platform runtime environment which helps in executing and implementing changes to javsacript code outside the browser in the server side

Express.js is a server framework of node.js to build web applications, APIs.
Consists of various features such as middlewares, routers and rendering.
*/


/* Problem 10 */

/*Skill: JavaScript Objects + Classes
Complete instructions in the cardGame.js file

*/
class Card {
  constructor(suit, rank, value) {
      this.suit = suit;
      this.rank = rank;
      this.value = value;
  }
}
class Deck {
  constructor() {
      this.cards = [];    
  }
                     
  createDeck() {
    let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            this.cards.push(new Card(suits[i], ranks[j], values[j]));
        }
    }
  }
  shuffleDeck() {
    let location1, location2, tmp;
    for (let i = 0; i < 1000; i++) {
        location1 = Math.floor((Math.random() * this.cards.length));
        location2 = Math.floor((Math.random() * this.cards.length));
        tmp = this.cards[location1];
        this.cards[location1] = this.cards[location2];
        this.cards[location2] = tmp;
     }
 }

}

class Player {
  constructor(name) {
      this.playerName = name;
      this.playerCards = [];
  }
}
class Board {
  constructor() {
      this.cardsInMiddle = [];
      this.players = [];
  }
  start(playerOneName, playerTwoName) {
      this.players.push(new Player(playerOneName));
      this.players.push(new Player(playerTwoName));
      let d = new Deck();
      d.createDeck();
      d.shuffleDeck();    
      this.players[0].playerCards = d.cards.slice(0, 26);
      this.players[1].playerCards = d.cards.slice(26, 52);
  }
}
let gameBoard = new Board();
gameBoard.start('Mario', 'Luigi');
console.log(gameBoard.players);

const d = new Deck();
// notice since our Deck class' constructor has no arguments, we do  // not need to pass anything into Deck()
d.createDeck();       // calling our function to fill our array
console.log(d.cards);

class Deck {
  constructor() {
    this.deck = [];
    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

  shuffle() {
    const deck = this.deck;
    let m = deck.length;
    let i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }
  deal() {
    return this.deck.pop();
  }
}

const deck1 = new Deck();
deck1.shuffle();
console.log(deck1.deck);
deck1.deal();
console.log(deck1.deck);
