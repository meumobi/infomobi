module.exports = {
	copyOneSignalSDK: {
	  src: ['{{ROOT}}/lib/onesignal/OneSignalSDKWorker.js'],
	  dest: '{{WWW}}'
	},
	copyOneSignalSDKUpdater: {
	  src: ['{{ROOT}}/lib/onesignal/OneSignalSDKUpdaterWorker.js'],
	  dest: '{{WWW}}'
	},
	copyMmbAvatarImgComponent: {
		src: ['{{ROOT}}/node_modules/mmb-avatar-img/dist/mmbavatarimg**/*'],
		dest: '{{BUILD}}'
	}
}