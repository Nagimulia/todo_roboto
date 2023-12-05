import { CreateTodo } from './CreateTodo'

interface Props {
  saveTodo: (title: string) => void
}

export const Header: React.FC<Props> = ({ saveTodo }) => {
  return (
    <header className='header'>
      <h1>
				Список дел
      </h1>

      <CreateTodo saveTodo={saveTodo} />
    </header>
  )
}
