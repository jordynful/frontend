import MovieCard from "./MovieCard";
import "./style/layout.css";
const Layout = props  => {
    return (
      <>
      <ul className="movieList">
    
        {props.items?.map(place => (
          <>
            <MovieCard className = "movieObj"
              // key={place._id}
              title={place.title}
              imageUrl={place.imageUrl}
              description={place.description} />
      
          </>
        ))}
      </ul>
      </>
    );
  }
  
  export default Layout;