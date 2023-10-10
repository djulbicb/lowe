```
import numpy as np
```

# Init array
```
a = np.array([1,2,3])
print(a)

# must have same dim
b = np.array([[1,2,3],[1,2,3]])
print(b)

# Dimensions and shape
print(a.ndim, b.ndim) # (1 2)
print(b.shape) # (2,3)
print(a.dtype) # int64

# how many bytes
print(b.itemsize) # int64
print(b.size) # int64
# total size
print(b.nbytes)
```

```
# Accessing elements
a = np.array([[1,2,3,4,5,6,7],[8,9,10,11,12,13,14]])
a[1,5]  # 13
a[1,-2] # 13

# get row
a[0,:] # [1, 2, 3, 4, 5, 6, 7]
# get columns
a[:,2] # [ 3, 10]

# get part of 
a[0, 1:6:2] 

# change - subsequence of same dimension
a[1,5]=20
a[:,2]=[1,2]
```
```
# different array
np.zeros((2,3))
np.ones((4,2,2), dtype='int32')

# any other number
np.full(a.shape,4)
np.full_like(a, 4)

# random decimal numbers
np.random.rand(4,2)
np.random.random_sample(a.shape)
# array random integer values
np.random.randint(7, size=(3,3))
np.random.randint(4,7, size=(3,3))

# identity matrix - square matrix. 5x5 array with 0,1
np.identity(5)

# duplicate array 
arr = np.array([[1,2,3]])
r1 = np.repeat(arr, 3, axis=0)
r1

# array with 1 on border, filled with 0, and middle total size
# [1., 1., 1., 1., 1.],
# [1., 0., 0., 0., 1.],
# [1., 0., 9., 0., 1.],
# [1., 0., 0., 0., 1.],
# [1., 1., 1., 1., 1.]
output = np.ones((5,5))
z = np.zeros((3,3))
z[1,1]=9

output[1:4,1:4]=z
output

# Copying
a = np.array([1,2,3])
b = a.copy()
```
```
# Mathematics
a = np.array([1,2,3, 4])
a + 2  # [3, 4, 5, 6]
a / 2  # [0.5, 1. , 1.5, 2. ]
a ** 2 # [ 1,  4,  9, 16]

b = np.array([2,3,4,5])

a+b # [3, 5, 7, 9]

np.sin(a)
np.cos(a)
```
```
# Linear algebra
a = np.ones((2,3))
b = np.full((3,2), 2)
print(a)
print(b)

np.matmul(a,b)

# Find the determinant
c = np.identity(3)
np.linalg.det(c)
```
```
# Statistics

stats = np.array([[1,2,3],[4,5,6]])
np.min(stats) # 1
np.max(stats) # 6
np.min(stats, axis=1) # [1,4]

np.sum(stats, axis=1)
```
```
# Reorganizing arrays
before = np.array([[1,2,3,4],[5,6,7,8]])
after = before.reshape((2,4)) # must have same shape
after

# Vertically stacking vectors
v1 = np.array([1,2,3,4])
v2 = np.array([5,6,7,8])
np.vstack([v1,v2,v2])
np.hstack([v1,v2,v2])
```

```
# Miscellaneous
## Load dota from file
filedata = np.genfromtxt('data.txt', delimiter=',') # load as float
filedata = filedata.astype('int32')

## Boolean Masking and Advanced indexing
# where in file is > 50
filedata > 50 # creates boolean array
filedata[filedata > 50] # gives only correct index
filedata[filedata > 50, axis=0] # per column
np.all(filedata > 50, axis=1)

# you can index with a list in numpy
a = np.array([1,2,3,4,5,6])
a[[1,2,8]]

(~(filedata > 50) & (filedata < 100))
```
```
```
```
```
```
```
```
```
```
```
```








