import LinkifyIt from 'linkify-it';

// as we do not need http parsing with linkify we override the default schema to avoid useless match
const httpOverride = {
  'http:': {
    validate: function () {
      return 0;
    },
  },
};

const parser = LinkifyIt(httpOverride, {
  fuzzyLink: false,
  fuzzyEmail: true,
  fuzzyIP: false,
});

/**
 * Use linkify to get an array of email addresses found in a text
 * @param str
 * @returns {{mail: str}[] | *[]}
 */
export function parseMails(str = '') {
  const rawMails = parser.match(str);

  if (rawMails && rawMails.length > 0) {
    return rawMails.map(x => ({
      mail: x.raw,
    }));
  }

  return [];
}
