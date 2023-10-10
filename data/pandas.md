# Complete Python Pandas Data Science Tutorial! (Reading CSV/Excel files, Sorting, Filtering, Groupby)
> https://www.youtube.com/watch?v=vmEHCJofslg

py3
CTRL+D

Extensions:
```
Jupyter
Jupyter Notebook Renderers
```
python -m venv dsspython
source dsspython/bin/activate

## list all python packages
```
type pip install numpy
type pip install scipy
type pip install pandas
type pip install matplotlib
type pip install seaborn
type pip install plotly==5.13.0
type pip install -U scikit-learn
type pip install statsmodels
type pip install requests
type pip install ipython

type pip freeze (list all packages)
```

# Complete Python Pandas Data Science Tutorial
```
pip install pandas
```

## Read file to  DataFrame
```
import pandas as pd

df = pd.read_csv('pokemon_data.csv')
df = pd.read_csv('pokemon_data.txt', delimiter='\t')
df = pd.read_excel('pokemon_data.xlxs')

# show general high level info from table like mean, max, min...
df.describe()
```

## reading columns and rows
```
import pandas as pd
df = pd.read_csv('pokemon_data.csv')

df.head()
df.head(10)
df.tail()

# Read headers and based on columns
df.columns
```

### Reading rows based on index
```
# Read column of data
df['Name'][0:8]
df.Name[0:8]
df[['Name','Speed']]
df[['Name','Speed']][0:7]

# all rows at index - iloc is integer location
df.iloc[1]
df.iloc[1:4]
# column at row 2 and index 1
df.iloc[2,1]
df.iloc[2,1:3]

for index,row in df.iterrows():
    print(index, row['Name'])
```

### Reading rows based on textual data
```
df.loc[df['Type 1']=='Fire']
```

### sorting
```
df.sort_values('Name')
df.sort_values('Name', ascending=True)
df.sort_values(['Name', 'Type 1'], ascending=[True, False])
```

## Making changes
### Summing multiple columns as single column
```
df['Total'] = df['HP'] + df['Attack'] + df['Defense'] + df['Speed']
df['Total'] = df.iloc[:,4:10].sum(axis=1) # axis=0 process vertically, axis=1 process horizontally
df.head()

```

### Adding, Removing, Reorder columns
```
# add, remove
df['Total'] = df['HP'] + df['Attack'] + df['Defense']
df['Total'] = df.iloc[:, 4:10].sum(axis=1)
df = df.drop(columns=['Total'])

# reorder - mora ovako [cols[-1]] jer ce ga prepoznati kao string da je bez []
cols = list(df.columns)
df = df[cols[0:4] + [cols[-1]] + cols[4:12]]
df.head()
```

## Save as file
```
df.to_csv('modified.csv', index=False) # not add row index as column

# Save as file
df.to_csv('modified.csv', index=False, sep='\t')

# save to exel - requires library
pip install openpyxl
df.to_excel("output.xlsx", sheet_name='Sheet_name_1')  
```

## FILTERING**
### Filter and assign
```
# dont use and or. Use & |
df.loc[(df['Type 1'] == 'Grass') & (df['Type 2'] == 'Poison')]
new_df = df.loc[(df['Type 1'] == 'Grass') | (df['Type 2'] == 'Poison') & (df['HP'] > 70)]

df.loc[(df['Speed'] > 150)]
fastFire = df.loc[(df['Speed'] > 100) & (df['Type 1'] == 'Fire')]
fastFire.reset_index(drop=True, inplace=True) 
# inplace - changes existing df, doesnt need to assign new one
# drop - normally creates a new column for old index

```
### Filtering using string
```
df.loc[df['Name'].str.contains('Mega')]
df.loc[~df['Name'].str.contains('Mega')] # ~ instead of !, not contains
```
### Filtering using regex
```
import re
df.loc[df['Type 1'].str.contains('Fire|Grass', regex=True)]
df.loc[df['Type 1'].str.contains('fire|grass', flags=re.I, regex=True)]
df.loc[df['Name'].str.contains('^pi[a-z]*', flags=re.I, regex=True)]
```

## Conditional changes of column data. 
Specify column
```
# change type 1 from fire to flame
df.loc[df['Type 1']=='Fire', 'Type 1'] ='Flame'
df.loc[df['Type 1']=='Flame', 'Type 1'] ='Fire'

# change all fire to be legendary
df.loc[df['Type 1']=='Fire', 'Legendary'] = True

# if greater then 500, change columns
df.loc[df['Attack'] > 80, ['Defense', 'Speed']] = 1
df.loc[df['Attack'] > 80, ['Defense', 'Speed']] = [1,2]
```

# Aggregate
```
# Aggregate 
result = df.groupby(['Type 1']).mean()
result.to_csv('output.csv')
df.groupby(['Type 1']).mean().sort_values('Defense', ascending=False)

df.groupby(['Type 1']).sum()
df.groupby(['Type 1']).count()

# Radi boljeg pregleda counta. Doda se kolona i samo se ona prikaze
df['countnum'] = 1
df.groupby(['Type 1']).count()['countnum']
df.groupby(['Type 1', 'Type 2']).count()['countnum']
```


# Working with large amounts
```
import pandas as pd

df = pd.read_csv('pokemon_data.csv')

# create new data frame, with same columns from original df
new_df = pd.DataFrame(columns=df.columns)

# Working with large amounts of data
for dfs in pd.read_csv('pokemon_data.csv', chunksize=5):
    # print("CHUNK DF")
    # print(df)

    results = dfs.groupby(['Type 1']).count()
    new_df = pd.concat([new_df, results])
```