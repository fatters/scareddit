# scareddit

[![Netlify Status](https://api.netlify.com/api/v1/badges/ee638476-ad14-485d-af0f-373ed16ef52f/deploy-status)](https://app.netlify.com/sites/scareddit/deploys)

Born out of a love of reading scary/paranormal AskReddit posts but never keeping track of which one's I'd read. You can set individual comments as read which is then saved in your browser's localStorage.

This means that as long as you used the same browser &amp; device, the comments you set as read will be remembered. To work across multiple devices, we would need accounts which seemed overkill for how simple I wanted this app to be.

The list of threads is by no means final and if you would like to see a thread added to the list, you can make a pull request. Alternatively, if you see your comment in one of these threads and wish for it to be removed for _any_ reason at all, get in touch and I will remove it for you. You can also remove it yourself as Scareddit automatically filters out [removed] or [deleted] comments.

If you have any suggestions/improvements etc. feel free to open an issue/pull request.

A huge thanks to following Reddit posts that listed most of the threads used on this site:

* ["My huge collection of paranormal-themed askreddit threads"](https://www.reddit.com/r/Paranormal/comments/3ep2f1/my_huge_collection_of_paranormalthemed_askreddit/)

Happy reading!

## Development server

To be able to run the serverless function locally, make a `snoowrap-config.json` file in the root of the project. Make sure you are set up to be able to use Reddit's API. It should look like this:

```
{
  "USER_AGENT": "{YOUR USER AGENT}",
  "CLIENT_ID": "{YOUR CLIENT ID}",
  "CLIENT_SECRET": "{YOUR CLIENT SECRET}",
  "REFRESH_TOKEN": "{YOUR REFRESH TOKEN}"
}
```
The serverless function will then use your credentials locally rather than the site's environment variables.

### Angular

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Netlify

Run `netlify dev` (need to install netlify-cli). Navigate to `http://localhost:8888/`. Make sure `ng serve` is not running in another window.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
