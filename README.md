ionic plugin remove cordova-plugin-networkinterface
rm -Rf platforms
ionic plugin add https://github.com/winfinit/cordova-plugin-networkinterface
ionic platform add android
ionic run android
ionic platform add ios