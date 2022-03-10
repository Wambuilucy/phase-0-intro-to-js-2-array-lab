// Write your solution here!
{
    "stats"; {
      "suites"; 11,
      "tests"; 9,
      "passes"; 9,
      "pending"; 0,
      "failures"; 0,
      "start"; "2022-03-02T08:56:03.242Z",
      "end"; "2022-03-02T08:56:03.585Z",
      "duration"; 343
    };
    "tests"; [
      {
        "title": "is assigned an initial value of [\"Milo\", \"Otis\", \"Garfield\"]",
        "fullTitle": "index.js cats is assigned an initial value of [\"Milo\", \"Otis\", \"Garfield\"]",
        "duration": 1,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "appends a cat to the end of the cats array",
        "fullTitle": "index.js Array functions destructivelyAppendCat(name) appends a cat to the end of the cats array",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "prepends a cat to the beginning of the cats array",
        "fullTitle": "index.js Array functions destructivelyPrependCat(name) prepends a cat to the beginning of the cats array",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "removes the last cat from the cats array",
        "fullTitle": "index.js Array functions destructivelyRemoveLastCat() removes the last cat from the cats array",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "removes the first cat from the cats array",
        "fullTitle": "index.js Array functions destructivelyRemoveFirstCat() removes the first cat from the cats array",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "appends a cat to the cats array and returns a new array, leaving the cats array unchanged",
        "fullTitle": "index.js Array functions appendCat(name) appends a cat to the cats array and returns a new array, leaving the cats array unchanged",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "prepends a cat to the cats array and returns a new array, leaving the cats array unchanged",
        "fullTitle": "index.js Array functions prependCat(name) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "removes the last cat in the cats array and returns a new array, leaving the cats array unchanged",
        "fullTitle": "index.js Array functions removeLastCat() removes the last cat in the cats array and returns a new array, leaving the cats array unchanged",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "removes the first cat from the cats array and returns a new array, leaving the cats array unchanged",
        "fullTitle": "index.js Array functions removeFirstCat() removes the first cat from the cats array and returns a new array, leaving the cats array unchanged",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      }
    ],
    "pending"; [],
    "failures"; [],
    "passes"; [
      {
        "title": "is assigned an initial value of [\"Milo\", \"Otis\", \"Garfield\"]",
        "fullTitle": "index.js cats is assigned an initial value of [\"Milo\", \"Otis\", \"Garfield\"]",
        "duration": 1,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "appends a cat to the end of the cats array",
        "fullTitle": "index.js Array functions destructivelyAppendCat(name) appends a cat to the end of the cats array",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "prepends a cat to the beginning of the cats array",
        "fullTitle": "index.js Array functions destructivelyPrependCat(name) prepends a cat to the beginning of the cats array",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "removes the last cat from the cats array",
        "fullTitle": "index.js Array functions destructivelyRemoveLastCat() removes the last cat from the cats array",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "removes the first cat from the cats array",
        "fullTitle": "index.js Array functions destructivelyRemoveFirstCat() removes the first cat from the cats array",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "appends a cat to the cats array and returns a new array, leaving the cats array unchanged",
        "fullTitle": "index.js Array functions appendCat(name) appends a cat to the cats array and returns a new array, leaving the cats array unchanged",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "prepends a cat to the cats array and returns a new array, leaving the cats array unchanged",
        "fullTitle": "index.js Array functions prependCat(name) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "removes the last cat in the cats array and returns a new array, leaving the cats array unchanged",
        "fullTitle": "index.js Array functions removeLastCat() removes the last cat in the cats array and returns a new array, leaving the cats array unchanged",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      },
      {
        "title": "removes the first cat from the cats array and returns a new array, leaving the cats array unchanged",
        "fullTitle": "index.js Array functions removeFirstCat() removes the first cat from the cats array and returns a new array, leaving the cats array unchanged",
        "duration": 0,
        "currentRetry": 0,
        "err": {}
      }
    ]
  }
  const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){

    cats.push(name)

} 
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
function appendCat(name){
    const newCats = [...cats,name];

    return newCats
}
function prependCat(name){
    const newCats = [name,...cats];

    return newCats
}
function removeLastCat(name){
    const removeCat = cats.slice(0, cats.length -1 );

    return removeCat

}
function removeFirstCat(name){
    const removeCat = cats.slice(1);

    return removeCat

}