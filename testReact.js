// Component är som en egen HTML tag
class Exempel extends React.Component {
  render() {
    return (
      <div>
      <h1>Hej {this.props.name}!</h1>
      <p>Klockan är {new Date().toLocaleTimeString()}.
      </p>
      </div>
    );
  }
}

// Rendera vår komponent till #container
React.render(
  <Exempel name="Student"/>,
  document.getElementById('container').innerHTML
);

