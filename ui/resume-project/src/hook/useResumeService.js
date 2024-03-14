import { useQuery } from '@tanstack/react-query';

const useResumeService = (url) => {
    const { isLoading: isPending, error, data, isFetching } = useQuery({
        queryKey: ['resume'],
        queryFn: () => fetch(url).then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        }),
    });

    return { isPending, error, data, isFetching };
};

export default useResumeService;
