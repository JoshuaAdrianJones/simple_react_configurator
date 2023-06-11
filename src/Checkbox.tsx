interface CheckboxProps {
    includeExtraCost: boolean
    onCheckboxChange: (checked: boolean) => void
}
const Checkbox: React.FC<CheckboxProps> = ({ includeExtraCost, onCheckboxChange }) => {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onCheckboxChange(event.target.checked)
    }
    return (
        < div >
            <label>
                <input
                    type="checkbox"
                    checked={includeExtraCost}
                    onChange={handleCheckboxChange}
                />
                Include Extra Cost ($1000)
            </label>
        </div >
    )
}
export default Checkbox
