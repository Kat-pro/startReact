import React from "react";
import "./styles.css";

const movie = {
  title: "Avengers: Infinity war",
  vote_average: 8.5,
  image: "https://live.staticflickr.com/863/39449603280_b7e7d2ef00_b.jpg",
  overview:
    "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."
};

function Image(props) {
  return <img width="100%" src={props.src} alt={props.alt} />;
}

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }

  toggleOverview = () => {
    this.setState({ show: !this.state.show });
  };

  handleLike = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    console.log(this.props);
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt="Poster" />
        <p>{title}</p>
        <p>{vote_average}</p>
        {this.state.show === true ? <p>{overview}</p> : null}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "Hide" : "Show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn--like" : ""}
          >
            Like
          </button>
        </div>
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}
