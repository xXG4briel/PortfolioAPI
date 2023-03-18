const { v4 } = require('uuid');

const BASE_IMG = "https://devxxg4briel.netlify.app/assets/projects";

module.exports = [
  {
    Id: v4(),
    Title: 'Clone Tesla',
    Description: 'Um clone do UI do site tesla.com',
    URL: 'https://ui-clone-tesla.netlify.app',
    Image: `${BASE_IMG}/tesla-clone.jpg`
  },
  {
    Id: v4(),
    Title: 'Todo List VueJS',
    Description: 'Um simples ToDo List feio em VueJS',
    URL: 'https://itodo-list-vue.netlify.app/',
    Image: `${BASE_IMG}/todo-vue.jpg`
  }
]
