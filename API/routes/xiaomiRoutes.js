const express = require('express');
const router = express.Router();
const miio = require('../controllers/deviceController');

const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'OK GET'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'OK POST'
    });
});

router.get('/devices/:deviceId', (req, res, next) => {
    const id = req.params.deviceId;
    switch (id.toLowerCase()) {
        case 'none':
            res.status(200).json({
                message: 'None Device',
                id: id.toLowerCase()
            });
            break;
        case 'Vacum':
            res.status(200).json({
                message: 'Vacum Device',
                id: 'Vacum'
            });
            break;
    
        default:
            res.status(500).json({
                message: 'Unknown Device'
            });
            break;
    }
});

router.get('/availableDevices', (req, res, next) => {
    
    miio.discoverDevices()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.get('/savedDevices', (req, res, next) => {
    
    miio.discoverDevices()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

module.exports = router;