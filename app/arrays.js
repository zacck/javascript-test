var _ = require('underscore');
exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    //use array prototype
    return arr.findIndex(function(curr_item, index, arr){
      return curr_item === item;
    })
  },

  sum: function(arr) {
    return arr.reduce(function(accumulator, value) {
      return accumulator + value
    },0) // pass in initial value of 0
  },

  remove: function(arr, item) {
    return arr.filter(function(i) {
      return i != item;
    })
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop()
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    arr.map(function(curr_item) {
      if(curr_item === item) {
        count++;
      };
    });
    return count;
  },

  duplicates: function(arr) {
    var new_arr = _.uniq(arr)
    return new_arr;
  },

  square: function(arr) {
    return arr.map(function(item) {
      if(Number.isInteger) {
        return Math.pow(item, 2)
      }
    })
  },

  findAllOccurrences: function(arr, target) {
    var index = 0;
    var indices = [];
    while(index < arr.length) {
      if(arr[index] === target) {
        indices.push(index)
      }
      index++
    }
    return indices;
  }
};
