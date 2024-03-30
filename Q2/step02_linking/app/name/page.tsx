'use client';

import { useRouter } from 'next/navigation';

export default function GiveName() {
  const router = useRouter();
    return (
      <div>
            My name is waqas ahmad i am student of batch 52.
            <br/>
            <button type="button" onClick={() => router.push('/name/address')}>
              Get My Address
            </button>
      
      </div>
    )
  }