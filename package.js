/* global Package */
Package.describe({
  name: 'huaming:jquery-qrcode',
  summary: 'This a wrap for jquery.qrcode.js',
  version: '1.0.0',
  git: 'https://github.com/raohuaming/meteor-jquery-qrcode',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.versionsFrom('1.1.0.2');
  api.addFiles('jquery.qrcode.min.js', 'client');
});

Package.onTest(function(api){
  api.use('sanjo:jasmine@0.14.0');
  api.use('velocity:html-reporter@0.6.2');

  api.use('huaming:jquery-qrcode');
  api.addFiles('meteor/test.js', 'client');
});
