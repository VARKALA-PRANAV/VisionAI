import express from 'express';
import {auth} from "../middlewares/auth.js";
import { getUserCreations,getPublishedCreations, toggleLikeCreation } from '../controller/userController.js';

const router = express.Router();

router.get('/get-user-creations', auth, getUserCreations)
router.get('/get-published-creations', auth, getPublishedCreations)
router.post('/toggle-like-creations', auth, toggleLikeCreation)


export default router;