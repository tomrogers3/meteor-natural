Package.describe({
  summary: "General natural language facilities for node"
});

Npm.depends({
    "natural": "0.1.21"
});

Package.on_use(function (api, where) {
  api.add_files('natural.js', 'server');
});
