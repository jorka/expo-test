import { useQuery } from '@apollo/client'

import { COUNTRIES_QUERY } from '../gql/queries/TestQuery'

export const useTest = () => {
  const { loading, error, data } = useQuery(COUNTRIES_QUERY)

  return {
    loading,
    error,
    data
  }
}
