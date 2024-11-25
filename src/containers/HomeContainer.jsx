import {connect} from 'react-redux';
import Home from '../components/Home';
import {addToCart} from '../Services/Actions/action';


const mapStateProps = state => ({
    cardData: state

})


const mapDispatchToProps = dispatch =>({
    addToCardHandler : data => dispatch(addToCart(data))
})

export default connect(mapStateProps,mapDispatchToProps)(Home)