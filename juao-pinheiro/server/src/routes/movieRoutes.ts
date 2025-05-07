import { Router, Request, Response } from 'express';
import {
  createMovie,
  deleteMovie,
  getMovieById,
  getMovies,
  updateMovie,
} from '../controllers/movieController';
import { authMiddleware as authenticateToken } from '../middlewares/authMiddleware';
import { authMiddleware } from '../middlewares/authMiddleware';
import { upload, uploadToR2 } from '../middlewares/uploadMiddleware';

const router = Router();

router.get('/', authenticateToken, getMovies);
router.get('/:id', authenticateToken, getMovieById);

router.post(
  '/',
  authenticateToken,
  upload.single('image'),
  uploadToR2,
  createMovie
);

router.put(
  '/:id',
  authMiddleware,
  upload.single('image'),
  uploadToR2,
  updateMovie
);

router.delete('/:id', authenticateToken, deleteMovie);

router.post(
  '/upload',
  authenticateToken,
  upload.single('file'),
  uploadToR2,
  (req: Request, res: Response) => {
    const imageUrl = req.body.imageUrl;
    if (!imageUrl) {
      res.status(500).json({ message: 'Erro ao obter URL da imagem' });
      return;
    }
    res.status(200).json({ imageUrl });
  }
);

export default router;
