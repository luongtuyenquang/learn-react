import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Carts from '../carts/Carts';

function CartContainer(props){
    return <Carts carts={props.carts} />
}


CartContainer.propTypes = {
    carts: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => {
    return {
        carts: state.carts
    }
}
export default connect(mapStateToProps, null)(CartContainer)