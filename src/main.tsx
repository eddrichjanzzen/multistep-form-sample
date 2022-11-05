import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import theme from '../src/theme/theme';
import { ThemeProvider } from '@mui/material/styles';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />x
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
