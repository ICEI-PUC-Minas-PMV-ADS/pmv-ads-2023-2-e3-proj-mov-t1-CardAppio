
import { useUser } from '../context/UserContext';

import Auth from '../navigations/Auth'
import BottomMenu from '../views/BottomMenu/BottomMenu'

const Route = () => {
    const { signed } = useUser();

    return (
        <>
            {
                signed
                    ? <BottomMenu />
                    : <Auth />
            }
        </>
    )
}

export default Route;