import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useRouter } from 'next/router';

const withAuth = (Component) => {
  return (props) => {
    const { user } = useContext(AuthContext);
    const router = useRouter();

    if (!user) {
      router.push('/login'); // Redirect to login if not authenticated
      return null;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
