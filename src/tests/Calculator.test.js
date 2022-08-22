import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const num1 = container.getByTestId("number1")
    const num2 = container.getByTestId("number4")
    const add = container.getByTestId("operator-add")
    const equals = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId("running-total")
    fireEvent.click(num1)
    fireEvent.click(add)
    fireEvent.click(num2)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should subtract 4 from 7 and get 3', () => {
    const num1 = container.getByTestId("number7")
    const num2 = container.getByTestId("number4")
    const subtract = container.getByTestId("operator-subtract")
    const equals = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId("running-total")
    fireEvent.click(num1)
    fireEvent.click(subtract)
    fireEvent.click(num2)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should multiply 3 by 5 and get 15', () => {
    const num1 = container.getByTestId("number3")
    const num2 = container.getByTestId("number5")
    const multiply = container.getByTestId("operator-multiply")
    const equals = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId("running-total")
    fireEvent.click(num1)
    fireEvent.click(multiply)
    fireEvent.click(num2)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should divide 21 by 7 and get 3', () => {
    const num1 = container.getByTestId("number2")
    const num2 = container.getByTestId("number1")
    const num3 = container.getByTestId("number7")
    const divide = container.getByTestId("operator-divide")
    const equals = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId("running-total")
    fireEvent.click(num1)
    fireEvent.click(num2)
    fireEvent.click(divide)
    fireEvent.click(num3)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should concatenate multiple number clicks', () => {
    const num1 = container.getByTestId("number6")
    const runningTotal = container.getByTestId("running-total")
    const equals = container.getByTestId("operator-equals")
    fireEvent.click(num1)
    fireEvent.click(num1)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('66')
  })

  it('should chain multiple operations', () => {
    const num1 = container.getByTestId("number4")
    const num2 = container.getByTestId("number5")
    const num3 = container.getByTestId("number2")
    const multiply = container.getByTestId("operator-multiply")
    const divide = container.getByTestId("operator-divide")
    const equals = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId("running-total")
    fireEvent.click(num1)
    fireEvent.click(multiply)
    fireEvent.click(num2)
    fireEvent.click(divide)
    fireEvent.click(num3)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('10')
  })

  it('should clear running total without  affecting the calculation', () => {
    const num1 = container.getByTestId("number4")
    const num2 = container.getByTestId("number5")
    const num3 = container.getByTestId("number2")
    const multiply = container.getByTestId("operator-multiply")
    const divide = container.getByTestId("operator-divide")
    const equals = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId("running-total")
    const clear = container.getByTestId("clear")
    fireEvent.click(num1)
    fireEvent.click(multiply)
    fireEvent.click(num2)
    fireEvent.click(divide)
    fireEvent.click(num3)
    fireEvent.click(equals)
    fireEvent.click(clear)
    expect(runningTotal.textContent).toEqual('0')
  })
  
})

