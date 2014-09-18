(function() {
	si.config = {};
	
	si.config.Medusa = {
		defaultServer: 'http://database.misasa.okayama-u.ac.jp/stone/',
		defaultpPrintFormatUrl : 'http://database.misasa.okayama-u.ac.jp/format_archive/dream-label.spfmtz'
//		defaultpPrintFormatUrl : 'file:///mnt/sdcard/extStorages/SdCard//okayama.spfmtz'		
//		socket_listen_to: '7000',
//		socket_write_to: '7000',		
//		current_box_global_id: '20090305054821900.admin',
	};
	
	si.config.TiBar = {

		classType: 'ZBarReaderViewController',
    	sourceType: 'Camera',
    	cameraMode: 'Sampling', // Default, Sampling, Sequence            
    	config:{
    		'showsCameraControls':true, // (VC)
    		'showsZBarControls':true,
        	'tracksSymbols':true, // the tracking rectangle that highlights barcodes
        	'enableCache':true,
        	'showsHelpOnFail':true,
        	'takesPicture':false
    	},
	};
})();