import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'
import '@testing-library/jest-dom'

describe('App', () => {
    test('renders correctly and updates values', () => {
        render(<App />)

        // Initial render
        expect(screen.getByText('Base fee: $1600')).toBeInTheDocument()
        expect(screen.getByText('Variable fee per item: $85')).toBeInTheDocument()
        expect(screen.getByText('Number of items: 0')).toBeInTheDocument()
        expect(screen.getByText('Programming Fee: $1600')).toBeInTheDocument()

        // Update slider value
        const slider = screen.getByRole('slider')
        fireEvent.change(slider, { target: { value: '6' } })
        expect(screen.getByText('Number of items: 6')).toBeInTheDocument()
        expect(screen.getByText('Programming Fee: $2110')).toBeInTheDocument()

        // Update checkbox value
        const checkbox = screen.getByRole('checkbox')
        fireEvent.click(checkbox)
        expect(screen.getByText('Programming Fee: $3110')).toBeInTheDocument()

        // Uncheck checkbox value
        fireEvent.click(checkbox)
        expect(screen.getByText('Programming Fee: $2110')).toBeInTheDocument()
    })
})
