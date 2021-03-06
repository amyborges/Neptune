/**
 * Created by kestas on 7/20/2016.
 */
var cmd = require('node-cmd');
var exports = module.exports;
var multer = require('multer');
var express = require('express');
var fs = require('fs');
var path = require('path');


exports.download = function(req, res)
{
    var location = req.body.fileLocation;
    var CASE = req.body.downloadType;
    
    if (location == 'server') 
    {
        switch (CASE) {
            case 'default_ucf':
                var file = __dirname;
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/backend/defaultUCF.json';
                var filename = path.basename(file);
                //var mimetype = mime.lookup(file);
                res.setHeader('Content-disposition', 'attachment; filename=' + filename);
                //res.setHeader('Content-type', mimetype);
                var filestream = fs.createReadStream(file);
                filestream.pipe(res);
                break;
            case 'default_ini':
                var file = __dirname;
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/backend/defaultINI.txt';
                var filename = path.basename(file);
                //var mimetype = mime.lookup(file);
                res.setHeader('Content-disposition', 'attachment; filename=' + filename);
                //res.setHeader('Content-type', mimetype);
                var filestream = fs.createReadStream(file);
                filestream.pipe(res);
                break;
            case 'mint':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/testDevice.uf';
                var file = __dirname; // + '/backend_results/designMINT.uf'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/testDevice.uf';
                var filename = path.basename(file);
                //var mimetype = mime.lookup(file);
                res.setHeader('Content-disposition', 'attachment; filename=' + filename);
                //res.setHeader('Content-type', mimetype);
                var filestream = fs.createReadStream(file);
                filestream.pipe(res);
                break;
            case 'mint_previewImg':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/testDevice.uf';
                var file = __dirname; // + '/backend_results/designMINT.uf'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/testDevice.uf';
                var filename = path.basename(file);
                //var mimetype = mime.lookup(file);
                res.setHeader('Content-disposition', 'attachment; filename=' + filename);
                //res.setHeader('Content-type', mimetype);
                var filestream = fs.createReadStream(file);
                filestream.pipe(res);
                break;
            case 'json':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice.json';
                var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/output/testDevice.json';
                var filename = path.basename(file);
                //var mimetype = mime.lookup(file);
                res.setHeader('Content-disposition', 'attachment; filename=' + filename);
                //res.setHeader('Content-type', mimetype);
                var filestream = fs.createReadStream(file);
                filestream.pipe(res);
                break;
            case 'svg_bounding':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
                var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/output/testDevice_device_bounding_box.svg';
                var filename = path.basename(file);
                //var mimetype = mime.lookup(file);
                res.setHeader('Content-disposition', 'attachment; filename=' + filename);
                //res.setHeader('Content-type', mimetype);
                var filestream = fs.createReadStream(file);
                filestream.pipe(res);
                break;
            case 'svg_cell':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
                var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/output/testDevice_device_cell.svg';
                var filename = path.basename(file);
                //var mimetype = mime.lookup(file);
                res.setHeader('Content-disposition', 'attachment; filename=' + filename);
                //res.setHeader('Content-type', mimetype);
                var filestream = fs.createReadStream(file);
                filestream.pipe(res);
                break;
            case 'svg_control':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
                var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/output/testDevice_device_control.svg';
                var filename = path.basename(file);
                //var mimetype = mime.lookup(file);
                res.setHeader('Content-disposition', 'attachment; filename=' + filename);
                //res.setHeader('Content-type', mimetype);
                var filestream = fs.createReadStream(file);
                filestream.pipe(res);
                break;
            case 'svg_flow':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
                var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/output/testDevice_device_flow.svg';
                var filename = path.basename(file);
                //var mimetype = mime.lookup(file);
                res.setHeader('Content-disposition', 'attachment; filename=' + filename);
                //res.setHeader('Content-type', mimetype);
                var filestream = fs.createReadStream(file);
                filestream.pipe(res);
                break;
            case 'eps_device':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
                var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/output/testDevice_device.eps';
                var filename = path.basename(file);
                //var mimetype = mime.lookup(file);
                res.setHeader('Content-disposition', 'attachment; filename=' + filename);
                //res.setHeader('Content-type', mimetype);
                var filestream = fs.createReadStream(file);
                filestream.pipe(res);
                break;
            case 'eps_photo':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
                var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/output/testDevice_photomask.eps';
                var filename = path.basename(file);
                //var mimetype = mime.lookup(file);
                res.setHeader('Content-disposition', 'attachment; filename=' + filename);
                //res.setHeader('Content-type', mimetype);
                var filestream = fs.createReadStream(file);
                filestream.pipe(res);
                break;
        }
    }
    if (location == 'client')
    {
        switch (CASE)
        {
            case 'default_ucf':
                var file = __dirname;
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/backend/defaultUCF.json';
                var filename = path.basename(file);
                //var mimetype = mime.lookup(file);
                res.setHeader('Content-disposition', 'attachment; filename=' + filename);
                //res.setHeader('Content-type', mimetype);
                var filestream = fs.createReadStream(file);
                filestream.pipe(res);
                break;
            case 'default_ini':
                var file = __dirname;
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/backend/defaultINI.txt';
                break;
            case 'mint':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/testDevice.uf';
                var file = __dirname; // + '/backend_results/designMINT.uf'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/testDevice.uf';
                break;
            case 'mint_previewImg':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/testDevice.uf';
                var file = __dirname; // + '/backend_results/designMINT.uf'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/testDevice.uf';
                break;
            case 'json':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice.json';
                var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/output/testDevice.json';
                break;
            case 'svg_bounding':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
                var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/output/testDevice_device_bounding_box.svg';
                break;
            case 'svg_cell':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
                var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/output/testDevice_device_cell.svg';
                break;
            case 'svg_control':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
                var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/output/testDevice_device_control.svg';
                break;
            case 'svg_flow':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
                var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/output/testDevice_device_flow.svg';
                break;
            case 'eps_device':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
                var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/output/testDevice_device.eps';
                break;
            case 'eps_photo':
                //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
                var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
                var len = file.length;
                file = file.substring(0, len - 12);
                file = file + '/output/testDevice_photomask.eps';
                break;
        }

        // case 'default_ucf':
        //     var file = __dirname;
        //     var len = file.length;
        //     file = file.substring(0,len-12);
        //     file = file + '/backend/defaultUCF.json';
        //     var filename = path.basename(file);
        //     //var mimetype = mime.lookup(file);
        //     res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        //     //res.setHeader('Content-type', mimetype);
        //     var filestream = fs.createReadStream(file);
        //     filestream.pipe(res);
        //     break;
        // case 'default_ini':
        //     var file = __dirname;
        //     var len = file.length;
        //     file = file.substring(0,len-12);
        //     file = file + '/backend/defaultINI.txt';
        //     var filename = path.basename(file);
        //     //var mimetype = mime.lookup(file);
        //     res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        //     //res.setHeader('Content-type', mimetype);
        //     var filestream = fs.createReadStream(file);
        //     filestream.pipe(res);
        //     break;
        // case 'mint':
        //     //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/testDevice.uf';
        //     var file = __dirname; // + '/backend_results/designMINT.uf'; // the right way to do it-- but __dirname is at /controllers, which is one down
        //     var len = file.length;
        //     file = file.substring(0,len-12);
        //     file = file + '/testDevice.uf';
        //     var filename = path.basename(file);
        //     //var mimetype = mime.lookup(file);
        //     res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        //     //res.setHeader('Content-type', mimetype);
        //     var filestream = fs.createReadStream(file);
        //     filestream.pipe(res);
        //     break;
        // case 'mint_previewImg':
        //     //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/testDevice.uf';
        //     var file = __dirname; // + '/backend_results/designMINT.uf'; // the right way to do it-- but __dirname is at /controllers, which is one down
        //     var len = file.length;
        //     file = file.substring(0,len-12);
        //     file = file + '/testDevice.uf';
        //     var filename = path.basename(file);
        //     //var mimetype = mime.lookup(file);
        //     res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        //     //res.setHeader('Content-type', mimetype);
        //     var filestream = fs.createReadStream(file);
        //     filestream.pipe(res);
        //     break;
        // case 'json':
        //     //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice.json';
        //     var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
        //     var len = file.length;
        //     file = file.substring(0,len-12);
        //     file = file + '/output/testDevice.json';
        //     var filename = path.basename(file);
        //     //var mimetype = mime.lookup(file);
        //     res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        //     //res.setHeader('Content-type', mimetype);
        //     var filestream = fs.createReadStream(file);
        //     filestream.pipe(res);
        //     break;
        // case 'svg_bounding':
        //     //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
        //     var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
        //     var len = file.length;
        //     file = file.substring(0,len-12);
        //     file = file + '/output/testDevice_device_bounding_box.svg';
        //     var filename = path.basename(file);
        //     //var mimetype = mime.lookup(file);
        //     res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        //     //res.setHeader('Content-type', mimetype);
        //     var filestream = fs.createReadStream(file);
        //     filestream.pipe(res);
        //     break;
        // case 'svg_cell':
        //     //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
        //     var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
        //     var len = file.length;
        //     file = file.substring(0,len-12);
        //     file = file + '/output/testDevice_device_cell.svg';
        //     var filename = path.basename(file);
        //     //var mimetype = mime.lookup(file);
        //     res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        //     //res.setHeader('Content-type', mimetype);
        //     var filestream = fs.createReadStream(file);
        //     filestream.pipe(res);
        //     break;
        // case 'svg_control':
        //     //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
        //     var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
        //     var len = file.length;
        //     file = file.substring(0,len-12);
        //     file = file + '/output/testDevice_device_control.svg';
        //     var filename = path.basename(file);
        //     //var mimetype = mime.lookup(file);
        //     res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        //     //res.setHeader('Content-type', mimetype);
        //     var filestream = fs.createReadStream(file);
        //     filestream.pipe(res);
        //     break;
        // case 'svg_flow':
        //     //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
        //     var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
        //     var len = file.length;
        //     file = file.substring(0,len-12);
        //     file = file + '/output/testDevice_device_flow.svg';
        //     var filename = path.basename(file);
        //     //var mimetype = mime.lookup(file);
        //     res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        //     //res.setHeader('Content-type', mimetype);
        //     var filestream = fs.createReadStream(file);
        //     filestream.pipe(res);
        //     break;
        // case 'eps_device':
        //     //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
        //     var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
        //     var len = file.length;
        //     file = file.substring(0,len-12);
        //     file = file + '/output/testDevice_device.eps';
        //     var filename = path.basename(file);
        //     //var mimetype = mime.lookup(file);
        //     res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        //     //res.setHeader('Content-type', mimetype);
        //     var filestream = fs.createReadStream(file);
        //     filestream.pipe(res);
        //     break;
        // case 'eps_photo':
        //     //var fileLong = 'c:/Users/kestas/Desktop/iGEM2016-GUI/output/testDevice_device_flow.svg';
        //     var file = __dirname; // + '/output/PAR_testdevice_log.txt'; // the right way to do it-- but __dirname is at /controllers, which is one down
        //     var len = file.length;
        //     file = file.substring(0,len-12);
        //     file = file + '/output/testDevice_photomask.eps';
        //     var filename = path.basename(file);
        //     //var mimetype = mime.lookup(file);
        //     res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        //     //res.setHeader('Content-type', mimetype);
        //     var filestream = fs.createReadStream(file);
        //     filestream.pipe(res);
        //     break;
    }
};