SELECT
    recensioni.commento, recensioni.voto, film.titolo, film.descrizione
FROM
    recensioni JOIN film ON recensioni.film_id = film.id
WHERE
    genere = 'commedia';