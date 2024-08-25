"use client"
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const UseQueryProvider = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
    )
}