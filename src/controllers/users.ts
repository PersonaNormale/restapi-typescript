import express from "express";

import { deleteUserById, getUsers, getUsersById } from "../db/users";

export async function getAllUsers(req: express.Request, res: express.Response) {
	try {
		const users= await getUsers();

		return res.status(200).json(users);
	} catch (error) {
		console.log(error);
		return res.sendStatus(400);
	}
}

export async function deleteUser(req: express.Request, res: express.Response) {
	try {
		const { id } = req.params;

		const deletedUser = await deleteUserById(id);

		return res.json(deletedUser);
	} catch (error) {
		console.log(error);
		return res.sendStatus(400);
	}
}

export async function updateUser(req: express.Request, res: express.Response) {
	try {
		const { id } = req.params;
		const { username } = req.body;
		console.log(username)

		if (!username) {
			return res.sendStatus(400);
		}

		const user = await getUsersById(id);

		user.username = username;
		await user.save();

		return res.status(200).json(user).end();
	} catch (error) {
		console.log(error);
		res.sendStatus(400);
	}
}