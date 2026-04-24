"use client";

import dynamic from 'next/dynamic';

const PageComponent = dynamic(() => import('next/dynamic'));

export default function Page() {
  return <PageComponent />;
}
