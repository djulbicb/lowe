
## Seaborm
seaborn has built-in datasets

### Tipping data
```
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# total bill vs tip dataset
tips = sns.load_dataset("tips")
tips.head()

# setting a theme for the plots
sns.set_theme()

# visualise data
sns.relplot(data=tips, x="total_bill", y="tip", col="time", hue="smoker", style="smoker", size="size")
```

### Iris flower data 
```
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# load the iris dataset
iris = sns.load_dataset("iris")
iris.head()
sns.scatterplot(x="sepal_length", y="petal_length", hue="species", data=iris)
```

## Titanic data
```
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

## load the iris dataset
titanic = sns.load_dataset("titanic")
titanic.head()

sns.countplot(x="class",data=titanic)
sns.countplot(x="survived",data=titanic)

sns.barplot(x="sex", y="survived", hue="class", data=titanic)
```

# Housing and heat map
```
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

from sklearn.datasets import fetch_california_housing
data = fetch_california_housing()
house = pd.DataFrame(data, columns=data.feature_names)
house["PRICE"]=data.target

house.head()

sns.displot(house["PRICE"])

# Correlation (pos and negative)
# Tells which columns are important
correlation = house.corr()

# Heat map
plt.figure(figsize=(10,10))
sns.heatmap(correlation, cbar=True, square=True, fmt=".1f", annot=True, annot_kws={"size":8}, cmap="Blues")
```
