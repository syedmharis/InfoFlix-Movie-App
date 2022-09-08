import{useEffect,useState} from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
const URL = 'http://www.omdbapi.com?apikey=f9dc1979';

const App = () => {
    const [movies , setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async(title) => {
        const response = await fetch(`${URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
       console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    },[])
    return(
        <div className="app">
        <h1>InfoFlix</h1>
        <div className="search">
            <input
            placeholder="Search For Movies"
            value= {searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
            src={SearchIcon}
            alt="Search Icon"
            onClick={() => searchMovies(searchTerm)}
            />  
        </div>
        {movies?.length > 0
            ? (
            <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )}
        </div>
    );
}
export default App;