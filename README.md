oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g create-firemyna
$ create-firemyna COMMAND
running command...
$ create-firemyna (--version)
create-firemyna/0.0.0 darwin-x64 node-v16.14.2
$ create-firemyna --help [COMMAND]
USAGE
  $ create-firemyna COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`create-firemyna hello PERSON`](#create-firemyna-hello-person)
* [`create-firemyna hello world`](#create-firemyna-hello-world)
* [`create-firemyna help [COMMAND]`](#create-firemyna-help-command)
* [`create-firemyna plugins`](#create-firemyna-plugins)
* [`create-firemyna plugins:install PLUGIN...`](#create-firemyna-pluginsinstall-plugin)
* [`create-firemyna plugins:inspect PLUGIN...`](#create-firemyna-pluginsinspect-plugin)
* [`create-firemyna plugins:install PLUGIN...`](#create-firemyna-pluginsinstall-plugin-1)
* [`create-firemyna plugins:link PLUGIN`](#create-firemyna-pluginslink-plugin)
* [`create-firemyna plugins:uninstall PLUGIN...`](#create-firemyna-pluginsuninstall-plugin)
* [`create-firemyna plugins:uninstall PLUGIN...`](#create-firemyna-pluginsuninstall-plugin-1)
* [`create-firemyna plugins:uninstall PLUGIN...`](#create-firemyna-pluginsuninstall-plugin-2)
* [`create-firemyna plugins update`](#create-firemyna-plugins-update)

## `create-firemyna hello PERSON`

Say hello

```
USAGE
  $ create-firemyna hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/firemyna/create-firemyna/blob/v0.0.0/dist/commands/hello/index.ts)_

## `create-firemyna hello world`

Say hello world

```
USAGE
  $ create-firemyna hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `create-firemyna help [COMMAND]`

Display help for create-firemyna.

```
USAGE
  $ create-firemyna help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for create-firemyna.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `create-firemyna plugins`

List installed plugins.

```
USAGE
  $ create-firemyna plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ create-firemyna plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `create-firemyna plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ create-firemyna plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ create-firemyna plugins add

EXAMPLES
  $ create-firemyna plugins:install myplugin 

  $ create-firemyna plugins:install https://github.com/someuser/someplugin

  $ create-firemyna plugins:install someuser/someplugin
```

## `create-firemyna plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ create-firemyna plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ create-firemyna plugins:inspect myplugin
```

## `create-firemyna plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ create-firemyna plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ create-firemyna plugins add

EXAMPLES
  $ create-firemyna plugins:install myplugin 

  $ create-firemyna plugins:install https://github.com/someuser/someplugin

  $ create-firemyna plugins:install someuser/someplugin
```

## `create-firemyna plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ create-firemyna plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ create-firemyna plugins:link myplugin
```

## `create-firemyna plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-firemyna plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-firemyna plugins unlink
  $ create-firemyna plugins remove
```

## `create-firemyna plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-firemyna plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-firemyna plugins unlink
  $ create-firemyna plugins remove
```

## `create-firemyna plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-firemyna plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-firemyna plugins unlink
  $ create-firemyna plugins remove
```

## `create-firemyna plugins update`

Update installed plugins.

```
USAGE
  $ create-firemyna plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
