/* eslint-disable react/prop-types */
import './App.css'
import ResumeComponents from './components/ResumeComponents';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const url = 'http://localhost:3000/resume';

// Create a new instance of QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap your entire app with QueryClientProvider and provide the queryClient
    <QueryClientProvider client={queryClient}>
      <ResumeComponents url={url} />
    </QueryClientProvider>
  );
}

export default App;
