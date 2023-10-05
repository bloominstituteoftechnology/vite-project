import React from 'react'
import App from './App'
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react'

describe('App component', () => {
  test('Can mount the App', () => {
    render(<App />)
  })
})
