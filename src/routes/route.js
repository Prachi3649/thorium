const express = require('express');
const router = express.Router();
const middleware=require("../middleware/tokenMiddleware")
//--------------------------------------------------
const authorController =require('../controllers/authorController')
const blogController = require ('../controllers/blogController')

//****************************************** */

router.post("/Authors" ,authorController.createAuthor )

router.post('/login',authorController.loginAuthor);

router.post('/blogs', middleware.middle1, blogController.Blogs)

router.get('/getBlog', blogController.getBlogs)

router.put('/blogs/:blogId',middleware.middle1,middleware.middle2, blogController.updating)

//router.delete('/blogs/:blogId', blogController.deleting)

router.delete('/blogs/:blogId', middleware.middle1, middleware.middle2, blogController.deleting)

router.delete('/blogs/:deletedBlogs',middleware.middle1,middleware.middle2, middleware.autherQuery, blogController.deletedBlogs)

//autherlogin








module.exports = router;