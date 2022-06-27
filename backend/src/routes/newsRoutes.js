import express from 'express';
import { getNews, createNew, updateNew, deleteNew } from '../controllers/newsController.js';

const router = express.Router();

router.get('/', getNews);
router.post('/', createNew);
router.patch('/:id', updateNew);
router.delete('/:id', deleteNew)

export default router;

