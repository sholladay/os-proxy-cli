# os-proxy-cli

> Manage system-wide proxy settings.

## Why?

 - Cross-platform behavior.
 - Uses native APIs for managing config.
 - Can monitor external changes via events.

## Install

````sh
npm install os-proxy-cli --global
````

## Usage

```
$ os-proxy --help

  Usage
    $ os-proxy <set|get|enable|disable>

  Example
    $ os-proxy set localhost:1234
```

Get the currently configured proxy.

```
$ os-proxy get
localhost:8000
```

Change the proxy configuration.

```
$ os-proxy set localhost:1234
localhost:8000
```

## Contributing

See our [contributing guidelines](https://github.com/sholladay/os-proxy-cli/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/os-proxy-cli/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/os-proxy-cli/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/os-proxy-cli/blob/master/LICENSE "The license for os-proxy-cli.") © [Seth Holladay](http://seth-holladay.com "Author of os-proxy-cli.")

Go make something, dang it.
