const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api/carRoutes');



router.use('/search', apiRoutes);





// router.use('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../client/build/index.html'));
// });

module.exports = router;