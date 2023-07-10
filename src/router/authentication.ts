import express from 'express';

import { register } from '../controllers/authentication';
import { login } from '../controllers/authentication';

export default function (router: express.Router) {
	router.post('/auth/register', register);
	router.post('/auth/login', login)
};