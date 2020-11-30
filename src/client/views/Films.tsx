import * as React from 'react';
import FilmItem from '../components/FilmItem';
import { RouteComponentProps } from 'react-router';

class Films extends React.Component<IFilmsProps, IFilmsState> {

    constructor(props: IFilmsProps) {
        super(props);
        this.state = {
            films: []
        }
    }

    async componentDidMount() {
        const res = await fetch('http://ghibliapi.herokuapp.com/films');
        const films = await res.json();
        this.setState({ films });
    }
    render() {

        return (
            <div className="container">
                <section className="row mt-3 justify-content-center">
                    {this.state.films.map(film => {
                        return (
                            <FilmItem key={film.id} film={film}/>
                        );
                    })}
                </section>
            </div>
        );
    }
}
export interface IFilm {
    id: string;
    title: string;
    description: string;
    people: Array<string>
}

interface IFilmsProps extends RouteComponentProps {}

interface IFilmsState {
    films: Array<IFilm>;
}


export default Films;