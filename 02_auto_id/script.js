function onEdit(e) {
  if (!e) return;

  const sheet = e.source.getActiveSheet();
  const row = e.range.getRow();
  const col = e.range.getColumn();

  const COL_ID = 1;       // A열
  const COL_TRIGGER = 2;  // B열

  if (row <= 1 || col !== COL_TRIGGER) return;

  const triggerCell = sheet.getRange(row, COL_TRIGGER);
  const idCell = sheet.getRange(row, COL_ID);

  if (triggerCell.getValue() === "") return;

  if (!idCell.getValue()) {
    const lastRow = sheet.getLastRow();
    const idRange = sheet.getRange(2, COL_ID, Math.max(lastRow - 1, 1), 1).getValues();

    let maxId = 0;
    for (let i = 0; i < idRange.length; i++) {
      const value = idRange[i][0];
      if (typeof value === "number" && value > maxId) {
        maxId = value;
      }
    }

    idCell.setValue(maxId + 1);
  }
}
