const getFilmList = 'SELECT * FROM film';
const getFilmById = 'SELECT * FROM film WHERE id = $1';

module.exports = {
    getFilmList,
    getFilmById,
};