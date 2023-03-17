const ProjectsRepository = require('../repositories/ProjectsRepository')

class ProjectsController {
  index(request, response) {
    const projects = ProjectsRepository.findAll()
    response.send(200, projects);
  }
  show(request, response) {
    const { id } = request.body;
    const project = ProjectsRepository.findById(id);
    if (project == null) {
      return response.send(400, { error: 'Project not found.' });
    }
    response.send(200, project);
  }
  store(request, response) {
    response.send(200, { message: 'Ok' })
  }
  create(request, response) {
    response.send(200, { message: 'Ok' })
  }
  update(request, response) {
    response.send(200, { message: 'Ok' })
  }
  delete(request, response) {
    response.send(200, { message: 'Ok' })

  }
}

// Singleton
module.exports = new ProjectsController();
