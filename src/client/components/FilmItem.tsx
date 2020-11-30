import * as React from 'react';
import { IFilm } from '../views/Films';
import { Link } from 'react-router-dom';

class FilmItem extends React.Component<IFilmItemProps, IFilmItemState> {
    render() {
        return (
            <>
                    <div className="col-md-12 d-flex justify-content-center">
                        <h1 className="text-center ">{this.props.film.title}</h1>
                    </div>
                        <Link className="btn btn-primary mb-2 " to={`/films/details/${this.props.film.id}`}>Details</Link>
                        </>
        );
    }
}

interface IFilmItemProps {
    film: IFilm;
}
interface IFilmItemState { }

export default FilmItem;