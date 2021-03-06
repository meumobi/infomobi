import { ENV } from '@env';
export default class Utils {

  /**
   * re-organize an array of items or categories to use id as key, easier to pick target record.
   * ie. convert [0=>{id: 123, title:'a'}, 1=>{id:231, title:'b'}] to [123=>{id: 123, title:'a'}, 231=>{id:231, title:'b'}]
   * @param array
   */
  public static lookup(array) {
    let token = 'id';
    // Identify if it's an array of items (item._id) or category (category.id)
    if (array[0] && array[0].hasOwnProperty('_id')) {
      token = '_id';
    }

    return this.lookupByToken(array, token);
  }

  static br2nl(text) {
    return text.replace(/<br\s*[\/]?>/gi, '\n');
  }

  static striptags(text: string) {
    return text.replace(/<.*?>/g, '');
  }

  private static lookupByToken(array, token) {
    const lookup = [];
    for (let i = 0, len = array.length; i < len; i++) {
      lookup[array[i][token]] = array[i];
    }
    return lookup;
  }

  static copyToClipBoard(text: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
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
