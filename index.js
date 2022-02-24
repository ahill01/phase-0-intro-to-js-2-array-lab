// Write your solution here!
const cats = ["Milo","Otis","Garfield"]; 

// destructivelyAppendCat(name) aka push
function destructivelyAppendCat(name){
    cats.push(name); 
}; 

// destructivelyPrependCat(name) aka unshift
function destructivelyPrependCat(name){
   cats.unshift(name); 
};

//destructivelyRemoveLastCat() aka pop
function destructivelyRemoveLastCat(){
    cats.pop();
};

//destructivelyRemoveFirstCat() aka shift
function destructivelyRemoveFirstCat(){
    cats.shift()
};

//appendCat(name) aka spread, then add to end
function appendCat(name){
    const copyCats = [...cats,name];
    return copyCats;
};

//prependCat(name) aka spread, then add to beginning
function prependCat(name){
    const copyCats = [name,...cats];
    return copyCats;
};

//removeLastCat() like pop
function removeLastCat(name){
  const copyCats = [...cats];
  copyCats.pop();
  return copyCats;
};

//removeFirstCat() like shift
function removeFirstCat(name){
    const copyCats = [...cats];
    copyCats.shift();
    return copyCats;
  };
