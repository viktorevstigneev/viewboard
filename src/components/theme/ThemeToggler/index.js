import { connect } from 'react-redux';
import ThemeToggler from './ThemeToggler';
import  toggleTheme  from '../../../store/actions/toggleTheme/toggleTheme';

const mapStateToProps = (state) => ({
	theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
	toggleTheme: () => dispatch(toggleTheme()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggler);
