import express from 'express'
//import { getGenres, getGenre, updateGenre, createGenre, deleteGenre } from '../database.js';

const router = express.Router()
//todo: cleanup. add/check updateGenre method
// GET 
router.get('/', async (req, res) => {
    /* try {
        const genres: any = await getGenres()
        console.log(`Genres: ${genres}`);
        if (genres.length == 0) {
            res.send("There are no genres")
        } else {
            res.status(200).send(genres)
        }
    } catch (error) {
        console.log(error);
    } */
})

// CREATE 
router.post('/', async (req, res) => {
    /* const { name, description, price } = req.body // express grabs data from http then sends to endpoint
    const genre: any = await createGenre()
    console.log("Data persisted successfully")
    res.status(201).send(genre) */

})

router.route('/:id')
    // GET by ID
    .get(async (req, res) => {
        /* try {
            const id = req.params.id
            const genre = await getGenre(id)
            // console.log(`GET genre with ID ${id}`)
            if (genre.length == 0) {
                res.send("There is no genre with that ID")
            }
            res.send(genre)
            // res.send(`GET genre with ID ${req.params.id}`) 
        } catch (error) {
            console.log(error);
        } */
    })
    // UPDATE
    .put((req, res) => {
       /*  const genre = req.body
        res.send(`UPDATE genre with ID ${req.params.id}`) */
    })

    // DELETE
    .delete(async (req, res) => {
       /*  const id = req.params.id
        const genre = await deleteGenre(id)
        console.log(`DELETE genre with ID ${id}`)
        res.send(genre)
        // res.send(`DELETE genre with ID ${req.params.id}`) */
    })

/* router.param('id', (req, res, next, id) => {
    req.genre = genres[id]
    next()
}) */ // check if necessary

export default router;