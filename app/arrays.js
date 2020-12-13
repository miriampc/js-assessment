exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    arr.indexOf(arr,item)
  },

  sum: function(arr) {
    arr.reduce((a,b) => a + b)
  },

  remove: function(arr, item) {
    arr.splice(arr.indexOf(arr,item),item);
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
    arr.push(item)
  },

  truncate: function(arr) {
    arr.pop()
  },

  prepend: function(arr, item) {
    arr.unshift(item)
  },

  curtail: function(arr) {
    arr.shift()
  },

  concat: function(arr1, arr2) {
    arr1.concat(arr2)
  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {
    arr.map(e => Math.pow(e,2))
  },

  findAllOccurrences: function(arr, target) {

  }
};
