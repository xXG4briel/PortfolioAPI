const projects = require("../mocks/projects") ;

class ProjectsRepository {
  findAll() {
    return projects;
  }
  findById(Id) {
    return projects.find( p => p.Id = Id );
  }
}

// Singleton
module.exports = new ProjectsRepository();
