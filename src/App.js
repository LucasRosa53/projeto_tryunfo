import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: '',
    name: '',
    value: '',
    isSaveButtonDisabled: true,
  };

  onInputChange = ({ target:
  { value, name } }) => {
    this.setState({ [name]: value }, this.validation);
  };

  validation = () => {
    const { cardName, cardDescription,
      cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const validacaoNome = cardName !== '';
    const validacaoDesc = cardDescription !== '';
    const validacaoImg = cardImage !== '';
    const validacaoRare = cardRare !== '';
    const carta1 = parseInt(cardAttr1, 10);
    const carta2 = parseInt(cardAttr2, 10);
    const carta3 = parseInt(cardAttr3, 10);
    const noventa = 90;
    const menorQue901 = carta1 <= noventa && carta1 >= 0;
    const menorQue902 = carta2 <= noventa && carta2 >= 0;
    const menorQue903 = carta3 <= noventa && carta3 >= 0;
    const numero = 210;
    const somaDosAtri = carta1 + carta2 + carta3 <= numero;
    console.log(menorQue901, menorQue902, menorQue903);
    this.setState({
      isSaveButtonDisabled: !(validacaoNome
        && validacaoDesc && validacaoImg && validacaoRare
        && somaDosAtri && menorQue901 && menorQue902 && menorQue903),
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
