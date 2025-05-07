const {Router} = require('express');
const controller = require('./film_controller');
const router = Router();

// GET /film
router.get('/', controller.getFilmList);
router.get('/:id', controller.getFilmById);

// POST /film
router.post('/', controller.addFilm);

// DELETE /film
router.delete('/:id', controller.deleteFilm);

module.exports = router;