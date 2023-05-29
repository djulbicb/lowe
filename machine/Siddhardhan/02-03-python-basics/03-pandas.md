## Dataframe pandas
```
import pandas as pd
import numpy as np

from sklearn.datasets import fetch_california_housing

# data_url = "http://lib.stat.cmu.edu/datasets/boston"
# raw_df = pd.read_csv(data_url, sep="\s+", skiprows=22, header=None)
# data = np.hstack([raw_df.values[::2, :], raw_df.values[1::2, :2]])
# target = raw_df.values[1::2, 2]

data = fetch_california_housing()
type(data)
print(data.feature_names)
```
### pandas df
```
df = pd.DataFrame(data.data, columns=data.feature_names)
df.head()
df.shape
```
### Import file from csv
```
df1 = pd.read_csv("/content/sample_data/california_housing_test.csv")
df1.head()
df1.shape
```
### Import file from exel
```
pd.read_excel("filePath")
```
### Exporting data to a csv file
```
df.to_csv("/content/sample_data/boston.csv")
```
### Export to excel
```
df.to_excel("/content/sample_data/boston.xls")
```
### Load array into DataFrame
```
df = pd.DataFrame(np.random.rand(20,10))
df.head()
df.shape # 20,10
```
## Inspecting a DataFrame
```
df1.head()
df1.tail()
df1.info() # shows if values missing, data type and column names

df1.isnull().sum() # check count of missing values
```
### count values based on labels
```
df1.value_counts("total_rooms") # agregacija po vrednosti
df1.groupby("total_rooms").mean()
```
## Statistical Measures
### count of number of values
```
df1.count()
df1.mean() # mean value for every column
```
### standard deviation - column wise
```
df1.std()
```
### min/max value in each column
```
df1.min()
df1.max()
```
### all stats measire about df
```
df1.describe()
```


## Manipulating a DataFrame
### adding new column
```
df1["Price"] = df1.longitude
```
### removing  a row, axis is 0 for row, 1 for column
```
## to delete permentantly store it to new variable. otherwise returns
df1.drop(index=0, axis=0)
df1.drop(columns="latitude", axis=1)
```
### locatin a row using the index value
df1.iloc[2]
### locating a particular column
print(df1.iloc[:,0]) # first column
print(df1.iloc[:,1]) # second column
print(df1.iloc[:,-1]) # last column

## Correlation
1. Positive correlation
2. Negative correlation

Negative correlation when crime increases, price decreases
Positive correlation when number of rooms higher, price increases
```
df1.corr()
```
