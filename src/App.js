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
    cardTrunfo: false,
    name: '',
    value: '',
    isSaveButtonDisabled: true,
    saveCard: [],
    hasTrunfo: false,
  };

  onInputChange = ({ target:
  { value, name, type, checked } }) => {
    const valueCheck = type === 'checkbox' ? checked : value;
    this.setState({ [name]: valueCheck }, this.validation);
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

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { cardName, cardDescription,
      cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3, cardTrunfo,
    } = this.state;

    const newCard = { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };
    // parte do código referente ao requisito 7
    this.setState((prev) => ({
      saveCard: [...prev.saveCard, newCard] }));
    this.setState({ cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
    });
    if (cardTrunfo === true) {
      this.setState({ // parte do código referente ao requisito 7
        hasTrunfo: true,
      });
    }
  };

  render() {
    const { saveCard } = this.state; // const adiconada para o requisito 8
    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />

        {/* // section criada para o requisito 8 */}
        <section>
          <ul>
            { saveCard.map((cards, index) => (
              <div key={ cards.cardName }>
                <Card
                  key={ index }
                  cardName={ cards.cardName }
                  cardDescription={ cards.cardDescription }
                  cardAttr1={ cards.cardAttr1 }
                  cardAttr2={ cards.cardAttr2 }
                  cardAttr3={ cards.cardAttr3 }
                  cardImage={ cards.cardImage }
                  cardRare={ cards.cardRare }
                  cardTrunfo={ cards.cardTrunfo }
                />
              </div>
            )) }
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
