const pool = require('../../db');
const queries = require('./film_queries');

const getFilmList = (req, res) => {
    pool.query(queries.getFilmList, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getFilmById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getFilmById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getFilmList,
    getFilmById,
};