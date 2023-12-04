
import { useUser } from '../context/UserContext';
import Main from '../navigations/Main';
import Auth from '../navigations/Auth';

const Route = () => {
    const { signed } = useUser();

    return (
        <>
            {
                signed
                    ? <Main />
                    : <Auth />
            }
        </>
    )
}

export default Route;