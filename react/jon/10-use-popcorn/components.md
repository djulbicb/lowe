Componente ce prirodno da pripadu u kategoriju:
- stateless - presentational component
- statefull
- structural

Component composition
je tehnika kombinovanja komponenti using children prop

```
function Modal({children}) {
    return (<div>{children}</div>)
}
```

Component composition moze da resi problem prop drillinga
Before:
```
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar movies={movies}/>
      <Main movies={movies}/>
    </>
  );
}
```
After:
```
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar> 
        <Logo />
        <Search/>
        <NumResults movies={movies}/>
      </NavBar>
      <Main>
        <ListBox>
          <MovieList movies={movies}/>
        </ListBox>
        <WatchBox />   
      </Main>
    </>
  );
}
```
Example:
```
function Box ({children}) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
    <button
      className="btn-toggle"
      onClick={() => setIsOpen((open) => !open)}
    >
      {isOpen ? "–" : "+"}
    </button>
    {isOpen && children}
  </div>)
}
```

Children via props:
```
<BoxElement element={(<div>Children via props</div>)}></BoxElement>

function BoxElement ({element}) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
    <button
      className="btn-toggle"
      onClick={() => setIsOpen((open) => !open)}
    >
      {isOpen ? "–" : "+"}
    </button>
    {isOpen && element}
}
```

## StarRating
![01-star.png](img/01-star.png)
