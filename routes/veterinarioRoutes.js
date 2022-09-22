import express from 'express';
const router = express.Router();
import { 
  perfil, 
  registrar, 
  confirmar, 
  autenticar, 
  olvidePassword, 
  comprobarToken, 
  nuevoPassword, 
  actualizarPerfil,
  actualizarPassword
} from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';

// public routes
router.post('/', registrar );
router.get('/confirmar/:token', confirmar);
router.post('/login/', autenticar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);

// private routes
router.get('/perfil', checkAuth, perfil);
router.put('/perfil/:id', checkAuth, actualizarPerfil);
router.put('/actualizar-password', checkAuth, actualizarPassword);

export default router;
