# Hacktoberfest issue templates

[Locale issue](locale.MD)
[Oauth issue](oauth.MD)

## Locale generator

This script takes `locale.md` and replaces placeholders with an actuall languages. It generates one markdown file for each language that is not yet supported in Appwrite. Check out the `src/locale.js`, there are some path variables you need to configure in order for this script to work.

```shell
$ npm install
$ node src/locale.js
```
