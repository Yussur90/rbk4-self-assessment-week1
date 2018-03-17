var makeHashTable = function() {
  //Do not change the max!
  var max = 4;
   
    return {
      //i want to put bucket inside storage index
      var bucket=[]

      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
        
        

     // inside bucket i want to add tuple and iterate throw it
        for(var i=0;i<bucket.length;i++){
          var tuple=bucket[i]
          //put the key in the tuple in the first index
          tuple[0]===key
          //put the value in the second index
          tuple[1]===value
          //return if the key is exist in bucket
          if(this.bucket[i].value===key){
            return tuple[1]
          }
        }
      _storage.push(bucket)

      },

      insert: function(key, value) {
        //your code is here
        this._storage[hashFn(key, max)] = value;
          for(var i=0;i<bucket.length;i++){
           var tuple=bucket[i]
           tuple[0]===key
          tuple[1]===value
          }
    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};