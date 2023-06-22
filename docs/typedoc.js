module.exports = {
  out: '/tmp/project-releaser/project/docs/build/html',
  exclude: [
    '**/node_modules/**',
    'test-types.ts'
  ],
  name: "LaunchDarkly Vue SDK (2.0.0)",
  readme: 'none',                // don't add a home page with a copy of README.md
  entryPoints: "/tmp/project-releaser/project/src/index.ts",
  entryPointStrategy: "expand"
};
