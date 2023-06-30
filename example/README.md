# LaunchDarkly sample Vue application

We've built an application that demonstrates how LaunchDarkly's Vue SDK works.

Below, you'll find the basic build procedure. For more comprehensive instructions, you can visit the [Vue reference guide](https://docs.launchdarkly.com/sdk/client-side/vue).

## Build instructions

1. Edit `App.vue` and set the value of `clientSideID` to your LaunchDarkly client-side ID. If there is an existing boolean feature flag in your LaunchDarkly project that you want to evaluate, edit `Feature.vue` and set `featureFlagKey` to the flag key.

```
// in App.vue
const clientSideID = 'myClientSideID'

// in App.vue
const featureFlagKey = 'my-boolean-flag'

```

2. On the command line, run:

```
npm i
npm start
```

3. Open `localhost:3000` in your browser.

You should receive the message ”Feature flag ‘<flag key>’ is <true/false> for this context”.
