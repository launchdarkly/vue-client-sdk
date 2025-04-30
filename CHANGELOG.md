# Change log

All notable changes to the LaunchDarkly Client-side SDK for Vue will be documented in this file. See also the [JavaScript SDK changelog](https://github.com/launchdarkly/js-client-sdk/blob/main/CHANGELOG.md), since the Vue SDK inherits all of the underlying functionality of the JavaScript SDK; this file covers only changes that are specific to the Vue interface. This project adheres to [Semantic Versioning](http://semver.org).

## [2.3.1](https://github.com/launchdarkly/vue-client-sdk/compare/launchdarkly-vue-client-sdk-v2.3.0...launchdarkly-vue-client-sdk-v2.3.1) (2025-04-30)


### Bug Fixes

* Fix incorrect flag update handling when streaming is disabled ([#55](https://github.com/launchdarkly/vue-client-sdk/issues/55)) ([c544ae4](https://github.com/launchdarkly/vue-client-sdk/commit/c544ae41ad8b53ea6417756f6c21f18f0c7f1827))

## [2.3.0](https://github.com/launchdarkly/vue-client-sdk/compare/launchdarkly-vue-client-sdk-v2.2.2...launchdarkly-vue-client-sdk-v2.3.0) (2024-10-18)


### Features

* Add support for client-side prerequisite events. ([#50](https://github.com/launchdarkly/vue-client-sdk/issues/50)) ([aa0bfa9](https://github.com/launchdarkly/vue-client-sdk/commit/aa0bfa9a80b2764e144224b8316d66d1d69a8a23))

## [2.2.2](https://github.com/launchdarkly/vue-client-sdk/compare/launchdarkly-vue-client-sdk-v2.2.1...launchdarkly-vue-client-sdk-v2.2.2) (2024-08-05)


### Bug Fixes

* Add script required for publishing process. ([#48](https://github.com/launchdarkly/vue-client-sdk/issues/48)) ([ccef6ce](https://github.com/launchdarkly/vue-client-sdk/commit/ccef6ce4f1ba37b4069767eeeb7665fdae4cf733))

## [2.2.1](https://github.com/launchdarkly/vue-client-sdk/compare/launchdarkly-vue-client-sdk-v2.2.0...launchdarkly-vue-client-sdk-v2.2.1) (2024-08-05)


### Bug Fixes

* Re-export common types like LDContext. ([#44](https://github.com/launchdarkly/vue-client-sdk/issues/44)) ([f2b5603](https://github.com/launchdarkly/vue-client-sdk/commit/f2b56035fb7a8388f220a467d905275c7ee20edc))

## [2.2.0] - 2024-05-01
### Added:
- Added an optional timeout to the `waitForInitialization` method. When a timeout is specified the returned promise will be rejected after the timeout elapses if the client has not finished initializing within that time. When no timeout is specified the returned promise will not be resolved or rejected until the initialization either completes or fails.

### Changed:
- The track method now validates that the provided metricValue is a number. If a metric value is provided, and it is not a number, then a warning will be logged.

### Fixed:
- Fixed the documentation for `evaluationReasons` for the `identify` method.

## [2.1.0] - 2024-03-21
### Changed:
- Redact anonymous attributes within feature events
- Always inline contexts for feature events

## [2.0.5] - 2024-02-09
### Fixed:
- Added type module to package.json.
- Improved example app.

## [2.0.4] - 2023-08-24
### Fixed:
- Fix wrong github urls in package.json.

## [2.0.3] - 2023-08-08
### Fixed:
- #29 Fix broken exports in package.json due to incorrectly ordered types attribute.

## [2.0.2] - 2023-07-28
### Fixed:
- #23 TypeScript 5 error where declarations could not be found because they are not specified in exports.

## [2.0.1] - 2023-07-06
### Fixed:
- Fixed missing release artifacts in published npm build.

## [2.0.0] - 2023-06-30
The latest version of this SDK supports LaunchDarkly's new custom contexts feature. Contexts are an evolution of a previously-existing concept, "users." For more information please read the [JavaScript SDK's latest release notes](https://github.com/launchdarkly/js-client-sdk/releases/tag/3.0.0).

For detailed information about this version, please refer to the list below. For information on how to upgrade from the previous version, please read the [migration guide](https://docs.launchdarkly.com/sdk/client-side/vue/migration-1-to-2).

### Added:

- The `context` configuration option has been added.

### Deprecated:

- The `user` configuration option has been deprecated. Please use `context` instead.

## [1.2.1] - 2022-10-21
### Changed:
- Upgraded to `js-client-sdk` version `2.24.2` which includes implementations of `jitter` and `backoff` for streaming connections. When a connection fails the retry will start at the `streamReconnectDelay` and will double on each unsuccessful consecutive connection attempt (`backoff`) to a max of 30 seconds. The delay will be adjusted from 50%-100% of the calculated delay to prevent many clients from attempting to reconnect at the same time (`jitter`).

## [1.2.0] - 2022-10-18
### Changed:
- Updated `js-client-sdk` to `2.24.0` which added support for `Inspectors` that can be used for collecting information for monitoring, analytics, and debugging.

## [1.1.0] - 2022-10-05
### Changed:
- Updated `js-client-sdk` version which removed event de-duplication functionality which was made redundant by support of summary events. This will improve the default event behavior when using experimentation.

## [1.0.2] - 2022-08-11
### Fixed:
- Remove some unnecessary files, reducing package size

## [1.0.1] - 2022-08-11
### Fixed
- Bug preventing `useLDFlag` from evaluating flags on mount

## [1.0.0] - 2022-07-13
### Added:
- Initial release
