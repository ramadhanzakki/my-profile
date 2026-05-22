import { render, screen } from '@testing-library/react'
import App from './App'
import { formatBio } from './utils/format-bio'

describe('App', () => {
  it('menampilkan nama profil', () => {
    render(<App />)
    expect(screen.getByText('RHOUMADHONI')).toBeInTheDocument()
  })

  it('menampilkan github link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
  })
})

describe('formatBio', () => {
  it('sedang memahami laravel', () => {
    expect(formatBio('Hello World', 20)).toBe('Hello World')
  })

  it('memotong bio panjang dan menambahkan ...', () => {
    expect(formatBio('Seorang mahasiswa sedang belajar React dan Typescript', 15)).toBe('Seorang mahasis...')
  })

  it('menangani string kosong', () => {
    expect(formatBio('', 10)).toBe('')
  })
})