import { useState } from 'react'

export default function MoneyInputComponent({ locale, disabled }) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: { target: { value: any } }) => {
    const { value } = event.target
    // Removing characters and symbols to avoid NaN error
    const numericValue = value.replace(/[^0-9.]/g, '')
    // Formating the value in the currency format as given by locale prop
    //using Intl.NumberFormat because it lets us take locale as prop for formatting currency
    const formattedValue = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'EUR',
    }).format(numericValue)
    setInputValue(formattedValue)
  }

  // on blur turn the value into cents in console
  const handleBlur = () => {
    // Formating the value in the currency format as given by locale prop
    const numericValue = Number(inputValue.replace(/[^0-9.]/g, ''))
    {
      const valueInCents = Math.round(numericValue * 100)
      console.log('value in cents:', valueInCents)
    }
  }
  return (
    <input
      value={inputValue}
      onBlur={handleBlur}
      onChange={handleInputChange}
      type="text"
      placeholder="Text"
      className="input-placeholder-text"
      //adding disabled prop below to be able to use it in styling of components
      disabled={disabled}
    />
  )
}
