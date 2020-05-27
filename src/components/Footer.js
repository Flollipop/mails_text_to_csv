import React from 'react';

const repoLink = 'https://github.com/Flollipop/mails_text_to_csv';
const footerLabel = 'See the code';

export function Footer() {
  return (
    <footer className={'App-footer'}>
      <a className={'App-link'} href={repoLink} target='_blank' rel='noopener noreferrer'>
        {footerLabel}
      </a>
    </footer>
  );
}
