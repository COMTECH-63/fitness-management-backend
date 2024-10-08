const express = require('express')
const {
    loginController, 
    signupController,
    authController, 
    paymentController,
    reserveController,
    reserveTrainnerController,
    createPay,
    getdetailclass,
    getteblesTrainerController,
} = require('../controller/userCtrl');
const auth = require('../middlewares/auth');
const { upload } = require('../middlewares/upload')

const router = express.Router();


router.post('/login', loginController)

router.post('/signup', signupController)

//auth user
router.post('/getUserData', auth, authController)

//Booking Class
router.post('/reserveClass',  auth, reserveController)

//Booking Trainner
router.post('/reserveTrainner',  auth, reserveTrainnerController)

//payment
router.post('/payment', auth,  paymentController)
router.post('/upload'  , auth , upload , createPay)

// getDetailClass
router.get('/datailClass/:id',auth, getdetailclass)

//getteblesTrainer
router.get('/getteblesTrainer',auth, getteblesTrainerController)

// //Booking Grooming
// router.get('/isTimeBooked', auth, isTimeBookedController)
// router.post('/bookGrooming', auth, bookGroomingController)

// //Notification Hotel
// router.post('/getNotification', auth, getAllNotiController)
// router.post('/deleteNotification', auth, deleteAllNotiController)

// //get detail hotels
// router.get('/getDetailHotel', getDetailHotelController)

// //get detail news && gallery
// router.get('/getNews', getNewsController)
// router.get('/getGall', getGallController);

// //get history booking
// router.get('/getMyBooking', auth, myBookingController)
// router.delete('/deleteBookhotel/:id',auth, deleteBookingHotelController)

// //get history booking Grooming
// router.get('/getMyBookingGrooming', auth, myBookingGroomingController)
// router.delete('/deleteBookedGrooming/:id', auth, deleteBookedGroomingController)

// //reset & forgot password
// router.post('/changePassword', auth , changePasswordController)
// router.post('/forgotPassword', forgotPasswordController)
// router.post('/resetPassword/:id/:token', resetPasswordController)

// // user profile
// router.get('/getUserProfile', auth, getUserProfileController)
// router.post('/editUser', auth, userEditController)

// //send contact
// router.post('/sendContact', auth, sendContactController)



module.exports = router;