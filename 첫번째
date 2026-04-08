function onEdit(e) {
  if (!e) return;

  const sheet = e.source.getActiveSheet();
  const sheetName = sheet.getName(); // 시트 이름 가져오기

  // ⭐ 여기 추가
  if (sheetName !== "raw data") return;
  const row = e.range.getRow();
  const col = e.range.getColumn();

  const COL_ID = 1;        // A열
  const COL_TRIGGER = 2;   // B열
  const COL_CREATED_DT = 5; // E열

  // 헤더 행 제외 + B열 수정일 때만
  if (row <= 1 || col !== COL_TRIGGER) return;

  const triggerCell = sheet.getRange(row, COL_TRIGGER);
  const idCell = sheet.getRange(row, COL_ID);
  const createdDtCell = sheet.getRange(row, COL_CREATED_DT);

  // B열이 비어있으면 아무것도 안 함
  if (triggerCell.getValue() === "") return;

  // 1) A열 id 자동 생성
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

  // 2) created_dt 자동 기록
  if (!createdDtCell.getValue()) {
    createdDtCell.setValue(new Date());
    createdDtCell.setNumberFormat("yyyy-mm-dd");
  }
}
