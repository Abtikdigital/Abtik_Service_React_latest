"use client";

import dynamic from 'next/dynamic';

const PageComponent = dynamic(() => import('@/components/pages_legacy/GstRegistration_Filling'));

export default function Page() {
  return <PageComponent />;
}
