import './App.css'
import Button from '@mui/material/Button'

function App() {
  return (
    <div
      className='
        min-h-full
        flex items-center justify-center
        text-gray-900 dark:text-white bg-white dark:bg-gray-900
      '
    >
      Flower
      <span className='ml-2'>
        <Button variant='contained' color='primary'>SHOP</Button>
      </span>
    </div>
  )
}

export default App
