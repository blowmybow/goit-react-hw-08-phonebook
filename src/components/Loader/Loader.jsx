import { ColorRing } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <ColorRing
        visible={true}
        height="90"
        width="90"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#46969c', '#6bb0b4', '#0ba49f', '#e28d42', '#e86f14']}
      />
    </LoaderWrapper>
  );
};
export default Loader;
