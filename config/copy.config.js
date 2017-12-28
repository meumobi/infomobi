module.exports = {
	copyOneSignalSDK: {
	  src: ['{{ROOT}}/lib/onesignal/OneSignalSDKWorker.js'],
	  dest: '{{WWW}}'
	},
	copyOneSignalSDKUpdater: {
	  src: ['{{ROOT}}/lib/onesignal/OneSignalSDKUpdaterWorker.js'],
	  dest: '{{WWW}}'
	}
}