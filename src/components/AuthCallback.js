import React from 'react';

function AuthCallback() {
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);
  return <div>waiting..</div>;
}

export default AuthCallback;
