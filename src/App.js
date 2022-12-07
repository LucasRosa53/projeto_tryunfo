import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: '',
    name: '',
    value: '',
    isSaveButtonDisabled: true,
    // onSaveButtonClick,
  };

  onInputChange = ({ target:
  { value, name } }) => {
    this.setState({ [name]: value }, this.validation);
  };

  // onSaveButtonClick = (e) => {
  //   e.preventDefault();
  // };

  validation = () => {
    const { cardName, cardDescription,
      cardImage, cardRare } = this.state;
    const validacaoNome = cardName !== '';
    const validacaoDesc = cardDescription !== '';
    const validacaoImg = cardImage !== '';
    const validacaoRare = cardRare !== '';
    this.setState({
      isSaveButtonDisabled: !(validacaoNome
        && validacaoDesc && validacaoImg && validacaoRare),
    });
  };

  render() {
    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
