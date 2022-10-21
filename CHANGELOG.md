# Change log

All notable changes to the LaunchDarkly Client-side SDK for Vue will be documented in this file. See also the [JavaScript SDK changelog](https://github.com/launchdarkly/js-client-sdk/blob/main/CHANGELOG.md), since the Vue SDK inherits all of the underlying functionality of the JavaScript SDK; this file covers only changes that are specific to the Vue interface. This project adheres to [Semantic Versioning](http://semver.org).

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
