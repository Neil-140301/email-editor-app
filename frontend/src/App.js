import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import NewTemplate from './components/NewTemplate'
import EditTemplate from './components/EditTemplate'
import NotFound from './components/NotFound'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import LaptopOnly from './components/LaptopOnly'


const App = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute exact path="/" component={Dashboard} />
      <ProtectedRoute exact path="/template/:id" component={NewTemplate} />
      <ProtectedRoute exact path="/edit-template/:id" component={EditTemplate} />
      <Route exact path="/size-error" component={LaptopOnly} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)



/*
class App extends Component {
  state = {movies: [], addMovie:{}}

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const response = await fetch("/movies")
    const movies = await response.json()
    this.setState({movies})
  }

  handleChange = (event) => {
    const {name,value} = event.target
    this.setState(prevState => ({ addMovie: {...prevState.addMovie, [name] : value}}))
  }

  onAddMovie = (event) => {
    event.preventDefault()
    alert("movie added")
    const newMovie = this.state.addMovie
    axios.post('/newmovie',newMovie)
  }

  render() {
    const {movies} = this.state
    return (
      <div>
        <h1>Add Movie</h1>
        <form onSubmit={this.onAddMovie}>
          <input onChange={this.handleChange} name="name" placeholder="movie title" />
          <input onChange={this.handleChange} name="year" placeholder="movie year" />
          <button type="submit">Add Movie</button>
        </form>
        {movies.map(item => (
          <div>
            <h1>{item.name}</h1>
            <p>{item.year}</p>
          </div>
        ))}
      </div>
    )
  }
}
*/

export default App;
