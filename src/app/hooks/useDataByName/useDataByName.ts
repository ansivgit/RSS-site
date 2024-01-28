import { type Courses } from '@/app/services/data/coursesData.types';
import { type DataMap } from '@/app/services/data/coursesData.types';
import { fetchDataByName } from '@/app/services/api';
import { useEffect, useState } from 'react';

type Datatype = Courses[] | null;

export const useDataByName = <T extends Datatype>(
  dataName: keyof DataMap,
  fetchDataFn = fetchDataByName
) => {
  const [data, setData] = useState<T | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedData = await fetchDataFn(dataName);
        setData(fetchedData);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dataName]);

  return { data, loading, error };
};