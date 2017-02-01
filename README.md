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

Your bundled icon will be something like that:

```jsx
import React, { PropTypes } from 'react';

const FaBook = ({ className, size, style }) =>
  <svg
    width={size}
    height={size}
    viewBox="0 0 475.452 475.452"
    style={{ ...style, width: size, height: size }}
    className={`${className ? className + ' ' : ''}Icon Icon--FaBook`}>
    <path d="M468.083 118.385c-3.99-5.33-9.61-9.419-16.854-12.275.387 6.665-.086 12.09-1.42 16.281l-85.65 281.789c-1.526 4.948-4.859 8.897-9.992 11.848-5.141 2.953-10.469 4.428-15.989 4.428H74.66c-22.84 0-36.542-6.652-41.112-19.985-1.903-5.14-1.807-9.229.288-12.275 2.092-2.857 5.708-4.288 10.85-4.288h248.102c17.702 0 29.93-3.285 36.688-9.852 6.763-6.567 13.565-21.177 20.413-43.824l78.228-258.669c4.186-14.084 2.474-26.457-5.141-37.113s-18.462-15.987-32.548-15.987H173.163c-2.474 0-7.329.854-14.562 2.568l.284-.859c-5.33-1.14-9.851-1.662-13.562-1.571-3.71.099-7.137 1.192-10.277 3.289-3.14 2.094-5.664 4.328-7.566 6.706-1.903 2.38-3.761 5.426-5.568 9.136-1.805 3.715-3.33 7.142-4.567 10.282a201.023 201.023 0 0 1-4.281 9.998c-1.62 3.521-3.186 6.423-4.71 8.706-1.143 1.523-2.758 3.521-4.854 5.996-2.091 2.474-3.805 4.664-5.137 6.567-1.331 1.903-2.19 3.616-2.568 5.14-.378 1.711-.19 4.233.571 7.566.76 3.328 1.047 5.753.854 7.277-.76 7.232-3.378 16.414-7.849 27.552-4.471 11.136-8.52 19.18-12.135 24.126-.761.95-2.853 3.092-6.28 6.424-3.427 3.33-5.52 6.23-6.279 8.704-.762.951-.81 3.617-.144 7.994.666 4.38.907 7.423.715 9.136-.765 6.473-3.14 15.037-7.139 25.697-3.999 10.657-7.994 19.414-11.993 26.265-.569 1.141-2.185 3.328-4.853 6.567-2.662 3.237-4.283 5.902-4.853 7.99-.38 1.523-.33 4.188.144 7.994.473 3.806.426 6.66-.144 8.562-1.521 7.228-4.377 15.94-8.565 26.125-4.187 10.178-8.47 18.896-12.851 26.121-1.138 1.906-2.712 4.145-4.708 6.711-1.999 2.566-3.568 4.805-4.711 6.707-1.141 1.903-1.903 3.901-2.284 5.996-.19 1.143.098 2.998.859 5.571.76 2.566 1.047 4.612.854 6.14-.192 2.662-.57 6.187-1.141 10.567-.572 4.373-.859 6.939-.859 7.699-4.187 11.424-3.999 23.511.572 36.269 5.33 14.838 14.797 27.36 28.406 37.541 13.61 10.185 27.74 15.27 42.398 15.27h263.521c12.367 0 24.026-4.141 34.971-12.416 10.944-8.281 18.227-18.507 21.837-30.696l78.511-258.662c4.192-13.708 2.481-25.984-5.137-36.833zm-303.773.571l5.997-18.274c.76-2.474 2.329-4.615 4.709-6.423 2.38-1.805 4.808-2.712 7.282-2.712h173.589c2.663 0 4.565.903 5.708 2.712 1.14 1.809 1.335 3.949.575 6.423l-6.002 18.274c-.764 2.475-2.327 4.611-4.713 6.424-2.382 1.805-4.805 2.708-7.278 2.708H170.593c-2.666 0-4.568-.9-5.711-2.708-1.142-1.813-1.332-3.949-.572-6.424zm-23.695 73.089l5.996-18.271c.76-2.474 2.331-4.615 4.709-6.423 2.38-1.809 4.805-2.712 7.282-2.712h173.583c2.666 0 4.572.9 5.712 2.712 1.14 1.809 1.331 3.949.568 6.423l-5.996 18.271c-.759 2.474-2.33 4.617-4.708 6.423-2.383 1.809-4.805 2.712-7.283 2.712H146.895c-2.664 0-4.567-.9-5.708-2.712-1.144-1.806-1.333-3.949-.572-6.423z" />
  </svg>;

FaBook.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
};

FaBook.defaultProps = {
  size: 25
};

export default FaBook;
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
