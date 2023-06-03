import React, { Component } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { images } from './images';

class MovieClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=3AnqdqcAh9BPx7gOJCbX7qsohsT8hRjO')
            .then((res) => res.json())
            .then((data) => {
                const movies = data.results || [];
                this.setState({ movies: movies });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <Row>
                {this.state.movies.map((movie) => (
                    <Col key={movie.display_title} xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '15rem', margin: '1rem auto' }}>
                            <Card.Img variant="top" src={images.maker} />
                            <Card.Body>
                                <h4>{movie.display_title}</h4>
                                <p>{movie.headline}</p>
                                <p>{movie.criticpick}</p>
                                <p>{movie.byline}</p>
                            
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    }
}

export default MovieClass;
