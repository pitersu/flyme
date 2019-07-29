import Loadable from 'react-loadable';
import Loading from '@common/loading';

const PhoneList = Loadable({
    loader: () => import('./books/phoneList'),
    loading: Loading,
});

const PhoneSound = Loadable({
    loader: () => import('./books/phoneSound'),
    loading: Loading,
});

const PhonePart = Loadable({
    loader: () => import('./books/phonePart'),
    loading: Loading,
});
const PhoneLife = Loadable({
    loader: () => import('./books/phoneLife'),
    loading: Loading,
});

const Home = Loadable({
    loader: () => import('./home'),
    loading: Loading,
});


const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading,
});

const Users = Loadable({
    loader: () => import('./users'),
    loading: Loading,
});

const Orders = Loadable({
    loader: () => import('./orders'),
    loading: Loading,
});
export {
    PhoneList,
    PhoneSound,
    PhonePart,
    PhoneLife,
    Home,
    Login,
    Users,
    Orders
    

}