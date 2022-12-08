import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick, hasTrunfo } = this.props;
    return (
      <form onSubmit={ onSaveButtonClick }>
        <label htmlFor="name-input">
          <input
            type="text"
            data-testid="name-input"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-area">
          <input
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            name="cardDescription"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          <input
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            name="cardAttr1"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          <input
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            name="cardAttr2"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            name="cardAttr3"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          <input
            type="text"
            data-testid="image-input"
            value={ cardImage }
            name="cardImage"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          <select
            data-testid="rare-input"
            value={ cardRare }
            name="cardRare"
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho </p> : (

          <label htmlFor="trunfo-input">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              name="cardTrunfo"
              onChange={ onInputChange }
            />
          </label>
        )}
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
export default Form;
