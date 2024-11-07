// json2html.js
export default function json2html(data) {
  // Start the HTML table with the required data-user attribute
  let html = '<table data-user="pampadmansi3454@gmail.com">';
  
  // Add the table header
  html += '<thead><tr>';
  const columns = ['Name', 'Age', 'Gender'];
  columns.forEach(col => {
    html += `<th>${col}</th>`;
  });
  html += '</tr></thead>';
  
  // Add the table body
  html += '<tbody>';
  data.forEach(row => {
    html += '<tr>';
    // Loop through each column to fill the row
    columns.forEach(col => {
      html += `<td>${row[col] || ''}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';
  
  return html;
}
