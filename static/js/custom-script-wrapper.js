// Create a new file called custom-script-wrapper.js
// const { loadFonts } = require('./expo-fonts');
const Font = require('expo-font');

module.exports = {
	init: function() {
		return Font.loadAsync({
			'Icons': require('/static/fonts/font-icon.ttf')
		});
	}
};
  