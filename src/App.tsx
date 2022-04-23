import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Starter from "./starter";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Starter />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
