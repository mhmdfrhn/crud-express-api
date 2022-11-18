import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });

  res.send(`User with the name ${user.fisrtName} added to the database!`);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUserId = users.find((user) => user.id === id);
  res.send(foundUserId);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { fisrtName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (fisrtName) user.fisrtName = fisrtName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated!`);
};
