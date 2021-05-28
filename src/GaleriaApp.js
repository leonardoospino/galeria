import { store } from './store/store';
import { Provider }  from 'react-redux';
import { AppRouter } from './routers/AppRouter';

function GaleriaApp() {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  );
}

export default GaleriaApp;
