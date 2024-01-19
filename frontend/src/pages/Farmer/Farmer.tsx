
import FarmCategory from './FarmCategory'
import FarmHero from './FarmHero'
import FarmNav from './FarmNav'

const Farmer = () => {
  return (
    <div className='ml-4'>
      <FarmNav  number='4'/>
      <FarmHero />
      <FarmCategory />
    </div>
  )
}

export default Farmer
