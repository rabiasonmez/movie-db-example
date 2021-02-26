import Home from "../containers/Home";
import About from "../containers/About";
import Movies from "../containers/movie/Movies";
import Contact from "../containers/Contact";
import NotFound from "../containers/base/NotFound";
import MoviesDetail from "../containers/movie/MovieDetail";
import Search from "../containers/Search";

export const links = [
  { link: "/", title: "Home", component: Movies, isExact: true, isLink: true },
  {
    link: "/search",
    title: "Search",
    component: Search,
    isExact: false,
    isLink: false
  },
  {
    link: "/movies",
    title: "Movies",
    component: Movies,
    isExact: true,
    isLink: false
  },
  {
    link: "/movies/:movieID",
    title: "Movie Detail",
    component: MoviesDetail,
    isExact: false,
    isLink: false
  },
  {
    link: "/contact",
    title: "Contact Us",
    component: Contact,
    isExact: false,
    isLink: true
  },
  {
    link: "/404",
    title: "404",
    component: NotFound,
    isExact: false,
    isLink: false
  }
];
