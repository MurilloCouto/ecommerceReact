import './index.scss'
import lupa from '../../assets/iconLupa.svg'
import person from '../../assets/iconPerson.svg'
import heart from '../../assets/iconHeart.svg'

const Search = () => {
  return (
    <div className='search'>
        <input type="text" placeholder='O que você está procurando?'/>
        <img className='search__lupa' src={lupa} alt="lupa" />
        <img className='search__person' src={person} alt="pessoa" />
        <img className='search__heart' src={heart} alt="coração" />
    </div>
  )
}

export default Search