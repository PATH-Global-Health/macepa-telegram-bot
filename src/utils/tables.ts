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
    let male_case = 0;
    let female_case = 0;
    let male_control = 0;
    let female_control = 0;

    for (var x: number = 0; x < FIELDS[i].length; x++) {
      const vals = FIELDS[i][x].split(",");
      if (x === 0) {
        tableRow = tableRow.replace(/__age__/, vals[1]);
      }

      const val = searchValue(rows, vals[0]);

      switch (vals[3].trim()) {
        case "Case":
          if (vals[2].trim() === "Male") {
            tableRow = tableRow.replace(/__male_case__/, String(val));
            male_case = val;
            total_male_case += val;
          } else {
            tableRow = tableRow.replace(/__female_case__/, String(val));
            female_case = val;
            total_female_case += val;
          }

          break;
        case "Control":
          if (vals[2].trim() === "Male") {
            tableRow = tableRow.replace(/__male_control__/, String(val));
            male_control = val;
            total_male_control += val;
          } else {
            tableRow = tableRow.replace(/__female_control__/, String(val));
            female_control = val;
            total_female_control += val;
          }

          break;
      }
    }

    const male_expected = male_case * 3 + male_control;
    const female_expected = female_case * 3 + female_control;
    const control_total_expected =
      (male_expected < 0 ? 0 : male_expected) +
      (female_expected < 0 ? 0 : female_expected);
    tableRow = tableRow
      .replace(
        /__male_control_expected__/,
        String(male_expected < 0 ? 0 : male_expected)
      )
      .replace(
        /__female_control_expected__/,
        String(female_expected < 0 ? 0 : female_expected)
      )
      .replace(/__case_total__/, String(male_case + female_case))
      .replace(/__control_total__/, String(male_control + female_control))
      .replace(/__control_total_expected__/, String(control_total_expected));

    tableRows.push(tableRow);
  }

  const male_expected = total_male_case * 3 + total_male_control;
  const female_expected = total_female_case * 3 + total_female_control;
  const control_total_expected =
    (male_expected < 0 ? 0 : male_expected) +
    (female_expected < 0 ? 0 : female_expected);

  tableRows.push(
    ROW_LAST.replace(/__age__/, "Total")
      .replace(/__male_case__/, String(total_male_case))
      .replace(/__female_case__/, String(total_female_case))
      .replace(
        /__male_control_expected__/,
        String(male_expected < 0 ? 0 : male_expected)
      )
      .replace(/__male_control__/, String(total_male_control))
      .replace(/__female_control__/, String(total_female_control))
      .replace(
        /__female_control_expected__/,
        String(female_expected < 0 ? 0 : female_expected)
      )
      .replace(/__case_total__/, String(total_male_case + total_female_case))
      .replace(
        /__control_total__/,
        String(total_male_control + total_female_control)
      )
      .replace(/__control_total_expected__/, String(control_total_expected))
  );

  return HTML.replace(/__health_facility__/, healthFacility).replace(
    /__rows__/,
    tableRows.join("")
  );
};

export default generateTable;
