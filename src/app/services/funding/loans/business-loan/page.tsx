"use client";

import dynamic from 'next/dynamic';

const PageComponent = dynamic(() => import('@/components/pages_legacy/BusinessLoanService'));

export default function Page() {
  return <PageComponent />;
}
