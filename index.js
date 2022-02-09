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

//appendCat(name) aka spread
function appendCat(name){
    const copyCats = [...cats,name];
    return copyCats;
};

//prependCat(name) aka spread
function prependCat(name){
    const copyCats = [name,...cats];
    return copyCats;
};

//removeLastCat() aka splice, from last item
function removeLastCat(name){
  const copyCats = [...cats];
  copyCats.splice(-1);
  return copyCats;
};

//removeFirstCat() aka splice, from index 0
function removeFirstCat(name){
    const copyCats = [...cats];
    copyCats.splice(0,1);
    return copyCats;
  };
