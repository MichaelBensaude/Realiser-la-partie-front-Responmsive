export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize
    }
}
/*
[] -> tout le monde peut y acceder
["disconnected"] -> page reserve aux utilisateurs connectes
["admin"] -> page reserve aux utilisateurs connectes avec le role admin
["client"] -> page reserve aux utilisateurs connectes avec le role client
["admin","client"] -> page reserve aux utilisateurs connectes avec le role admin ou client
 */