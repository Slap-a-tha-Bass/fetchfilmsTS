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

    componentDidMount() {
        fetch('http://ghibliapi.herokuapp.com/films/' + this.props.match.params.id)
            .then(res => res.json())
            .then(film => this.setState({ film }))
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

interface IDetailsProps extends RouteComponentProps<{ id: string }> { }

interface IDetailsState {
    film: IFilm;
}

export default Details;