var Stack = function() {

    this._storage ={}
    var count=0
    this.add = function(value){
     //store new input data in storage
       this._storage[count]=value
       //the count is to give me the size of storage
     count++
    };
    this.remove = function() {
    	//delete data from storage
      delete this._storage[count]
      count--
    };
  };


  //or i can use array 

  var Stack = function() {

    this._storage =[]
    
    this.add = function(value){
//store new input data in storage
      this._storage.push(value)
   // if i want to know the size i can use  this._storage.length
    };
    this.remove = function() {
    	//delete data from storage
     this._storage.pop()
      
    };
  };