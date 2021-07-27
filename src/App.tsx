import styles from './App.module.less';
import Routes from './routes';
import Head from './layout/Head';

function App() {
  return (
    <div className={styles.App}>
      <Head></Head>
      <Routes />
    </div>
  );
}

export default App;
