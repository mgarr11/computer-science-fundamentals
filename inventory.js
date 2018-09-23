function hash(key, max){
    var hash =0;
    for (i=0; i<key.length; i++){
        hash +=key.charCodeAt(i);
    }
    return hash % max;
};

let Inventory = function() {
  
    let inventoryList = [];
    const storageLimit = 14;
    
    this.print = function() {
      console.log(inventoryList);
    }
    
      this.add = function(key, value) {
        var index = hash(key, storageLimit);
        if(inventoryList[index] === undefined) {
          inventoryList[index] = [
            [key, {value}]
          ];
        }else {
          var inserted = false;
          for (var i = 0; i < inventoryList[index].length; i++) {
            if(inventoryList[index][i][0] === key) {
              inventoryList[index][i][1] = value;
              inserted = true;
            }
          }
          if (inserted === false) {
            inventoryList[index].push([key, value]);
          }
        }
    };

    this.remove = function(key){
        var index = hash(key, storageLimit);
        if(inventoryList[index].length === 1 && inventoryList[index][0][0]===key){
            delete inventoryList[index];
        } else {
            for (var i =0; i < inventoryList[index]; i++){
                if (inventoryList[index][i][0]=== key){
                    delete inventoryList[index][i];
                }
            }
        }
    };
  
    this.lookup = function(key) {
      var index = hash(key, storageLimit)
      if (inventoryList[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < inventoryList[index].length; i++) {
          if(inventoryList[index][i][0] === key) {
            return inventoryList[index][i][1];
          }
        }
      }
    };
  };
  
  

 let ht = new Inventory();
 
  function addInventory() {
    let addCustBool = true;
      let itemNumber = prompt("Enter item number: ");
      let itemName = prompt("Enter item name: ");
      let auantity = prompt("Enter number in stock: ");
      ht.add(itemNumber,{name: itemName, number: customerAddr, quanity: customerPhone});
        
      
    ht.print();
  };

  function lookupItem() {
    let itemSearch = prompt("Search by item number: ");
    console.log(ht.lookup(itemSearch));
  }
