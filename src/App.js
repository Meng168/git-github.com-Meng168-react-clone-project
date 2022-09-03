import React, {
  useEffect,
  useState
} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { getTotals } from './redux/features/cartSlice';
import { useSelector } from 'react-redux'
import { auth } from './firebase'
import { useDispatch } from 'react-redux';
import ScrollButton from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ShippingPage from './pages/ShippingPage';
import FaqPage from './pages/FaqPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import DetailsPage from './pages/DetailsPage';
import WishlistPage from './pages/WishlistPage';
import SearchPage from './pages/SearchPage';
import HomePage from './pages/HomePage';
import { ToastContainer } from 'react-toastify';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import { login, selectUser } from './redux/features/userSlice';
import SimpleDialogDemo from './components/Loading/SimpleDialog';
import OffCanvas from './components/OffCanvas/OffCanvas';

const delay = 1.2;

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const [show, setShow] = useState(false);
  //count cart length
  const cart = useSelector((state) => state.cart)
  useEffect(() => {
      dispatch(getTotals())
  }, [cart, dispatch]);
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        dispatch(
          login({
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL,
            })
          )
        }
      })
  }, []);
  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), delay * 1000);
        return () => {
          clearTimeout(timer1);
        };
      },
    []
  );
  const alert = localStorage.getItem("key");
  return show ? (
      <>
        <Router>
          {!alert && <OffCanvas placement='bottom' />}
          {
            !user ? <LoginPage />
            : (
              <div className='app'>
                <ScrollButton />
                <ToastContainer />
                <Header/>
                <Navbar/>
                <Switch>
                    <Route path='/shop'>
                        <ShopPage />
                    </Route>
                    <Route path='/blog'>
                        <BlogPage />
                    </Route>
                    <Route path='/contact'>
                        <ContactPage />
                    </Route>
                    <Route path='/shipping'>
                        <ShippingPage />
                    </Route>
                    <Route path='/faq'>
                        <FaqPage />
                    </Route>
                    <Route path='/cart'>
                        <CartPage />
                    </Route>
                    <Route path='/:id/product-category/:title'>
                        <CategoryPage />
                    </Route>
                    <Route path='/details/:id/:title'>
                        <DetailsPage />
                    </Route>
                    <Route path='/wishlist'>
                        <WishlistPage />
                    </Route>
                    <Route path='/search/:id'>
                        <SearchPage />
                    </Route>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
              </div>
            )
          }
        </Router>
      </>
    ) : (
      //loading
      <SimpleDialogDemo />
    );
  }

export default App;
