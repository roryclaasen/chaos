# Chaos Game

> [roryclaasen.github.io/chaos](https://roryclaasen.github.io/chaos)

My visualization of the Chaos Game

## Contents

- [Options](#options)
- [Branches](#branches)
- [License](#license)

## Options

- Initialization
  - [Initialization.Points](#initializationpoints)
  - [Initialization.Random](#initializationrandom)
  - [Initialization.Generation](#initializationgeneration)
- Manipulate
  - [Manipulate.Lerp](#manipulatelerp)
  - [Manipulate.Color](#manipulatecolor)

### Initialization.Points

| Type   | Default | Min | Max   |
|:------:|:-------:|:---:|:-----:|
| Number | `3`     | `3` | `100` |

The number of points to use

### Initialization.Random

| Type    | Default |
|:-------:|:-------:|
| Boolean | `false` |

If the points should be randomly positioned in the window.
If set to false the points are equally spaced around the center of the screen

### Initialization.Generation

| Type   | Default | Min |
|:------:|:-------:|:---:|
| Number | `1000`  | `1` |

The number of points to place per draw call

### Manipulate.Lerp

| Type   | Default | Min | Max |
|:------:|:-------:|:---:|:---:|
| Number | `0.5`   | `0` | `1` |

The distance between the current point and the next point.
`0.5` is half way.

### Manipulate.Color

| Type    | Default |
|:-------:|:-------:|
| Boolean | `true` |

Draw the points with color based off the starting point index.

## Branches

| Branch | Travis CI | Server |
|:-------|:----------|:-------|
| [Master](https://github.com/roryclaasen/chaos/tree/master) | [![Build Status][CI-master]](https://travis-ci.com/roryclaasen/chaos) | [GitHub Pages](https://roryclaasen.github.io/chaos) |

## License

This project is licensed under the MIT License - see the [license file](LICENSE) for details

[CI-master]: https://travis-ci.com/roryclaasen/chaos.svg?branch=master "Travis CI"
