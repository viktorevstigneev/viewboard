import { connect } from 'react-redux';
import AboutPage from './AboutPage';

const mapStateToProps = (state) => ({
	theme: state.theme,
});

export default connect(mapStateToProps, null)(AboutPage);
