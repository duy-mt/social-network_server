import express from "express";
import userController from "../controllers/userController";
import postController from "../controllers/postController";

let router = express.Router();

let initWebRoutes = (app) => {
    // router user
    router.get("/api/users", userController.getAllUsers);
    router.get('/api/users/get-user-by-id', userController.getUserById);
    router.post("/api/users/create-user", userController.createUser);
    router.put('/api/users/update-user', userController.updateUserById);
    router.delete('/api/users/delete-user', userController.deleteUserById);

    // router post
    router.get("/api/posts", postController.getAllPosts);
    router.get('/api/posts/get-post-by-id', postController.getPostById);
    router.post("/api/posts/create-post", postController.createPost);
    router.put('/api/posts/update-post', postController.updatePostById);
    router.delete('/api/posts/delete-post', postController.deletePostById);
    





    return app.use("/", router);
};
module.exports = initWebRoutes;
