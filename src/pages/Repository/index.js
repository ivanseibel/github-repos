import React from 'react';

export default function Main({ match }) {
  return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
}
