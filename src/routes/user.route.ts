import { Router } from 'express';
import { getUsers, createUser, load, getUser, updateUser, deleteUser } from '../controller/user.controllers';

const router = Router(); 

router.get('/', load);
router.get('/api/v1/users', getUsers);
router.get('/api/v1/users/:id', getUser);
router.post('/api/v1/users',createUser);
router.put('/api/v1/users/:id',updateUser);
router.delete('/api/v1/users/:id', deleteUser);

export default router 