# Numpy library

### List vs Numpy
from time import process_time

#### Time taken by a list
```
python_list = [i for i in range(10000)]
start_time = process_time()

python_list = [i + 5 for i in python_list]
end_time = process_time()

print(end_time - start_time)
```
## Functions
### np array
```
np_array = np.array([i for i in range(10000)])
start_time = process_time()
np_array += 5
end_time = process_time()

print(end_time - start_time)

# 0.0010234770000003834
# 0.00016367999999999938
```
### show dimensions
```
import numpy as np
arr = [1,2,3,4,5]
type(arr) # array

nparr = np.array([1,2,3,4,5])
type(nparr) # numpy.ndarray

# show dimensions
nparr.shape # (5,)

nparr = np.array([(1,2,3,4,5), (1,2,3,4,5)])
nparr.shape # (2,5)

nparr = np.array([(1,2,3,4,5), (1,2,3,4,5)], dtype=float)
print(nparr)
```
### Initiate arrays
Initiate multi dimension array.
```
import numpy as np

arr = np.zeros((2,5))
print(arr)

arr = np.ones((2,5))
print(arr)

arr = np.full((2,5),5)
print(arr)

arr = np.eye(4)
print(arr)

# random numbers
arr = np.random.random((2,3))
print(arr)

# random numbers in specific range
arr = np.random.randint(10,100,(2,3))
print(arr)

# evenly spaced values, third param is count of values
arr = np.linspace(10,30,5)
print(arr) # [10. 15. 20. 5. 30.]

# evenly spaced values - specify the increment
arr = np.arange(10,30,6)
print(arr) # [10 16 22 28]

# convert basic array to np.array
arr = np.asarray([1, 2, 3])
```

### Analyzing numpy array
```
import numpy as np

# convert basic array to np.array
arr = np.random.randint(10,20,(3,4))
print(arr)
print(arr.shape) # dimensions
print(arr.ndim)  # count of dimensions

# number of elements in array
print(arr.size)

# type of values
print(arr.dtype)
```

### Combine arrays
```
import numpy as np

arr1 = [1,2,3,4]
arr2 = [5,6,7,8]

# lists can be added, but thats all
print(arr1 + arr2)

arr1 = np.random.randint(1,10,(3,4))
arr2 = np.random.randint(1,10,(3,4))

print(arr1 + arr2)
print(arr1 - arr2)
print(arr1 * arr2)
print(arr1 / arr2)

print(np.add(arr1, arr2))
print(np.subtract(arr1, arr2))
print(np.multiply(arr1, arr2))
print(np.divide(arr1, arr2))
```
### Transpose array - exchange rows and columns
```
print(arr1)
print(np.transpose(arr1))
print(arr1.T) # another way to transpose
```

### Reshape array - number of elements must be same
```
b = arr1.reshape(6,2)
print(b)
```
