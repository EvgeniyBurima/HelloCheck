import { useRouter } from 'next/router';

export type HeaderType = 'login' | 'app';

function useHeaderType(): HeaderType {
  const router = useRouter();
  const path = router.pathname.toLowerCase();
  return (path === '/login' || path === '/signop') ? 'login' : 'app';
}

export default useHeaderType;
