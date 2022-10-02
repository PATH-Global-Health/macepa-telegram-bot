const FIELDS = [
  [
    "NXCM23Lsuxs, 0-4 years, Male, Case",
    "NfaF1d0UQdp, 0-4 years, Male, Control",
    "gGlCe1nvCSh, 0-4 years, Female, Case",
    "nFsQdWKXfCw, 0-4 years, Female, Control",
  ],
  [
    "TmGyxssVF45, 5-14 years, Male, Case",
    "VG2053f6d6T, 5-14 years, Male, Control",
    "AMJSxFZTfMN, 5-14 years, Female, Case",
    "PO1D9yL2yZE, 5-14 years, Female, Control",
  ],
  [
    "cywpqwadTED, 15-24 years, Male, Case",
    "pp6AZ1BhZ8s, 15-24 years, Male, Control",
    "RnnwJbMBIQc, 15-24 years, Female, Case",
    "vi57aI8adg2, 15-24 years, Female, Control",
  ],
  [
    "CRsi2z2hJiT, 25-49 years, Male, Case",
    "FmJIeOvs5ur, 25-49 years, Male, Control",
    "gBTFi2oo186, 25-49 years, Female, Case",
    "aGn3RPbHwNZ, 25-49 years, Female, Control",
  ],
  [
    "m76dGM2t90L, 50 years and more, Male, Case",
    "MdfQxodo9yj, 50 years and more, Male, Control",
    "Z5JVLHAkzcv, 50 years and more, Female, Case",
    "PUHXYWByn6m, 50 years and more, Female, Control",
  ],
];

const ROW = `
  <tr>
      <td class="center" style="background-color: rgb(230, 230, 230)">__age__</td>
      <td>__male_case__</td>
      <td>__male_control__</td>
      <td>__female_case__</td>
      <td>__female_control__</td>
      <td>__case_total__</td>
      <td>__control_total__</td>
      <td>__all_sum__</td>
    </tr>
  `;

const HTML = `
    <html>
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
                    padding: 4;
                }
                table {
                    margin: 4;
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
                    <th colspan="8">__health_facility__</th>
                </tr>
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
                __rows__
            </table>
        </body>
    </html>`;

export { FIELDS, ROW, HTML };
