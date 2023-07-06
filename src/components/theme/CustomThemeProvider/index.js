import { connect } from 'react-redux';
import CustomThemeProvider from './CustomThemeProvider';

const mapStateToProps = (state) => ({
	theme: state.theme,
});

export default connect(mapStateToProps, null)(CustomThemeProvider);
