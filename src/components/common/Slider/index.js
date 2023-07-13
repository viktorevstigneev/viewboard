import { connect } from 'react-redux';
import Header from './Slider';

const mapStateToProps = (state) => ({
	theme: state.theme,

});


export default connect(mapStateToProps, null)(Header);
