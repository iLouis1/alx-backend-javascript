/**
 * Contains miscellaneous route handlers.
 * @author Rhigan Akatugba <https://github.com/iLouis1>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
