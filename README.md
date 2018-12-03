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
- Appearance
  - [Appearance.Color](#appearancecolor)
  - [Appearance.Draw_Points](#appearancedraw_points)
- Manipulate
  - [Manipulate.Lerp](#manipulatelerp)
  - [Manipulate.Same_Points](#manipulatesame_points)

### Initialization.Points

| Type   | Default | Min | Max   |
|:------:|:-------:|:---:|:-----:|
| Number | `3`     | `3` | `100` |

The number of edge points to use.

### Initialization.Random

| Type    | Default |
|:-------:|:-------:|
| Boolean | `false` |

If the edge points should be randomly positioned in the window.
If set to false the edge points are equally spaced around the center of the screen.

### Initialization.Generation

| Type   | Default | Min |
|:------:|:-------:|:---:|
| Number | `1000`  | `1` |

The number of edge points to place per draw call

### Appearance.Color

| Type    | Default |
|:-------:|:-------:|
| Boolean | `true`  |

Draw the chaos points with color based off the starting point index.

### Appearance.Draw_Points

| Type    | Default |
|:-------:|:-------:|
| Boolean | `true`  |

Draw the edge points.

### Manipulate.Lerp

| Type   | Default | Min | Max |
|:------:|:-------:|:---:|:---:|
| Number | `0.5`   | `0` | `1` |

The distance between the current chaos point and the next edge point.
`0.5` is half way.

### Manipulate.Same_Points

| Type    | Default |
|:-------:|:-------:|
| Boolean | `true`  |

Allows the next edge point to be the same as the last edge point.

## Branches

| Branch | Travis CI | Server |
|:-------|:----------|:-------|
| [Master](https://github.com/roryclaasen/chaos/tree/master) | [![Build Status][CI-master]](https://travis-ci.com/roryclaasen/chaos) | [GitHub Pages](https://roryclaasen.github.io/chaos) |

## License

This project is licensed under the MIT License - see the [license file](LICENSE) for details

[CI-master]: https://travis-ci.com/roryclaasen/chaos.svg?branch=master "Travis CI"
