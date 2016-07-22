#"Hello World"七十二绝技

##技一: 龙吼功
```
let compose = (f, g) => a => f(g(a))
 
let toUpperCase = x => x.toUpperCase()
let exclaim = x => x + '!'
let shout = compose(exclaim, toUpperCase);
 
shout("hello world") // HELLO WORLD!

```
###增强型龙吼功
```
let scream=compose(exclaim,shout);
scream("hello world") //HELLO WORLD!!
```
