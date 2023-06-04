const ProjectsRepository = require('../repositories/ProjectsRepository')

class ProjectsController {
  index(request, response) {
    const projects = ProjectsRepository.findAll()
    response.status(200).send(projects);
  }
  show(request, response) {
    const { id } = request.body;
    const project = ProjectsRepository.findById(id);
    if (project == null) {
      return response.status(400).send({ error: 'Project not found.' });
    }
    response.status(200).send(project);
  }
  store(request, response) {
    response.status(200).send({ message: 'Ok' })
  }
  create(request, response) {
    response.status(200).send({ message: 'Ok' })
  }
  update(request, response) {
    response.status(200).send({ message: 'Ok' })
  }
  delete(request, response) {
    response.status(200).send({ message: 'Ok' })

  }
}

// Singleton
module.exports = new ProjectsController();
