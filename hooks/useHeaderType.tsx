import { useRouter } from 'next/router';

type PathName = '' | 'login' | 'signup' | 'clients';

export type HeaderType = {
  type: 'login' | 'app',
  id: number | undefined,
  name: PathName,
};

function useHeaderType(): HeaderType {
  const router = useRouter();
  const path = router.asPath.toLowerCase().split('/')[1];
  const rawId = router.query?.id;
  const id = Array.isArray(rawId)
    ? Number.parseInt(rawId[0], 10)
    : Number.parseInt(rawId || '0', 10);
  return {
    id,
    name: path as PathName,
    type: (path === 'login' || path === 'signup') ? 'login' : 'app',
  };
}

export default useHeaderType;
