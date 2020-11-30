import * as React from 'react';

class Home extends React.Component<IHomeProps, IHomeState> {
    render(){
        return (
            <div className="container">
                <section className="row mt-3 justify-content center">
                    <div className="col-12">
                        <h1 className="text-center">Home View</h1>
                    </div>
                </section>
            </div>
        );
    }
}

interface IHomeProps {}
interface IHomeState {}

export default Home;