## String - Building
```
str = 'String'
str = "Str"
str = """
```
#### Keywords:
String je immutable, sequence, iterable.
- **Mutable** - String i Touple su immutable. Dict, List su mutable.
- **Sequence** - Moze se pristupiti clanu preko indexa. Mape nisu sekvence jer preko kljuca, iako mapa pamti redosled dodavanja.. Tuple i lista su sekvenca.
- **Iterables** - sve strukture kroz koje moze da se iterira.

```
# Immutable
str = 'String'
str[0] = "A" # 'str' object does not support item assignment

Mutable
a=[1,2,3] + [4,5,6]
```
Jos nacina da se kreira:
```
str = 'String'
str = str * 10

a = [1,2]*10
a = np.array([1,2] * 3)
```
## String methods
### Slicing
```
s1 = "Hello"
s2 = "Bojan."
s = s1 + " " + s2

s[:3] # 'Hel'

len(s) # 12 - count
```

### Indexing
#### Metoda za analizu
```
def  scheme_string(s):
print('')
print('String:', s)
print('')
print('Scheme:')
print('|'.join(f'{x: >3}'  for  x  in  range(len(s))))
print(' '.join([f'{x: >3}'  for  x  in  s]))
print('|'.join(f'{-x: >3}'  for  x  in  range(len(s), 0, -1)))
print()
print('Length:', len(s))
```
#### Vezbe:
```
s1 = "Hello"
s2 = "Bojan Bojan."
s = s1 + " " + s2

scheme_string(s)
# 0| 1| 2| 3| 4| 5| 6| 7| 8| 9| 10| 11| 12| 13| 14| 15| 16| 17
# H e l l o B o j a n B o j a n .
# -18|-17|-16|-15|-14|-13|-12|-11|-10| -9| -8| -7| -6| -5| -4| -3| -2| -1

s[1:7] # 'ello B'
s[1::2] # 'el oa.'
s[-3:-7:-1] # 'ajoB'
s[-3:-7: 2] # '' nista jer neg a ide poz
```
#### Indexing
Razlika izmedju find i index je sto ako find ne nadje substring vratice `-1`. Index baca exception.
```
# index substringa
idx = s.index('Bo') # 6 - prvo mesto substring s leve
idx = s.rindex('Bo') # 12 - prvo mesto sa desne strane.
s.index?

idx = s.index('Bo', 7) # 12
idx = s.index('Bo', 7, 17) # 12
# idx = s.index('Bo', 7, 13) # ValueError: substring not found

# Radi sa listama
[1,2,3,4,5,3,2].index(3,4) # 5 - trazi 3, pocevsi od 4 indexa

# Trick to reverse string or array
task_text_4 = "reverse every word of this sentence"
str = task_text_4[::-1]

# Find
"This is some text".find("not existing")    # -1
"This is some text".find("some")            # 8
"This is some text...".rfind("some")        # 8
```
### Format string
```
# Trim
'    Strip this.   '.strip() # 'Strip this.'
'    Strip this.   '.lstrip() # 'Strip this.    '
'    Strip this.   '.rstrip() # '    Strip this.'

# Case
"this is".capitalize() # 'This is'
"this is".upper()   # 'THIS IS'
'THIS IS'.lower()   # 'this is'
'A one'.casefold()  # 'a one'
'a one'.title()     # 'A One'
'A One'.swapcase()  # 'a oNE'

# Navodno je casefold agresivniji, tipa ß se pretvara u ss
"Thérè Ãrè Ünicodé Chàractèrsß".casefold()
"Thérè Ãrè Ünicodé Chàractèrsß".lower()

# Padding
"Hello".ljust(10," ") # 'Hello     '
"Hello".rjust(10,">") # '>>>>>Hello'
```
### String F Formating
```
print("a+b=",5)

var = "Bojan"
s = f"My name is {var}."
s

a = 5
b= 3
print(f"This is {a+b:.2f}")
# .2f  to sto ces da formatiras je float. Formatiraj sa 2 decimale
print(f"This is {var.upper():s}")
# prema sistemskom podesavanju za formatiranja brojeva
print(f"This is {a+b:n}")
print(f"This is {a+b:e}")

print(f"{'Word':+>30s}")
# > poravnanje po desnoj strani u sekvenci sa 30 mesta. A prazna popuni sa +

print(f"{'Report':-^20}") # -------Report-------
```


### Count - Is In
```
s.count("Bo") # 2
[1,2,3,1,1].count(1) # 3

# check for min and max in array or string
a = [1,2,3]
min(a) # 1
max(a) # 3
min(" abc") # ' '
max(" abc") # c
```
#### String - check for boolean
```
'H' is "Hello"   # True
4 in [1,2,3]    # False

"This" == "This"  # True
"This" == "This " # False

"This".startswith("Th")
"This".endswith("is")

# Check case
"A Ano".istitle() # True
"    ".isspace() # True
...
```

### Range
Ranije je range kreirao listu sto je problem ukolimo imas milione objekata. Sada Range kreira objekat koji daje sledeci broj sa svakim pozivom.
```
a = list(range(len(s))) 
a # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

### Spliting
```
a = "Hello there its here".split() # ['Hello', 'there', 'its', 'here']
a = "Hello there its here".rsplit() # ['Hello', 'there', 'its', 'here']
a = "Hello there its here".split(maxsplit=2) # ['Hello', 'there', 'its here']

# partition nadje substring i podeli na pre, to, posle. Na 3 dela
a = "Hello is there its is here".partition("is") # ('Hello ', 'is', ' there its is here')
"Hello there".replace("there", "here") # 'Hello here'
```

# Encoding
Unicode - Svako slovo je predstavljeno brojem. A nacin na koji se taj broj upisuje u memoriju zavisi da l je UTF-8 ili ASCII. Prvih 256 karaktera su isti kako bi bili isti.
Unicode i UTF-8 su razlicite stvari. Unicode je imao 7 pozicija.

```
# ascii je po defaultu setovan 128. Ali moze 256
"unique".encode("ascii")

"unique".encode("utf-8")
# b'\xcs...'
```
`b'\` znaci binarni array u python.

Prilikom citanja fajla pomocu open u py, koristi se encoding samo je sakriveno.
```
chr(33) # '!'

'a' > 'b'  # False
'b' > 'a'  # True
'aab' > 'aaa'  # False
'aaaa' > 'aaa'  # True

sorted([5,74,76,1]) # [1, 5, 74, 76]
sorted("Hello there") # [' ', 'H', 'e', 'e', 'e', 'h', 'l', 'l', 'o', 'r', 't']
```
### Otvaranje fajla
```
with open('_data/python_zen.txt', 'r', encoding="utf-8") as f:
    line = f.readlines()
    print(line) # sve istampa u jednoj liniji sa \n
```
#### Specijalni karakteri
```
\n - new line
\n\r - new line na windowsu
\r - carriage return
\t - tab
```

### String comprehension
```
task_text_8 = 'Remove every vowel from this sentence'
str = [chr for chr in task_text_8 if chr not in ['a','e','i','o','u']]

task_text_7 = 'Remove every word from this sentence having less than five characters'
str = [word for word in task_text_7.split() if len(word) < 5]
# ['word', 'from', 'this', 'less', 'than', 'five']
```