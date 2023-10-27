# Citanje dataseta

Postoji i varijanta iz baze pd.read_sql()
```
import os
import pandas as pd

parentFolderPath = os.path.dirname(os.getcwd())
csvPath = os.path.join(os.getcwd(), "_data", "BostonHousingData.csv")

df = pd.read_csv(csvPath)
display(df)
```

`display()` je metoda koju po defaultu jupiter poziva ako je promenljiva izolovana na kraju.

## Dimenzionalnost data set
```
import os
import pandas as pd

parentFolderPath = os.path.dirname(os.getcwd())
csvPath = os.path.join(os.getcwd(), "_data", "BostonHousingData.csv")

df = pd.read_csv(csvPath)
# display(df)

# citanje n redova
df.head(5)
df.tail(5)

# broj redova/broj kolona - (506, 14)
# Objekti drze attribute i metode. Shape je atribut
df.shape

# indexi - ima za red i kolone
df.axes[0] # RangeIndex(start=0, stop=506, step=1)
df.axes[1] # Index(['crim', 'zn', 'indus', 'chas'...
```

## Kreiranje dataset
- pokusa da prepozna podatak ali ako je nesto NaN u INT kolona. Pandas ce prepoznati kao Float jer NaN je float.
- Ako vidi prazan string, celu kolonu ce kao String
- Ako ne prepozna, proveri fajl
- nekad prepozna float64 a treba float32, zauzme dosta prostora
```
import os
import pandas as pd

parentFolderPath = os.path.dirname(os.getcwd())
csvPath = os.path.join(os.getcwd(), "_data", "BostonHousingData.csv")

# Kreiranje DF na osnovu mape
## 1
dataset = {
    "Name" : ["Bo", "Jan", "Go", "Ld"],
    "Height" : [180,160,170,190]
}

data = pd.DataFrame(dataset)
data.index # RangeIndex(start=0, stop=4, step=1)

data = pd.DataFrame(dataset, index=['a','b','c','d'])
data.index # Index(['a', 'b', 'c', 'd'], dtype='object')
type(data.index) # pandas.core.indexes.base.Index

# Spisak kolona
data.columns # Index(['Name', 'Height'], dtype='object')

## 2
data = [
    ["Milk", 10],
    ["Sugar", 15],
    ["Spice", 14]
]
data = pd.DataFrame(data, columns=["Item", "Price"])

## 3
dataset = {
    "IT" : {
        "Name" : "Mark",
        "Age" : 33,
        "Gender" : "Male"
    },
    "Design" : {
        "Name" : "Maria",
        "Age" : 20,
        "Gender" : "Female"
    }
}

data = pd.DataFrame(dataset) 
# kolone IT, Design, 
# Redovi: Name, Age, Gender
data.index # Index(['Name', 'Age', 'Gender'], dtype='object')


data = pd.DataFrame(dataset)
data.shape # (4, 2)
data.size # 8
data.shape[0] * data.shape[1] == data.size

# Da li je data frame prazan
data.empty
```
Ako ne prepozna tip podatka, znaci da je neki problem.

# Obrada dataseta
Data Wrangling - Dodovanje, ciscenje podataka
Feature Engineering - Dodavanje novih kolona, kreiranje novih podataka na osnovu drugih

## DataFrame index, slicing, subsetting

- Sa loc radimo sa imenima rada - indexing by label
- sa iloc on sam indexira redom, bez obzira na zadat raspored indexa - indexing by number

```
dataset = {
    "Name" : ["Bo", "Jan", "Go", "Ld"],
    "Height" : [180,160,170,190]
}

data = pd.DataFrame(dataset, index=[50,30,5,7])
data.loc[5] # Name Go; Height 170 
data.iloc[2]  # Name Go; Height 170 

data.loc[5, "Name"]
data.iloc[2,0]


# Slicing - exclusive range
data.iloc[0:1]

# Multiple - Vraca dataframe a ne seriju. Serija je specifican red
data.loc[[50,5]]

# multiple column
data = pd.DataFrame(dataset, index=["a","b","c","d"])
data.loc["a":"c"]
data.loc["a":"c", ['Height']]
```

# Filtering
```
d = {"key" : 4}
d["key"]

df = pd.read_csv(csvPath)
df["medv"]
df.loc[:,"medv"] # za filtriranje i odbacivanje podataka

# Moze ovako citanje
tmp = df[["indus", "medv"]][0:10]
type(tmp)
# ali bolje loc i iloc


# Slicovanje loc sa boolean vrednostima
dataset = {
    "Name" : ["Bo", "Jan", "Go", "Ld"],
    "Height" : [180,160,170,190]
}
data = pd.DataFrame(dataset)
data.loc[[True, True, False, True]] # ignorise index 2 - Dataframe
data.loc[[True, True, False, True], 'Name'] # Series
data.loc[[True, True, False, True], ['Name',"Height"]]

# vise uslova
df.loc[df["medv"] > 30, ["crim", "zn"]]
df.loc[(df['medv']>= 20) & (df['medv']<= 40), ['age']]

# konvertovanje serije u listu
df.loc[df["medv"] >= 30, "medv"].to_list()
list(df.loc[df["medv"] >= 30, "medv"])

# uslovi - poredjenje sa vise vrednosti - isin
sel_index = [27,9,5]
df.loc[df['medv'].isin(sel_index), ['medv']]
```
# Serije
```
# Kreiranje serije
name = pd.Series(["Marko", "Perica", "Julia", "Natasa"])
name = pd.Series(["Marko", "Perica", "Julia", "Natasa"], dtype=str)
age = pd.Series([10,13,6,7])

#Kreiranje Dataframe od serije
data = pd.DataFrame({
    "name": name,
    "age" : age
})
data

# Explicitno imenovanje indexa u seriji
name = pd.Series(["Marko", "Perica", "Julia", "age"], index=["a","b","c","d"])
data = pd.DataFrame({
    "name": name,
    "age": age
})
data # probace da ih poslozi ali indexi name i age ne odgovaraju. Umesto toga unija lista bude
# Prilikom kombinovanja sa explicitnim indexa, moze da dodje do greske i da se stackuju ovako

# Aritmeticke operacije sa serijama
age = pd.Series([1,2,3,4])
age + 1
age * 2
```

# Izbacivanje kolone
```
medv = df['medv']
# Axis 1 - Po dimenziji kolona 
df.drop('medv', axis=1, inplace=True)
# df.drop(columns=['medv'])

# Dodavanje kolone - indexi su se uparili
df['medv'] = medv
df
```
# Promena pozicije kolona
```
data = {'Name': ['Marija', 'Ann', 'Tony', 'Sabina', 'Peter'],           
           'Class': ['A', 'A', 'B', 'C', 'D'],
           'Grade': [55, 73, 81, 78, 12]}
data = pd.DataFrame(data)
data.iloc[:, [0,2,1]]
```


# Pazi se
Bolje naglasi da je index. Ovo nije lista lista
```
a = [1,2,3]
b = ['a','b','c']
my_data = pd.DataFrame(a, b)
my_data = pd.DataFrame(a, index=b, columns=['zadavanje ime kolone'])
display(my_data)
```
# Fora 1
```
data = [['col1', 'col2', 'col3'], [1,2,3], [4,5,6]]
my_data = pd.DataFrame(data[1:], 
                       columns=data[0],
                       index = ['row1','row2'])
```

# ZIP
Prihvata argumente koji su iterable.
Poredja clanove ntorke koliko ima lista. Pravi tuple clanove
```
name =  ['John','Peter','Mike','Andrew']
salary = [4000,3500,1500,5000]
yrs = [1,3,2,4]
ntorka = list(zip(name,salary,yrs))

my_data = pd.DataFrame(ntorka,
                       columns=['name','salary','yrs'])
display(my_data)
```

# ZIPOVANJE
```

# Zip u dictionary
l1 = [1,2]
l2 = ['a', 'b']
z = zip(l1,l2)
z = dict(z) # {1: 'a', 2: 'b'}

keys = ('name', 'last_name', 'department')
values = (('Marija','Marko'), ('Janic','Miskovic'), ('Anthroplogy', 'Philosophy'))
my_data = dict(zip(keys, values))
print(my_data)

# Tuples u df
keys = ['name', 'last_name', 'department']
values = [['Marija','Marko'], ['Janic','Miskovic'], ['Anthroplogy', 'Philosophy']]
my_data = dict(zip(keys, values))
print(my_data)

# Osnovna vizualizacija
# Beanove - diskretne vrednosti koje se sabiraju
df = pd.read_csv(csvPath)
df['medv'].hist()
df.plot.scatter(x='age',y='medv')
df.boxplot('age')

# aritmeticka sredina ili medijana
df['medv'].mean()
# filter pre medijane
df.loc[df['medv']>20]['medv'].mean()
```

# Projekti
Klasifikacija regresija
https://www.kaggle.com/

- cena nekretnine tipa


# Tipovi podatka

```
df.dtypes

# crim       float64
# zn         float64
# indus      float64
# chas         int64

# detaljnije - vidi se dtype, index kolone za iloc, memory usage
df.info()
# ---  ------   --------------  -----  
#  0   crim     506 non-null    float64
#  1   zn       506 non-null    float64
#  2   indus    506 non-null    float64
#  3   chas     506 non-null    int64  
```

# Razlika sequence i iterable
Razlika izmedju sequence i iterable
Iterable ima prethodni i sledeci clan.

List string tuple su iterables i moze u for petlji

Ali ako mozemo da pristupimo indexu onda je to sequenca. Mapa nije sequence jer se pristupa preko kljuca

# Comprehension - LIST

# Comprehension - MAPA

# KONTROLA TOKA
```

for item in medv:
    if round(item) % 2 == 0:
        print("Rounded " + str(item) + ' is even')
    else:
        print("Rounded " + str(item) + ' is odd')

for n in "Bojan":
    print(n)

for n in (1,2,3):
    print(n)

data = {"a": 1, "b": 2}
for k in data:
    print(k, data[k])

# unpacking using .items()
for kv in data.items():
    key,value = kv
    print(key,value)

for _,val in data.items():
    # _ obicno stavljeno kad ignorisemo nesto
    print(val)    

# changing values in list by index
medv_discount = list(df['medv'])
for price in range(len(medv_discount)):
    medv_discount[price] = round(medv_discount[price] - .2*medv_discount[price],2)

# Razlicite implementacije python CPython i JPython
```

# WHILE and FOR loops
```
l = list()
x = 1
while x < 100:
  if x % 2 == 0:
    l.append(x)
  x += 1

l_1 = [1, 2, 3, 4, 5, '6', 7, 8, 9]
for i in range(len(l_1)):
    if isinstance(l_1[i], str):
        break
    else:
        print(l_1[i])

l_1 = [1, 2, '3', 4, 5, '6', 7, 8, '9']
i = 0
for i in range(len(l_1)):
    if isinstance(l_1[i], str):
        continue
    print(l_1[i])
```



import os
import pandas as pd

parentFolderPath = os.path.dirname(os.getcwd())
csvPath = os.path.join(os.getcwd(), "_data", "BostonHousingData.csv")

# LIST - COMPREHENSION

df = pd.read_csv(csvPath)
medv = df['medv'][:20]

## Take first letter
arr = ["Bo", "Jan", "Lowe"]
out = [x[0] for x in arr] # ['B', 'J', 'L']
out

out = [round(x - .2*x, 2) for x in medv]
out

# list comprehension vs 2 for loops
l_1 = ['A', 'B', 'C']
l_2 = ['X', 'Y', 'Z']
out = [el1 + ":" +  el2 for el1 in l_1 for el2 in l_2] # ['A:X', 'A:Y', 'A:Z', 'B:X', 'B:Y', 'B:Z', 'C:X', 'C:Y', 'C:Z']
out

result = list()
l_1 = ['A', 'B', 'C']
l_2 = ['X', 'Y', 'Z']
for el1 in l_1:
for el2 in l_2:
result.append(el1 + ':' + el2)
result

outWithTouples = [(el1, el2) for el1 in l_1 for el2 in l_2]
outWithTouples

# MAP - COMPREHENSION
sqr = {num: num*num for num in range(1,11)}
sqr # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100}

properties = ['p_' + str(i) for i in range(0, 20)]
medv_dict = dict(zip(properties, medv)) # {'p_0': 24.0, 'p_1': 21.6 ...


# U kombinaciji sa metodom
def isSomething(x):
if x**2 == 100:
return(True)
else:
return(False)
l1 = [1, 10, -10, 4]
out = [isSomething(n) for n in l1]
out # [False, True, True, False]

# if elif else
x = 10
if x < 20:
print("If")
elif (x > 10):
print("Elif")
else:
print("Else")