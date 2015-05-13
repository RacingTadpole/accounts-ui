Package.describe({
  name: 'art:accounts-ui',
  summary: 'Simple templates to add login widgets to an app',
  version: '1.1.1',
  git: 'https://github.com/RacingTadpole/accounts-ui.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('art:accounts-ui-unstyled@1.1.0', 'client');
  api.use('less', 'client');

  api.add_files(['login_buttons.less'], 'client');
});
