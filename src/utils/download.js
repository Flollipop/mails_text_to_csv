/**
 * create in browser a virtual csv file and launch the download for the user
 * @param csv
 */
export function createVirtualFileForDownload(csv) {
  const data = new Blob([csv], { type: 'text/csv' });
  const csvURL = window.URL.createObjectURL(data);
  let tempLink = document.createElement('a');
  tempLink.href = csvURL;
  tempLink.setAttribute('download', 'emails.csv');
  tempLink.style.display = 'none';
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
}
