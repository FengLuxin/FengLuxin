module.exports = function (app) {
  //   const index = require('../controllers/index.server.controller');
  //  app.get('/', index.render);

  const path = require('path')

  app.get('/', (req, res, next) => {
    res.render('home', {
      title: 'Home'
    });
  })
  app.get('/index', (req, res, next) => {
    res.render('home', {
      title: 'Home'
    });

  })
  app.get('/about', (req, res, next) => {
    res.render('about', {
      title: 'About me'
    });

  })

  app.get('/projects', (req, res, next) => {
    res.render('projects', {
      title: 'Projects'
    });

  })
  app.get('/service', (req, res, next) => {
    res.render('service', {
      title: 'Service'
    });

  })

  app.get('/contactS', (req, res, next) => {
    res.render('contact', {
      title: 'Contacts'
    });

  })

  app.get('/download', (req, res, next) => {
    let file = path.join(__dirname,'../../public/my.pdf');
    console.log(file);
    res.download(file); 

  })
};