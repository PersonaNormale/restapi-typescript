import express from "express";

import { deleteUser, getAllUsers, updateUser } from "../controllers/users";
import { isAuthenticated, isOwner } from "../middlewares";

export default function(router: express.Router) {
	router.get('/users', isAuthenticated, getAllUsers);
	router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
	router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
};