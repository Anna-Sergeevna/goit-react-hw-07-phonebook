// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const Loading = () => {
  return (
    <div className={s.loader}>
      <Loader
        type='ThreeDots'
        color='#00BFFF'
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default Loading;
