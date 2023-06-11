interface SliderProps {
    sliderValue: number
    onValueChange: (value: number) => void
}
const Slider: React.FC<SliderProps> = ({ sliderValue, onValueChange }) => {
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = Number(event.target.value)
        onValueChange(newAmount)
    }
    return (
        <div>
            <input
                type="range"
                min={0}
                max={200}
                value={sliderValue}
                onChange={handleSliderChange}
            />
        </div>
    )
}
export default Slider
