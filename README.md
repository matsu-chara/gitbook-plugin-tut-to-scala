# gitbook-plugin-sbt-tut

GitBook Plugin for convert 

\`\`\`tut 

to 

\`\`\`scala

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


But, I just want to compile it to check if the codes are not broken.(REPL output is not needed for me.)
So I use source markdown (not generated markdown by tut).

But, syntax highlight is inactive because it's not \`\`\`scala.

So I wrote a plugin for converting \`\`\`tut to \`\`\`scala.

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
