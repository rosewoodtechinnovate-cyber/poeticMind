const express =require('express')

const router = express.Router()


const {index,blog, about, contact, detail, element, upload,success, thank, school, event}= require('../controllers/pageControllers')


router.get('/',index)
router.get('/about',about)
router.get('/contact',contact)
router.get('/blog',blog)
router.get('/detail',detail)
router.get('/element',element)
router.get('/upload',upload)
router.get('/success', success)
router.get('/thankyou',thank)

router.get('/school',school)
router.get('/event',event)
module.exports=router