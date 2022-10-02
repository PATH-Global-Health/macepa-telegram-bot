import { FIELDS, ROW, HTML } from "./constants";

const searchValue = (
  rows: [[string, string, string, string, string]],
  id: string
) => {
  for (var i: number = 0; i < rows.length; i++) {
    if (rows[i][1] === id) {
      return Number(rows[i][4]);
    }
  }
  return 0;
};

const generateTable = (
  healthFacility: string,
  rows: [[string, string, string, string, string]]
) => {
  const tableRows = [];

  for (var i: number = 0; i < FIELDS.length; i++) {
    let tableRow = ROW;
    let cases = 0;
    let controls = 0;

    for (var x: number = 0; x < FIELDS[i].length; x++) {
      const vals = FIELDS[i][x].split(",");
      if (x === 0) {
        tableRow = tableRow.replace(/__age__/, vals[1]);
      }

      const val = searchValue(rows, vals[0]);

      switch (vals[3].trim()) {
        case "Case":
          cases += val;
          tableRow =
            vals[2].trim() === "Male"
              ? tableRow.replace(/__male_case__/, String(val))
              : tableRow.replace(/__female_case__/, String(val));
          break;
        case "Control":
          controls += val;
          tableRow =
            vals[2].trim() === "Male"
              ? tableRow.replace(/__male_control__/, String(val))
              : tableRow.replace(/__female_control__/, String(val));
          break;
      }
    }

    tableRow = tableRow
      .replace(/__case_total__/, String(cases))
      .replace(/__control_total__/, String(controls))
      .replace(/__all_sum__/, String(cases + controls));

    tableRows.push(tableRow);
  }
  return HTML.replace(/__health_facility__/, healthFacility).replace(
    /__rows__/,
    tableRows.join("")
  );
};

export default generateTable;
