# Deprecated

# gitbook-plugin-sbt-tut

GitBook Plugin for replacing 

\`\`\`tut 

to 

\`\`\`scala

[tut](https://github.com/tpolecat/tut) is doc/tutorial generator for scala.


## Motivation

`sbt tut && gitbook build` is slow (because of sbt startup). 
I want to compile it to verify the codes, but I don't want to wait for sbt startup.

So, I decide to use src markdown for building gitbook, and use tut in CI testing (just compile).

using src markdown makes syntax highlight inactive, because it's not \`\`\`scala but `\`\`\tut.

So I wrote a plugin for replacing \`\`\`tut to \`\`\`scala.

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
