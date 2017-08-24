export default class Utils {
  static doSomething(val: string) { console.log(val) }

  static lookup(array) {
    var token = 'id';
    // Identify if it's an array of items (item._id) or category (category.id)
    if (array[0] && array[0].hasOwnProperty('_id'))
      token = '_id';
    return this.lookupByToken(array, token);
  }

  static lookupByToken(array, token) {
    var lookup = [];
    for (var i = 0, len = array.length; i < len; i++) {
      lookup[array[i][token]] = array[i];
    }
    return lookup;
  }
}
