import * as React from 'react';
import {FormHandler} from "./FormHandler";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {PerformerCard} from "./PerformerCard";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <PerformerCard />
      <FormHandler />
    </QueryClientProvider>
  )
}

export default App
