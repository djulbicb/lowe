## Colaboratory
Python is general usage language, while R is for statistics. 

To run commands add `!`
```
!cat /proc/meminfo
!cat /proc/cpuinfo
```
Hint: Shift enter to go to next cell

  
### Import library
```
!pip install pandas

import pandas as pd
df = pd.read_csv("/content/sample_data/california_housing_test.csv")
## prints first 5 rows
df.head()
print("Machine learning")
```

## Data types

- int - Integer - `int(5.88)` = 5
- float - Floating point - `float(5)`= 5.0
- str - String
- bool - True False - `bool("True"), a = True, a = 7<3`
- complex - `c = 1 + 3j`
```
print(c)
type(c)
```

### Constants & Variables
```
superhero = "Iron Man"
marvel_super_hero = "Batman"
print(superhero)
  
item1, item2, item3 = "Value1", "Value2", "Value3"
print(item1, item2)

## Add same value to multiple variables
x = y = z = 3
print(x, y, z)
```

### Input
```
num1 = input("Enter the first number: ")
num2 = input("Enter the second number: ")
sum = int(num1) + int(num2)
print(sum)
```
  

### Indexing & Slicing
```
name = "Programming"
print(name[1:5]) # rogr

name = "Programming"
print(name[1:5:2]) # rg - skip indexes
```

## Python special data types
- Mutable objects (Int float string bool tuple)
- Immutable objects (List Set Dictionary)

### List
List allows duplicated values, Set doesn't

```
my_list = [1, 2, 3, 4, 5, "English", True]
print(my_list)
type(my_list)

my_list.append(6) 

print(my_list[0]) # 1
print(my_list[3]) # 4
print(len(my_list))
```

#### empty list
```
list_2 = []
```
#### delete
cant delete in immutable types
```
del my_list[2]
print(my_list)
```
### join two lists
```
list_3 = [1,2,3,4]
list_4 = [5,6,7,8]
list_5 = list_3 + list_4
```
### Tuple
```
tuple_1 = (2,3,4,5, "Machine Learning", True)
print(tuple_1)
type(tuple_1)
```
## Converting list to tuple
```
listElem = [3,4,5,6]
tupleElem = tuple(listElem)
print(tupleElem[1], tupleElem[2])
```
  

## Set
Set doesnt support indexing. Doesnt allow duplicate values
```
my_set = {1,2,3,4,5}
print(my_set)
type(my_set) # set

set_3 = {1,1,1,2,3,4}
print(set_3)
```
  
### convert list to set
```
list_5 = [4,5,6,7,8]
set_1 = set(list_5)
```  

## Dictionary
Key Value Pair - cant have duplicate values (only list and tuple)
```  
my_dict = {"name":"David", "age":30, "country":"India"}

print(my_dict)
type(my_dict)
print(my_dict["name"])
```  
  
  

## Operators in Python

- Arithmetic
- Assignment
- Comparison
- Logical
- Identity
- Membership Operators

 

### Arithmetic
```  
num_1 = 20
num_2 = 10

sum = num_1 + num_2
diff = num_1 - num_2
div = num_1 * num_2
mult = num_1 / num_2
exp = num_1 ** num_2 # exponent
mod = num_1 % num_2 # modulus
```  
  

### Assigment
```  
a = 5
a += 5

+= -= *= /= **= %=
```  
  

### Comparison
```  
a = 5
b = 10

print(a == b)
print(a != b)
print(a > b)
print(a >= b)
```  
  

### Logical
```  
and or not
```  
  
  

### Identity
```  
x = 5
y = 5
print (x is y) 		# True
print (x is not y) 	#  False
```  
  

### Memebership

Da l i je u nizu. `in`  `not in`
```  
a = 5
b = 10
c = [1, 2, 3, 5 ]
print ( a in c)
```

## If/Else
```
a = 30
b = 50

if (a > b):
    print('a is greater')
else:
    print('b is greater')

a = 15
b = 25
c = 30
if (b < a > c):
    print("a")
elif (a < b > c):
    print("b")
else:
    print("c")

# nested if
if (a>b):
    if (a > c):
        print("a")
    else:
        print("c")
else:
    if (b>c):
        print("b")
    else:
        print("c")
```
  

## loops

### For loop
```
laptop = int(input("Enter price of laptop: "))

for i in range(5):
    laptop_price = it(input("Enter the price: "))

numbers = [50,10,20]
for i in numbers:
    print(i)
```

  
### while loops
```
while i<10:
    print(i)
    i += 1
```

## Functions
```
def factorial(input: int) :
  if (input <= 0):
    return 1
  return factorial(input - 1) * input

print(factorial(3))
```
