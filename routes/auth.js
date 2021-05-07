const express = require('express');
const authController=require('../controllers/auth');
 
const router=express.Router();
router.post('/search_doctor',authController.search_doctor);
router.post('/registerd', authController.registerd);
router.post('/registerp', authController.registerp);
router.post('/logina',authController.logina);
router.post('/loginp',authController.loginp);
router.post('/logind',authController.logind);
router.post('/pay',authController.pay);
router.post('/vprofile',authController.vprofile);
router.post('/v1profile',authController.v1profile);
router.post('/pupdate',authController.pupdate);
router.post('/dupdate',authController.dupdate);
module.exports = router;
