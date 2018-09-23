function hash(key, max){
    var hash =0;
    for (i=0; i<key.length; i++){
        hash +=key.charCodeAt(i);
    }
    return hash % max;
};

let Customer = function() {
  
    let customerList = [];
    const storageLimit = 14;
    
    this.print = function() {
      console.log(customerList);
    }
    
      this.add = function(key, value) {
        var index = hash(key, storageLimit);
        if(customerList[index] === undefined) {
          customerList[index] = [
            [key, {value}]
          ];
        }else {
          var inserted = false;
          for (var i = 0; i < customerList[index].length; i++) {
            if(customerList[index][i][0] === key) {
              customerList[index][i][1] = value;
              inserted = true;
            }
          }
          if (inserted === false) {
            customerList[index].push([key, value]);
          }
        }
    };

    this.remove = function(key){
        var index = hash(key, storageLimit);
        if(customerList[index].length === 1 && customerList[index][0][0]===key){
            delete customerList[index];
        } else {
            for (var i =0; i < customerList[index]; i++){
                if (customerList[index][i][0]=== key){
                    delete customerList[index][i];
                }
            }
        }
    };
  
    this.lookup = function(key) {
      var index = hash(key, storageLimit)
      if (customerList[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < customerList[index].length; i++) {
          if(customerList[index][i][0] === key) {
            return customerList[index][i][1];
          }
        }
      }
    };
  };
  
  

 let ht = new Customer();
 
  function addCustomer() {
    let addCustBool = true;
      let customerName = prompt("Enter customer name: ");
      let customerAddr = prompt("Enter customer address: ");
      let customerPhone = prompt("Enter customer phone number:");
      ht.add(customerPhone,{name: customerName, address: customerAddr, phone: customerPhone});
        
      
    ht.print();
  };

  function lookupCustomer() {
    let phoneSearch = prompt("Search by phone number: ");
    console.log(ht.lookup(phoneSearch));
  }
