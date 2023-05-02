import { AppButton, ButtonVariant } from 'shared/ui/AppButton/AppButton'
import { render, screen } from '@testing-library/react'

describe('AppButton', () => {
  test('with clear class', () => {
    render(<AppButton variant={ButtonVariant.PRIMARY}>PRIMARY BUTON</AppButton>)
    expect(screen.getByText('PRIMARY BUTON')).toHaveClass('AppButton', 'primary')
  })
})
