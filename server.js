const express = require('express');
const users = require('./controllers/users');
const tests = require('./controllers/tests');
const tasks = require('./controllers/tasks');

//my modouls
// const ctrl = require('./controller/controller'),
//       asyncWrapper = require('./controller/asyncWrapper');

//establish app()
const app  = express(),
      port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(
    (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.set("Content-Type", "application/json");
        next();
    });
//routes

app.get('/getAllUsers', users.getAllUsers);
app.post('/findUsersTask', users.findUsersTask);
app.get('/getAllTests', tests.getAllTests);
app.post('/findTaskById', tasks.findTaskById);


// app.post('/removeGiftfromWishList', usersCtl.assignGiftToEvent);
// app.post('/assignGiftToEvent', usersCtl.assignGiftToEvent);
// app.post('/removeGiftfromEvent', usersCtl.assignGiftToEvent);

// app.get('/getMyEvents/:uniqueID', usersCtl.getMyEvents);
// app.get('/getMyWishList/:uniqueID', usersCtl.getMyWishList);
// app.get('/getPartnerWishList/:uniqueID', usersCtl.getPartnerWishList);
// app.get('/getPartnerEvents/:uniqueID', usersCtl.getPartnerEvents);


// app.post('/setscore', asyncWrapper(ctrl.setGroupScore));
// app.put('/scoresandwins', asyncWrapper(ctrl.groupsByScoreAndWin));
// app.get('/gettop/:top', asyncWrapper(ctrl.getTopGroups));
// app.get('/', asyncWrapper(ctrl.getAllGroups));
// 
// app.all('*', usersCtl.falldown);


app.listen(port,
    () => console.log('Express server ready for requests on: ', port));