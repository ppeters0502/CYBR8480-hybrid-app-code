import Component from '@ember/component';

export default Component.extend({
	model: 'unknown',
	device: 'who knows',
	manufacturer: 'evilcorp',
	platform:'skynet',
	uuid:'43110-808',
	isVirtual: 'away',
	serial:'cheerios',
	init: function(){
		this._super(...arguments);
		this.updateDeviceData(this);
	},
	updateDeviceData(component){
			//wrapper to preserve binding satisfaction
			try //invoke cordova device plugin and get the device information to replace my garbage
			{
				component.set('model', device.model);
				component.set('device', device.device);
				component.set('manufacturer', device.manufacturer);
				component.set('platform', device.platform);
				component.set('uuid', device.uuid);
				component.set('serial', device.serial);
				if(device.isVirtual==true)
					component.set('isVirtual', 'Virtually');
				else if (device.isVirtual==false)
					component.set('isVirtual', 'Physically');
				
			}
			catch(err)
			{
				console.log('error' + err);
			}
		
	}
});
