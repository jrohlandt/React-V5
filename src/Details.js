import React, { lazy } from "react";
import { navigate } from "@reach/router";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
// import Modal from "./Modal";

const Modal = lazy(() => import("./Modal"));

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      showModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        breed: animal.breeds.primary,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        url: animal.url,
        loading: false
      });
    }, console.error);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal
    } = this.state;
    return (
      <ThemeContext.Consumer>
        {themeHook => (
          <div className="details">
            <Carousel media={media} />
            <div>
              <h1>{name}</h1>
              <h2>{`${animal} - ${breed} - ${location}`}</h2>

              <button
                style={{ backgroundColor: themeHook[0] }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
              <p>{description}</p>
              {showModal ? (
                <Modal>
                  <div>
                    <h1>Would you like to adopt {name}?</h1>
                    <div className="buttons">
                      <button onClick={() => navigate(this.state.url)}>
                        Yes
                      </button>
                      <button onClick={this.toggleModal}>No, not ready</button>
                    </div>
                  </div>
                </Modal>
              ) : null}
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
