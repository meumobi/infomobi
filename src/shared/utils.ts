import { ENV } from '@env';
export default class Utils {

  static lookup(array) {
    let token = 'id';
    // Identify if it's an array of items (item._id) or category (category.id)
    if (array[0] && array[0].hasOwnProperty('_id')) {
      token = '_id';
    }

    return this.lookupByToken(array, token);
  }

  static lookupByToken(array, token) {
    const lookup = [];
    for (let i = 0, len = array.length; i < len; i++) {
      lookup[array[i][token]] = array[i];
    }
    return lookup;
  }

  static imgServerPrefix(src: string) {
    let onServer = false;
    for (const source in ENV.imgServer.sources) {
      if (ENV.imgServer.sources.hasOwnProperty(source)) {
        const prefix = ENV.imgServer.sources[source].prefix;
        if (src.includes(prefix)) {
          const path = src.split(prefix);
          src = `${source}${path[1]}`;
          onServer = true;
        }
      }
    }

    return (onServer) ? ENV.imgServer.url + src : src;
  }
}
