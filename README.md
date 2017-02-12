[![GitHub release](https://img.shields.io/github/release/pedronauck/reicons.svg)]()

<p align="center"><img src="./resources/logo.png" title="Reicons" /></p>

# 🤔 &nbsp; What is it?

If you work with React, you know that the library enables you to manage and use your icons in a lot a ways. This is good because you have flexibility to manage them as you want. So, in many cases this workflow can become a manual and massive process that you need to do so many times.

Reicons is a simple CLI tool that helps you to manage and use your icons quickly and easily.

<p align="center"><img src="https://d17oy1vhnax1f7.cloudfront.net/items/2L280T3Y340G0L3H0s1Z/reicons.gif" title="Gif Example" width="100%" /></p>

# 👌 &nbsp; Advantages

- [x] Require your icons as a simple React component
- [x] Customize your icons with just css or inline styles
- [x] Resize them in a prop way
- [x] No `.svg`, `.png` or `.jpg` inside your bundle

That's great no? See more information above about how to use!

# 🔌 &nbsp; Install

The first thing that you need to do to use Reicons is install it globally or as a dependency at your project:

```bash
$ yarn [global] add reicons
```

After that you can see it working:

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

# 💻 &nbsp; Example

Let's use the [default example folder](./example/default) as example. There's we have an `images` folder that have two folders [font-awesome](./example/default/font-awesome) and [icons](./example/default/icons) with a lot of svg files inside. So, we want to build our components at folder `components/Icons`. To do that, we can run:

```bash
$ cd example/default
$ reicons -p font-awesome:fa icons:ic -s images -b components/Icons
```

After this command, Reicons will generate our components in a folder structure like that:

```bash
.
└── components
    └── Icons
        └── index.js
```

With that you can just import your icons as a simple React component:

```jsx
import { FaBook } from './components/Icons';

const App = () => (
  <div>
    <FaBook />
  </div>
);
```

or import the entiry bundled icons and define what you want passing a prop `name`

```jsx
import Icon from './components/Icons';

const App = () => (
  <div>
    <Icon name="FaBook" />
  </div>
);
```

# ⚙ &nbsp; Usage

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
