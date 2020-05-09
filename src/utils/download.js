export function createVirtualFileForDownload(csv) {
  const data = new Blob([csv], { type: 'text/csv' });
  const csvURL = window.URL.createObjectURL(data);
  let tempLink = document.createElement('a');
  tempLink.href = csvURL;
  tempLink.setAttribute('download', 'filename.csv');
  tempLink.click();
}
