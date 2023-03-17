const { Router } = require('express');
const EmailsController = require('./controllers/EmailsController');

const router = Router();

const ProjectsController = require('./controllers/ProjectsController');

router.get('/projects', ProjectsController.index);
router.post('/emails', EmailsController.sendEmail);

module.exports = router;
