import { setLocalStorage, getLocalStorage } from 'utils/localStorage';

export const login = (auth) => {
	setLocalStorage('auth', auth);
	window.location.reload();
	// }
};

export const logout = () => {
	localStorage.removeItem('auth');
	window.location.reload();
};

export const isLogged = () => {
	const auth = getLocalStorage('auth');
	return !!auth;
};
