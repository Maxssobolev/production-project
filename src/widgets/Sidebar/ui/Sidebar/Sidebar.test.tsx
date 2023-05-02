import { renderWithTranslation } from 'shared/lib/helpers/test/renderWithTranslation/renderWithTranslation'
import { Sidebar } from './Sidebar'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Sidebar-test', () => {
  test('to be in the doc', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('collapse', () => {
    renderWithTranslation(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(toggleBtn).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
