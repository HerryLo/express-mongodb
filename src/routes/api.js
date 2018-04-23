import express from 'express'
import API from '../controller/api'

const router = express.Router();

router.get('/artList', API.artList);
router.get('/fetchImg', API.fetchImg);

export default router