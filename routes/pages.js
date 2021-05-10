const express = require("express");
const router=express.Router();
router.get('/v1profile', (req,res) => {
    res.render('v1profile');
});
router.get('/pay', (req,res) => {
    res.render('pay');
});
router.get('/admin_confirm', (req,res) => {
    res.render('admin_confirm');
});
router.get('/doctor_home', (req,res) => {
    res.render('doctor_home');
});
router.get('/patient_home', (req,res) => {
    res.render('patient_home');
});
router.get('/doctor_profile', (req,res) => {
    res.render('doctor_profile');
});
router.get('/doctor_auth', (req,res) => {
    res.render('doctor_auth');
});
router.get('/search', (req,res) => {
    res.render('search');
});
router.get('/pcal', (req,res) => {
    res.render('pcal');
});
router.get('/dcal', (req,res) => {
    res.render('dcal');
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
router.get('/pforgot_pw',(req,res) => {
    res.render('pforgot_pw');
});
router.get('/preset_pw',(req,res) => {
    res.render('preset_pw');
});
router.get('/dforgot_pw',(req,res) => {
    res.render('dforgot_pw');
});
router.get('/dreset_pw',(req,res) => {
    res.render('dreset_pw');
});
router.get('/aforgot_pw',(req,res) => {
    res.render('aforgot_pw');
});
router.get('/areset_pw',(req,res) => {
    res.render('areset_pw');
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
router.get('/about_us', (req,res) => {
    res.render('about_us');
});

router.get('/loginp', (req,res) => {
    res.render('loginp');
});
router.get('/logind', (req,res) => {
    res.render('logind');
});

module.exports = router;
