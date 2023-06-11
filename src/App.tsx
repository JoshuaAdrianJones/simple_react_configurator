import React, { useState } from 'react'
import Slider from './Slider'
import Checkbox from './Checkbox'
const App: React.FC = () => {
  // state setter for slider
  const [sliderValue, setSliderValue] = useState(0)
  const handleSliderValueChange = (value: number) => {
    setSliderValue(value)
  }
  // state setter for checkbox
  const [includeExtraCost, setIncludeExtraCost] = useState(false)
  const handleCheckboxChange = (checked: boolean) => {
    setIncludeExtraCost(checked)
  }
  // business logic
  interface FeeFormat { base: number; peritemFee: number }
  const Fee: FeeFormat = { base: 1600, peritemFee: 85 }
  const ExtraFee = 1000
  const extraCost = includeExtraCost ? ExtraFee : 0
  // component to render
  return (
    <div>
      <h1>Configurator</h1>
      <h3>Base fee: ${Fee.base}</h3>
      <h3>Variable fee per item: ${Fee.peritemFee}</h3>
      <Slider sliderValue={sliderValue} onValueChange={handleSliderValueChange} />
      <Checkbox includeExtraCost={includeExtraCost} onCheckboxChange={handleCheckboxChange} />
      <p>Number of items: {sliderValue}</p>
      <p>Programming Fee: ${(sliderValue * Fee.peritemFee) + Fee.base + extraCost}</p>
    </div>
  )
}
export default App
