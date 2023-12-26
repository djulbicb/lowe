# Exploratory Data Analysis
```
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns # seaborn koristi matplot i moze se spustiti na matplot
import warnings

warnings.filterwarnings("ignore")
```
## Reading and checking nulls
Prvi korak je da se upoznas sa podacima.

Metoda `pd.read_csv()` ima flag `index_col=0` - Kada se sacuva csv, sacuva se index kao kolona. Ovo kaze pd da koristi tu kolonu umesto da pravi svoju i ucita ovu kao `unnamed` kolonu.

Metodom `df.isnull()` proveravaju se null vrednosti. Vraca boolean dataframe koji se posle sumira. Prilikom sumiranja `True == 1` a `False == 0`
```
csvPath = os.path.join(os.getcwd(), "_data", "flights_session06.csv")
df = pd.read_csv(csvPath, index_col=0);

df.isnull() # boolean map
df.isnull().sum() # daje seriju, ime kolone i count true vrednosti ie year: 1021
df.isnull().sum().reset_index().rename(columns={0:'count'})#.drop(columns=["old_index"])
```
Postoji metoda `df.isna()` koja vraca boolean dataframe koja mapira da li postoji vrednost ili ne.
```
df.isna().sum(axis=0) # sabira u redu, default
df.isna().sum(axis=1) # sabira u koloni
```
Metode se chainuju u redu a ako treba multiline
```
# multiline call - obrati paznju na return tip
(df 																# dataframe
	.isna()															# dataframe
    .sum()															# serija
    .reset_index()													# dataframe sa indexom kao kolona. Ali zato moze 
    .rename(columns={0:'count'})
	.sort_values('count', ascending=False)
)
```
### Assing - Kreiranje nove kolone na osnovu ovih podataka
Dodeljuje vrednosti koje ce biti izracunate ovom lambda funkcijom
```
def  testm(x):
	return  x['count'] / len(df) * 100

(df.isna().sum().reset_index()
 .rename(columns={'index':'feature', 0:'no_nulls'})
 .sort_values('no_nulls', ascending=False)
 .assign(perc_nulls = lambda x: x['no_nulls'] / len(df) * 100))
 
# varijacije 
#.assign('perc nulls' = lambda x: x['no_nulls'] / len(df) * 100))
#.assign(test = testm)
```
Ako su neke kolone suvisne obrise se. A ako fali moze korak `imputacija` gde se pravi nova kolona na osnovu drugih tipa srednja vrednost.

### Anonimne metode
Nema ime.
```
f = lambda  argument: argument ** 2
f(5) # 25

(lambda  argument: argument ** 2)()
```

# Vizualizacija
```
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns # seaborn koristi matplot i moze se spustiti na matplot
import warnings
import os

warnings.filterwarnings("ignore")

# Read data
csvPath = os.path.join(os.getcwd(), "_data", "flights_session06.csv")
df = pd.read_csv(csvPath, index_col=0)

# Set up labels and graph size
plt.figure(figsize=(15,6))
plt.title('Missing values in dataset')
plt.xlim(0,100) # Set up maximum range of graph

# Create new column with the percentage of missing values
data = df.isna().sum().reset_index().rename(columns={0:'count', 'index':'features'}).assign(percentage_missing=lambda x: x['count'] / len(df) * 100)

# Filter only the columns with missing values
data = data[data['percentage_missing'] > 0].sort_values('percentage_missing', ascending=False)

# show only these columns
plt.barh(data['features'], data['percentage_missing'], height=1, color=('purple', 'blue'))
plt.show()



import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns # seaborn koristi matplot i moze se spustiti na matplot
import warnings
import os

warnings.filterwarnings("ignore")

# Read data
csvPath = os.path.join(os.getcwd(), "_data", "flights_session06.csv")
df = pd.read_csv(csvPath, index_col=0)
data = df.isna().transpose() # transpose to switch columns and rows
inverted_data = ~data # invert data to show white/black graph and not black/white

# Set up labels and graph size
plt.figure(figsize=(15,6))
plt.title('Missing Values Heatmap')
plt.xlabel('Missing values')
plt.ylabel('Features')

# Set up chart
plt.imshow(inverted_data, cmap='gray', aspect='auto', interpolation='none')
plt.yticks(np.arange(len(df.columns)), df.columns)
plt.colorbar().remove() # hide heatmap

plt.show()
```


```
csvPath = os.path.join(os.getcwd(), "_data", "flights_session06.csv")
df = pd.read_csv(csvPath, index_col=0)
# Pretvaranje dataframe u liste
df.isna().sum().where(lambda x: x > 0).dropna().values # array([8255., 8255., 8713., 9430., 2512., 9430.])
df.isna().sum().where(lambda x: x > 0).dropna().tolist() # [8255.0, 8255.0, 8713.0, 9430.0, 2512.0, 9430.0]
print(df.size)

# dropna() izbaci sve redove koje makar jedna vrednost fali
# dropna utice na dimenzionalnsot seta
# reset_index poslozi ponovo indexe
null_columns = df.isna().sum().where(lambda x: x > 0).dropna().index.to_list() # ['dep_time', 'dep_delay', 'arr_time', 'arr_delay', 'tailnum', 'air_time']

# df.info()
#  #   Column          Non-Null Count   Dtype
# ---  ------          --------------   -----
#  0   year            336776 non-null  int64
#  1   month           336776 non-null  int64  
```

# Contigency tables
koliko se cesto argumenti kombinuju.
```
pd.crosstab(index=df['carrier'], columns=df['origin'])
# origin	                    John F 	La Guardia	Newark Liberty I
# AirTran Airways Corporation	0	        3260	    0
# Delta Air Lines Inc.      	342	        3400	    0
# Imamo malo polazaka sa John f, komapnije Delta Air Lines

# margins dodaje All column i red sto predstavlja sumu svega
pd.crosstab(index=df['carrier'], columns=df['origin'], margins=True)

# da posle grupisanja, izbaci maximum vrednosti jedne kolone
pd.crosstab(index=df['carrier'], columns=df['origin'], values=df['dep_delay'], aggfunc=np.max)
```
# Groupby
```
# reset index ce lepo grupisati i prikazati. Tako kolone iz kompozitnog indexa pokaze kao nove kolone
df.groupby(['carrier', 'origin'])['air_time'].count().reset_index()[:10]
# 	carrier	origin	air_time
# 0	AirTran Airways Corporation	La Guardia	3175
# 1	Alaska Airlines Inc.	Newark Liberty Intl	709

df.groupby(['carrier', 'origin'])['air_time'].count().reset_index()[:10]
```


# Osnovni graphovi
```
df['carrier'].value_counts(ascending=False)\
    .plot(kind='barh', title='Number of flights per carrier')

# U matplotu su vazne figure and axis
# Figure je ceo grafikon koji moze imati jedan ili vise koor sistema sto je axis.  
```

## Linspace osnovni 
```
x = np.linspace(-50, 50, 100)
x = np.linspace(0, 50, 101)
# y = np.ones(len(x))
y = x**2

fig, ax = plt.subplots()
ax.plot(x, y)
fig.show()
```
### Graphic carriera koliko cesto
```
_df = (
    df['carrier']
    .value_counts()
    .reset_index()
    .rename(columns={'index':'carrier', 'count': 'no of flights'})
)
fig, ax = plt.subplots()
ax.bar(x='carrier', height='no of flights', data=_df)
ax.set_title('Number of flights per each carrier', size=20, pad=20)
ax.grid(alpha=.5)
ax.set_xlabel('Carrier')
ax.set_ylabel('# of flights');
ax.set_xticklabels(ax.get_xticklabels(), rotation=90);

```
Ucestalost prevoznika
```
_df = (
    df['carrier']
    .value_counts()
    .reset_index()
    .rename(columns={'index':'carrier', 'count': 'no of flights'})
)
fig, ax = plt.subplots()
# ax.bar(x='carrier', height='no of flights', data=_df) # horizontal
ax.barh(y='carrier', width='no of flights', data=_df) # vertikal
ax.set_title('Number of flights per each carrier', size=20, pad=20)
ax.grid(alpha=.5)
ax.set_xlabel('Carrier')
ax.set_ylabel('# of flights');
ax.set_xticklabels(ax.get_xticklabels(), rotation=90);
ax.invert_yaxis()
```

## Describe
Ako mu das vise kolona za describe po defaultu ce obraditi numericke i pokazati min, max, quantile.
Ignorise druge. Ali ako das samo stringove pokazace tipa koliko unique vrednosti ima i slicno...
```
# daje min, max, quantile
df[['air_time','distance','dep_delay','arr_delay']].describe()
df[['carrier','tailnum','origin','dest']].describe()
```