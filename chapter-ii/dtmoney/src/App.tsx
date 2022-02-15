import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return (
        {
          id: 1,
          title: 'transaction 1',
          amout: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      )
    })
  }
})

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle/>
    </>
  );
}
