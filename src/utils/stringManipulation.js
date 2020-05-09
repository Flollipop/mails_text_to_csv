import * as linkify from 'linkify-it';

// as we do not need http parsing with linkify we override the default schema to avoid useless match
const httpOverride = {
  'http:': {
    validate: function () {
      return 0;
    },
  },
};

const parser = linkify(httpOverride, {
  fuzzyLink: false,
  fuzzyEmail: true,
  fuzzyIP: false,
});

export function parseMails(str = '') {
  const rawMails = parser.match(str);

  if (rawMails && rawMails.length > 0) {
    return rawMails.map(x => ({
      mail: x.raw,
    }));
  }

  return [];
}
