# gitbook-plugin-sbt-tut

GitBook Plugin for convert \`\`\`tut to \`\`\`scala

[tut](https://github.com/tpolecat/tut) is doc/tutorial generator for scala.


## Motivation

tut compiles

```tut
1 + 1
```

to

```scala
scala> 1 + 1
res0: Int = 2
```


but, I just want to compile it to checking codes are not broken.(REPL output is not needed for me.)
so I use source markdown (not tut generated markdown).

but, syntax highlight is inactive becasue it's not \`\`\`scala.

so I wrote plugin to converting \`\`\`tut to \`\`\`scala.

## Installation

book.json

```json
{
  "plugins": [
    "tut-to-scala"
  ]
}
```

and

```sh
gitbook install
```

## Usage

Before

\`\`\`tut  
class A {}  
\`\`\`

After

\`\`\`scala  
class A {}  
\`\`\`

## License

MIT
