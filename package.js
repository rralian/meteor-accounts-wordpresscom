Package.describe({
  name: 'rralian:accounts-wordpresscom',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Login service for WordPress.com accounts',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rralian/meteor-accounts-wordpresscom',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  author: 'Bob Ralian'
});

Package.onUse(function(api) {
  api.use('accounts-base@1.2.0', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base@1.2.0', ['client', 'server']);
  api.use('accounts-oauth@1.1.5', ['client', 'server']);
  api.use('rralian:wordpresscom@0.0.1', ['client', 'server']);

  api.addFiles("wordpresscom.js");
});
