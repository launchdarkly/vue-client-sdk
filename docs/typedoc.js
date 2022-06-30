module.exports = {
  out: '/tmp/project-releaser/project/docs/build/html',
  exclude: ['**/node_modules/**'],
  name: 'LaunchDarkly Vue SDK (1.0.0)',
  readme: 'none', // don't add a home page with a copy of README.md
  entryPoints: '/tmp/project-releaser/project/src/index.ts',
  entryPointStrategy: 'expand',
}
