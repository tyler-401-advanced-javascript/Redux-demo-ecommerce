import React from 'react';
import { connect } from 'react-redux';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.scss';

//components
import Results from '../Results/Results';
import Select from '../Select/Select';
import CartCount from '../Cart/CartCount';
import DataEntryForms from '../Form/DataEntryForms';
import Cart from '../Cart/Cart';
import { If } from '../util';
import Auth from '../util/Auth';
import LoginForm from '../Form/LoginForm';

//state and actions
import { Views } from '../../store/reducers/views';

//constants
import { Permission } from '../../config/constants';

function App({ view }) {
  return (
    <Container className="App">
      <If condition={view === Views.MAIN}>
        <h3>Tyler's Online Shop of Duhickeys</h3>
        <LoginForm />
        <Auth required={Permission.READ}>
          <CartCount />
          <Select />
          <Results />
          <DataEntryForms />
        </Auth>
      </If>
      <If condition={view === Views.CART}>
        <h3>Your Cart</h3>
        <Cart />
      </If>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    view: state.views
  };
};

export default connect(mapStateToProps, null)(App);
