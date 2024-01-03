Assigment:
Case classes converts mylist


# Classes

## Case classes
`case class Person(name: String, age: Int)`
For lightweight classes with fields, equals, hashCode, toString.
- class params are fields
- has toString, equals, hashcode, copy methods
- has companion object
- serializable
- has extractor patterns for pattern matching
```
object CaseClasses extends App {  
  case class Person(name: String, age: Int)  
  
  // 1. class params are fields  
  val jim = new Person("Jim", 34)  
  println(jim.name) // Jim  
  
  // 2. toString()  println(jim) // Person(Jim,34)  
  
  // 3. equals and hashcode  val jim2 = new Person("Jim", 34)  
  println(jim == jim2)  
  
  // 4. Has copy method with options to override  
  val jim3 = jim.copy()  
  val jim4 = jim.copy(age=45)  
  println(jim4) // Person(Jim,45)  
  
  // 5. Have companion objects. We dont use new  val thePerson = Person  
  val mary = Person("Mary", 23)  
  
  // 6. Serializable. Good for distributed system, send classes between JVM. Akka uses this  
  
  // 7. Have extractor patterns in Pattern Matching   // Case objects are possible. But they dont get companion object  
}
```
## Enums
Reworked in version 3
```
enum Permissions {  
  case WRITE, READ, EXECUTE, NONE  
  
  def openDocument() : Unit =  
    if (this == READ) println("opening...")  
    else println("reading not allowed")  
}  
  
val somePermissions: Permissions = READ  
  
enum PermissionsWithBits(bits: Int) {  
  case WRITE extends PermissionsWithBits(4)  
  case READ extends PermissionsWithBits(2)  
  case EXECUTE extends PermissionsWithBits(1) // 001  
  case NONE extends PermissionsWithBits(0)    // 000  
}  
object PermissionsWithBits {  
  def fromBits(bits: Int) : PermissionsWithBits = NONE  
}  
  
// API  
val somePermissionOrdinal = Permissions.NONE.ordinal  
val allPermissions = Permissions.values  
  
println(somePermissionOrdinal)  
println(allPermissions)
```

## Anonymous Classes
```
// anonymous class  
abstract class Animal {  
  def eat: Unit  
}  
val animal : Animal = new Animal:  
  override def eat: Unit = println("Nom Nom")  
  
// override existing  
class Person(val name: String) {  
  def say: Unit = println(s"Hi my name is $name")  
}  
val jim = new Person("Jim") {  
  override def say: Unit = println(s"Overrided name $name")  
}
```