# Basics
## Declaration
- `val` is immutable. `var` is mutable
- functional programming is easier to understand cause you dont have to keep track of variables, logic
- sideeffects are used to see what program is doing like print, show...
```
object ValuesVariablesTypes extends App{  
  val x: Int = 42  
  val y = 42 // Types can be inferred  
  println(x, y)  
  
  val aString : String = "hello"; // semicolon is optional  
  val anotherString: String = "world"  
  
  val aBoolean: Boolean = false  
 val aChar: Char = 'a'  
  val anInt: Int = x  
  val aShort: Short = 4613  
  val aLong: Long = 123456789L  
  val aFloat: Float = 2.0f  
  val aDouble: Double = 3.14  
  
  // Variables  
  var aVar = 5  
  aVar = 5  
}
```
## Expressions
**Expressions vs instructions**
Instructions in java are executed. Instruction is something you tell program what to do. Send to server, println
Expressions in scala are evaluated. Expression have value, type. In scala we should focus on expressions.

```
package basic  
  
object Expressions extends App{  
  // expression  
  val x = 1 + 2  
  val y = 1 + 2 * 3  
  
  var a = 2  
  a += 1  
  println(x, y, a)  
  
  // IF expression  
  val aCondtion = false  
 val aVal = if (aCondtion) 5 else 3  
  
  // Weird expression  
  var b = 1  
  val aExp = (b = 2) : Unit // void = unit  
  println(b, aExp, b) // (2,(),2)  
  
 // Code block  val aCodeBlock = {  
    val z = 2  
  val zz = z + 1  
  
  if (zz > 2) "hello" else "bye"  
  }  
  println(aCodeBlock)  
  
  
  // Java version of while - Dont do this  
  var i = 0  
  while (i < 10) {  
    i += 1  
  }  
}
```
## Functions
```
object Functions extends App {  
  def aFunction (a: String, b: Int) : String = (  
    a + " " + b  
  )  
  def aFunctionBlock (a: String, b: Int) : String = {  
    a + " " + b  
  }  
  println(aFunction("a", 1), aFunctionBlock("b", 2))  
  
  def aParameterlessFunc() : Int = 42  
  println(aParameterlessFunc, aParameterlessFunc()) // can be called without ()  
  
  def aRepeatedFunc(aString: String, times: Int) : String = {  
    if (times==1) aString  
    else aString + aRepeatedFunc(aString, times - 1)  
  }  
  println(aRepeatedFunc("low", 10))  
  
  def outerFunc(n: Int) : Int = {  
    def innerFunc(a:Int, b:Int) : Int = a + b  
    innerFunc(n, n-1)  
  }  
  println(outerFunc(10))  
}
```
**Functions - exercises**
```
// 1. greeting func. Hi my name is $name and i am $age years old.  
def greet(name:String, age:Int) : String = (  
  s"Mi name is $name. I am $age years old.")  
println(greet("Lowe", 100))  
  
// 2. Factorial up to n  
def factorial(limit: Int) : Int = (  
  if (limit <= 1) 1  
  else limit * factorial(limit - 1)  
)  
println(factorial(10))  
  
// 3. Is prime  
def isPrime(num: Int) : Boolean = {  
  def isPrimeUntil(t: Int) : Boolean = (  
    if (t <= 1) true  
 else num % t != 0 && isPrimeUntil(t - 1)  
  )  
  isPrimeUntil(num / 2)  
}  
println(isPrime(13), isPrime(131), isPrime(100))
```

## Functions - arguments
```
def call(name: String = "file", height: Int = 100, width: Int = 200) =
println(s"name: $name, height: $height, widht: $width")

call("hello")
call(height = 300, width = 400, name = "test")
```

## Functions - recursive
```
def factorial(n: Int): Int = {  
  if (n <= 1) 1  
  else {  
    println(s"Computing $n - needs ${n - 1}")  
    val result = n * factorial(n - 1)  
    result  
  }  
}  
// println(factorial(1000))  
  
def anotherFactorial(n: Int) : BigInt = {  
  @tailrec  
  def factHelper(x: BigInt, accum: BigInt) : BigInt = (  
    if (x <= 1) accum  
    else factHelper(x- 1, x * accum)  
  )  
  factHelper(n, 1) // tail recursion  
}  
anotherFactorial(10000)  
  
// 1 - recursive concatenation  
def concatenateR(aStr: String, n: Int, accum: String) : String = (  
  if (n <= 0) accum  
  else concatenateR(aStr, n-1, aStr + accum)  
)  
println(concatenateR("low", 10, ""))  
  
// 2 - isPrime recursive  
def isPrime(n: Int): Boolean = {  
  def isPrimeUntil(t: Int, isStillPrime: Boolean) : Boolean = (  
    if (!isStillPrime) false  
 else if (t <= 1) true  
 else isPrimeUntil(t-1, n%t != 0 && isStillPrime)  
  )  
  isPrimeUntil(n/2, true)  
}  
  
// 3 - fibonnaci  
def fib(n: Int) : Int = {  
  def fibHelper(i: Int, last: Int, nextToLast: Int) : Int = {  
    if (i >= n) last  
    else fibHelper(i + 1, last + nextToLast, last)  
  }  
  if (n<= 2) 1  
  else fibHelper(2, 1, 1)  
}  
println(fib(10))
```


## Called by name, called by value
```
  def calledByValue(x: Long) : Unit = {  
    println(s"By name ${x}")  
    println(s"By name ${x}")  
  }  
  def calledByName(x: => Long) : Unit = {  
    println(s"By value ${x}")  
    println(s"By value ${x}")  
  }  
  
  calledByValue(System.nanoTime())  
//  By name 4157502579016079  
//  By name 4157502579016079  
  
  calledByName(System.nanoTime())   // different, works as supplier  
//  By value 4157554462223700  
//  By value 4157554462305640  
  
 // ### Trick - infinity isnt called  def infinite() : Int = 1 + infinite()  
  def printFirst(x: Int, y: => Int) = println(x)  
  printFirst(1, infinite())  
  // printFirst(1, infinite()) - this will trigger infinity
```

## String
```
val str: String = "Hello"  
  
println(str.charAt(2))  
println(str.substring(1, 3))  
println(str.split("  ").toList)  
println(str.startsWith("Hello"))  
println(str.replace(" ", "-"))  
println(str.toLowerCase())  
println(str.length)  
println(str.reverse)  
println(str.take(2)) // Take first 2 chars  
  
val aNumString = "2"  
val aNum = aNumString.toInt  
  
val append = 'a' +: aNumString :+ 'z'; // a2z  
println(append)  
  
// S-interpolators  
val name = "David"  
val age = 122  
val greet = s"Hello, my name is $name. I am $age years old."  
// F-interpolators  
// allows to format data and type check  
val speed = 1.2f  
val myth = f"$name $name%s can eat $speed%2.2f burgers per minute"
```