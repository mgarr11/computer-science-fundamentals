function hash(string, max){
    var hash =0;
    for (i=0; i<string.length; i++){
        hash +=string.charCodeAt(i);
    }
    return hash % max;
};

let Paper = function() {
  
    let newspapers = [];
    const storageLimit = 100;
    
    this.print = function() {
      console.log(newspapers);
    }
    
      this.add = function(key, value) {
        var index = hash(key, storageLimit);
        if(newspapers[index] === undefined) {
          newspapers[index] = [
            [key, value]
          ];
        }else {
          var inserted = false;
          for (var i = 0; i < newspapers[index].length; i++) {
            if(newspapers[index][i][0] === key) {
              newspapers[index][i][1] = value;
              inserted = true;
            }
          }
          if (inserted === false) {
            newspapers[index].push([key, value]);
          }
        }
    };

    this.remove = function(key){
        var index = hash(key, storageLimit);
        if(newspapers[index].length === 1 && newspapers[index][0][0]===key){
            delete newspapers[index];
        } else {
            for (var i =0; i < newspapers[index]; i++){
                if (newspapers[index][i][0]=== key){
                    delete newspapers[index][i];
                }
            }
        }
    };
  
    this.lookup = function(key) {
      var index = hash(key, storageLimit)
      if (newspapers[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < newspapers[index].length; i++) {
            for (var j = 0; j < newspapers[index].length; j++) {
                if(newspapers[index][i][0] === key && newspapers[index][j][1]===value) {
                    return newspapers[index][i][1];
            }
          }
        }
      }
    };
  };
  
  

 let ht = new Paper();
 
  function addPaper() {
    let addCustBool = true;
      let puslisher = prompt("Enter publisher name: ");
      let pubDate = prompt("Enter publication date in DDMMYYY format: ");
      ht.add(publisher, pubDate);
        
      
    ht.print();
  };

  function findPaper() {
    let paperSearch = prompt("Search by publisher name:");
    let dateSearch = prompt("Search by publication date in DDMMYYY format:")
    console.log(ht.lookup(paperSearch, dateSearch));
  }
