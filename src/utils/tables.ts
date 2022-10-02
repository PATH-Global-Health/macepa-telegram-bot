import { FIELDS, ROW, ROW_LAST, HTML } from "./constants";

const searchValue = (
  rows: [[string, string, string, string, string]],
  id: string
) => {
  let val = 0;
  for (var i: number = 0; i < rows.length; i++) {
    if (rows[i][1] === id) {
      val += Number(rows[i][4]);
    }
  }
  return val;
};

const generateTable = (
  healthFacility: string,
  rows: [[string, string, string, string, string]]
) => {
  const tableRows = [];
  let total_male_case = 0;
  let total_female_case = 0;
  let total_male_control = 0;
  let total_female_control = 0;

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

          if (vals[2].trim() === "Male") {
            tableRow = tableRow.replace(/__male_case__/, String(val));
            total_male_case += val;
          } else {
            tableRow = tableRow.replace(/__female_case__/, String(val));
            total_female_case += val;
          }

          break;
        case "Control":
          controls += val;

          if (vals[2].trim() === "Male") {
            tableRow = tableRow.replace(/__male_control__/, String(val));
            total_male_control += val;
          } else {
            tableRow = tableRow.replace(/__female_control__/, String(val));
            total_female_control += val;
          }

          break;
      }
    }

    tableRow = tableRow
      .replace(/__case_total__/, String(cases))
      .replace(/__control_total__/, String(controls))
      .replace(/__all_sum__/, String(cases + controls));

    tableRows.push(tableRow);
  }

  tableRows.push(
    ROW_LAST.replace(/__age__/, "Total")
      .replace(/__male_case__/, String(total_male_case))
      .replace(/__female_case__/, String(total_female_case))
      .replace(/__male_control__/, String(total_male_control))
      .replace(/__female_control__/, String(total_female_control))
      .replace(/__case_total__/, String(total_male_case + total_female_case))
      .replace(
        /__control_total__/,
        String(total_male_control + total_female_control)
      )
      .replace(
        /__all_sum__/,
        String(
          total_male_case +
            total_female_case +
            total_male_control +
            total_female_control
        )
      )
  );

  return HTML.replace(/__health_facility__/, healthFacility).replace(
    /__rows__/,
    tableRows.join("")
  );
};

export default generateTable;
