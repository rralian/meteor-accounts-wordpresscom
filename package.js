Package.describe({
  name: 'rralian:accounts-wordpresscom',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Login service for WordPress.com accounts',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  author: 'Bob Ralian'
});

Package.onUse(function(api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('rralian:wordpresscom', ['client', 'server']);

  api.addFiles("wordpresscom.js");
});
