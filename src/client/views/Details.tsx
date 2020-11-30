import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { IFilm } from './Films';

class Details extends React.Component<IDetailsProps, IDetailsState> {

    constructor(props: IDetailsProps) {
        super(props);
        this.state = {
            film: null
        }
    }

    async componentDidMount() {
        const res = await fetch('http://ghibliapi.herokuapp.com/films/' + this.props.match.params.filmid);
        const film = await res.json();
        this.setState({ film });
    }

    render() {
        return (
            <div className="container">
                <section className="row mt-3 justify-content center">
                    <div className="col-12">
                        <h1 className="text-center">Details View for {this.state.film?.title}</h1>
                    </div>
                </section>
            </div>
        );
    }
}

interface IDetailsProps extends RouteComponentProps<{ filmid: string }> { }
interface IDetailsState {
    film: IFilm;
}

export default Details;