## Matplot
```
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0,19,100)
y = np.sin(x)
z = np.cos(x)
```

### Ploting the data
```
plt.plot(x,y)
plt.xlabel('angle')
plt.ylabel("sine value")
plt.title("Sine wave")
#plt.show()
```
```
plt.plot(x,z)
plt.xlabel('angle')
plt.ylabel("cos value")
plt.title("Cos wave")
#plt.show()
```
### parabola
```
x = np.linspace(-10,10,20)
y = x**2
plt.plot(x,y)
# plt.show()
```
### chage labels of markers
```
plt.plot(x, y, "r+") # markers sare red symbol +
plt.show()
```
### show multiple lines
```
x = np.linspace(-5,5,50)
plt.plot(x, np.sin(x), "g-")
plt.plot(x, np.cos(x), "r--")
plt.show()
```
## Bar plot
```
fig = plt.figure()
ax = fig.add_axes([0,0,1,1])
languages = ["English", "French", "Spanish", "Latin", "German"]
people = [100, 50, 150, 40, 70]

ax.bar(languages, people)
plt.xlabel("Languages")
plt.ylabel("Number of people")
plt.show()
```

## Pie chart
```
fig = plt.figure()
ax = fig.add_axes([0,0,1,1])
languages = ["English", "French", "Spanish", "Latin", "German"]
people = [100, 50, 150, 40, 70]
ax.pie(people, labels=languages, autopct='%1.1f%%') # autopct kako ce biti prikazano
plt.show()
```
## Scatter plot
Usefull for clustering operations
```
x = np.linspace(0,10,30)
y = np.sin(x)
fig2=plt.figure()
ax = fig2.add_axes([0,0,1,1])
ax.scatter(x,y,color="g")
ax.scatter(x,y,color="b")
plt.show()
```
## 3D Scatter plot
```
fig3 = plt.figure()
ax = plt.axes(projection="3d")
z = 20 * np.random.random(100)
x = np.sin(z)
y=np.cos(z)
ax.scatter(x,y,z,c=z,cmap="Blues")
plt.show()
```
