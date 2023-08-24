# Change log

All notable changes to the LaunchDarkly Client-side SDK for Vue will be documented in this file. See also the [JavaScript SDK changelog](https://github.com/launchdarkly/js-client-sdk/blob/main/CHANGELOG.md), since the Vue SDK inherits all of the underlying functionality of the JavaScript SDK; this file covers only changes that are specific to the Vue interface. This project adheres to [Semantic Versioning](http://semver.org).

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
