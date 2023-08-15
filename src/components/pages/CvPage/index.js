import { connect } from 'react-redux';
import CvPage from './CvPage';

const mapStateToProps = (state) => ({
	theme: state.theme,
});

export default connect(mapStateToProps, null)(CvPage);
