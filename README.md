<p align="center"><img src="./resources/logo.png" title="Reicons" /></p>

## What is it?

If you work with React, you know that the library enables you to manage and use your icons in a lot a ways. This is good because you have flexibility to manage them as you want. So, in many cases this workflow can become a manual and massive process that you need to do so many times.

Reicons is a simple CLI tool that helps you to manage and use your icons quickly and easily. Just that? Yes, see how easy is to use it.

## Install

The first thing that you need to do to use Reicons is install it globally via NPM or as a dependency at your project:

```bash
$ npm install [--global|--save] @drvem/reicons
```

After that you can see Reicons working:

```bash
$ reicons --help

reicons -p [<package-dir:package-prefix>] -s <dir> -b <dir>

Options:
  --version       Show version number                     [boolean]
  --packages, -p  Your svg icons packages                 [array]
  --src, -s       Directory with the icons folder         [string]
  --build, -b     Build directory                         [string]
  --help          Show help                               [boolean]
```

## Usage

You need to know just few things to use the tool. As you've seen above, Reicons need to read a list of svg icons and know where you want to bundle your components.

So, to bundle your icons you need to pass three arguments: `--package`, `--src` and `--build`.

### `--package`

One or more packages that you will use as icons. This argument has a default style to write, because we need it to find and create your svg files.

The default style to write your package is: `<package-directory>:<package-prefix>`

The `package-directory` is the folder name of your svg icons and the `package-prefix` is the name that we will use to prefix your components.

### `--src`

The source directory when your packages folder is.

### `--build`

The build directory when you want to create your components.

## Example

Let's use the [default example folder](./example/default) as example. There's we have an `images` folder that have two folders [font-awesome](./example/default/font-awesome) and [icons](./example/default/icons) with a lot of svg files inside. So, we want to build our components at folder `components/Icons`. To do that, we can run:

```bash
$ cd example/default
$ reicons -p font-awesome:fa icons:ic -s images -b components/Icons
```

After we this command, Reicons will generate our components in a folder structure like that:

```bash
.
├── components
└── images
    ├── font-awesome
    └── icons
```

If we look at `components` folder we have a lot of bundled components separated by prefix:

```bash.
.
└── components
    └── Icons
        ├── Fa
        │   ├── Book.js
        │   ├── CreditCard.js
        │   └── GithubLogo.js
        ├── Ic
        │   ├── Home.js
        │   ├── Location.js
        │   └── Search.js
        └── index.js
```
