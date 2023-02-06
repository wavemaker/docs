import React from 'react';
import TOC from '@theme-original/TOC';

export default function TOCWrapper(props) {
  if (!props.toc[0].value.includes('Widgets')) {
    return (
      <TOC {...props} />
    );
  }
  else {
    return null;
  }
}