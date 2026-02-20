import { Suspense } from 'react';
import GithubClient from '../components/github-client';

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <GithubClient />
    </Suspense>
  );
}