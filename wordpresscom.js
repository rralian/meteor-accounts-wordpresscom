Accounts.oauth.registerService('wordpresscom');

if (Meteor.isClient) {
  Meteor.loginWithWordpresscom = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Wordpresscom.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.wordpresscom'],
    forOtherUsers: ['services.wordpresscom.username']
  });
}
