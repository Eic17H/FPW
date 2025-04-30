const {Router} = require('express');
const controller = require('./film_controller');
const router = Router();

router.get('/', controller.getFilmList);
router.get('/:id', controller.getFilmById);

module.exports = router;