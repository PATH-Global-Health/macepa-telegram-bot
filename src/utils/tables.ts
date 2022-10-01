let html = `<html>
<head>
    <style>
        body {
          width: 500px;
          height: 250px;
        }
        table, th, td {
          border: 1px solid black;
          border-collapse: collapse;
          font-size: 0.875em;
          padding: 4
        }
        td {
            text-align: right;
        }
        td.center {
            text-align: center;
        }
        </style>
</head>
<body>
    <table>
        <tr style="background-color: rgb(230, 230, 230)">
            <th>&nbsp;</th>
            <th colspan="2">Male</th>
            <th colspan="2">Female</th>
            <th colspan="3">Total</th>
          </tr>
          <tr style="background-color: rgb(230, 230, 230)">
            <td class="center">Age</td>
            <td class="center">Case</td>
            <td class="center">Control</td>
            <td class="center">Case</td>
            <td class="center">Control</td>
            <td class="center">Case</td>
            <td class="center">Control</td>
            <td class="center">Total</td>
          </tr>
          <tr>
            <td style="background-color: rgb(230, 230, 230)">0-4 years</td>
            <td>125</td>
            <td>2</td>
            <td>1</td>
            <td>3</td>
            <td>6</td>
            <td>5</td>
            <td>1</td>
          </tr>
          <tr>
            <td>5-14 years</td>
            <td>5</td>
            <td>2</td>
            <td>1</td>
            <td>3</td>
            <td>6</td>
            <td>5</td>
            <td>1</td>
          </tr>
          <tr>
            <td>15-24 years</td>
            <td>5</td>
            <td>2</td>
            <td>1</td>
            <td>3</td>
            <td>6</td>
            <td>5</td>
            <td>1</td>
          </tr>
          <tr>
            <td>25-49 years</td>
            <td>5</td>
            <td>2</td>
            <td>1</td>
            <td>3</td>
            <td>6</td>
            <td>5</td>
            <td>1</td>
          </tr>
          <tr>
            <td>50 years and more</td>
            <td>5</td>
            <td>2</td>
            <td>1</td>
            <td>3</td>
            <td>6</td>
            <td>5</td>
            <td>1</td>
          </tr>
    </table>
</body>
</html>`;

const generateTable = (data: any) => {
  return html;
};

export default generateTable;
