import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * This binds routes to appropriate handler in the
 * given Express application.
 * @param {Express} app The Express application.
 * @author Rhigan Akatugba <https://github.com/iLouis1>
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
