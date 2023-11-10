import express from "express";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/users", userController.getAllUsers);
    router.get('/users/:userId', userController.getUserById);
    router.post("/users", userController.createUser);
    router.put('/users/:userId', userController.updateUserById);
    router.delete('/users/:userId', userController.deleteUserById);
    return app.use("/", router);
};
module.exports = initWebRoutes;
