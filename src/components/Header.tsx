import { memo } from 'react'

interface HeaderProps{
  genre:string;
}

function HeaderComponent({genre}:HeaderProps){
  return (
    <header>
        <span className="category">Categoria:<span> {genre}</span></span>
    </header>
  )
}

export const Header = memo(HeaderComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.genre, nextProps.genre)
})