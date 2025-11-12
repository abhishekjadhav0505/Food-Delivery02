import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import AppDownload from '../../component/AppDownload/AppDownload'
import Header from '../../component/Header/Header'

const Home = () => {

  return (
    <div>
        <Header/>
        <ExploreMenu />
        <FoodDisplay />
        <AppDownload/>
           
    </div>
  )
}

export default Home
