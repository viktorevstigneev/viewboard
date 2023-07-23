import { connect } from 'react-redux';
import ImageSlider from './ImageSlider';

const mapStateToProps = (state) => ({
	theme: state.theme,

});


export default connect(mapStateToProps, null)(ImageSlider);
