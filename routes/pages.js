const express = require("express");
const router=express.Router();
router.get('/v1profile', (req,res) => {
    res.render('v1profile');
});
router.get('/pay', (req,res) => {
    res.render('pay');
});
router.get('/doctor_profile', (req,res) => {
    res.render('doctor_profile');
});
router.get('/dupdate', (req,res) => {
    res.render('dupdate');
});
router.get('/doctor_profile1', (req,res) => {
    res.render('doctor_profile1');
});
router.get('/vprofile', (req,res) => {
    res.render('vprofile');
});

router.get('/pupdate', (req,res) => {
    res.render('pupdate');
});
router.get('/doctor_profile0', (req,res) => {
    res.render('doctor_profile0');
});
router.get('/doctor_profile2', (req,res) => {
    res.render('doctor_profile2');
});

router.get('/logina', (req,res) => {
    res.render('logina');
});

router.get('/profile', (req,res) => {
    res.render('profile');
});

router.get('/registerp', (req,res) => {
    res.render('registerp');
});
router.get('/', (req,res) => {
    res.render('index');
});
router.get('/search_doctor', (req,res) => {
    res.render('search_doctor');
});

router.get('/registerd', (req,res) => {
    res.render('registerd');
});

router.get('/loginp', (req,res) => {
    res.render('loginp');
});
router.get('/logind', (req,res) => {
    res.render('logind');
});

module.exports = router;
