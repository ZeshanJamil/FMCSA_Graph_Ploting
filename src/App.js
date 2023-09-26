import React from "react";
import "./App.css";

function App() {
  const GettopLabel = () => {
    const spacing = 3570;
    let counter = 0;
    const topLabels = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "N",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "M",
    ];

    return (
      <text x="0" y="-1000" fontWeight="bold">
        <tspan x={0} fontSize={800} fill="#586973">
          M
        </tspan>
        {topLabels.map((label) => {
          counter += 1;
          return (
            <tspan
              x={counter * spacing}
              fontSize={800}
              key={`${label}_${counter}`}
              fill="#586973"
            >
              {label}
            </tspan>
          );
        })}
      </text>
    );
  };

  const slightlyBiggerLineHeight = 1250;
  const verticalDividerSpaceBetween = 3600;
  const hrDividerSpaceBetween = 300;
  const sectionHeight = 2500;
  let currentVerticalSpacePosition = 0;
  let hrVerticalSpacePosition = 0;

  const passwordGenerator = (len) => {
    const length = len || 10;
    const string = "abcdefghijklmnopqrstuvwxyz"; // to upper
    const numeric = "0123456789";
    const punctuation = "@$!%*?&";
    let password = "";
    let character = "";
    while (password.length < length) {
      const entity1 = Math.ceil(string.length * Math.random() * Math.random());
      const entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
      const entity3 = Math.ceil(
        punctuation.length * Math.random() * Math.random()
      );
      let hold = string.charAt(entity1);
      hold = password.length % 2 === 0 ? hold.toUpperCase() : hold;
      character += hold;
      character += numeric.charAt(entity2);
      character += punctuation.charAt(entity3);
      password = character;
    }
    password = password
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
    return password.substr(0, len);
  };

  const getVerticalSpace = () => {
    currentVerticalSpacePosition += verticalDividerSpaceBetween;
    return currentVerticalSpacePosition;
  };

  const GetVerticalLine = () => {
    getVerticalSpace();
    return (
      <line
        key={`line_row_${passwordGenerator(5)}`}
        y2="10000"
        y1="0"
        x2={currentVerticalSpacePosition}
        x1={currentVerticalSpacePosition}
        stroke="#C9CCCE"
        stroke-width="50"
        fill="none"
      />
    );
  };

  const getSmallVerticalLineSpace = () => {
    hrVerticalSpacePosition += hrDividerSpaceBetween;
    return hrVerticalSpacePosition;
  };

  const resetCounter = () => {
    hrVerticalSpacePosition = 0;
  };

  const getSmallVerticalLine = (usSlightlyBigger = false, row = 1) => {
    const getStartingPointForThisLine = () =>
      usSlightlyBigger ? sectionHeight * row : sectionHeight * row;

    const getEndingPointForThisLine = () =>
      getStartingPointForThisLine() -
      (usSlightlyBigger ? slightlyBiggerLineHeight : 625);

    getSmallVerticalLineSpace();
    return (
      <line
        key={`line_row_${passwordGenerator(5)}`}
        y2={getEndingPointForThisLine().toString()}
        y1={getStartingPointForThisLine()}
        x2={hrVerticalSpacePosition}
        x1={hrVerticalSpacePosition}
        stroke="#C9CCCE"
        stroke-width="50"
      />
    );
  };

  const logData = [
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "4",
      eventDataCheckValue: "60",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688063",
      eventLongitude: "74.4509925",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "18",
      eventTime: "000000",
      eventType: "1",
      lineDataCheckValue: "DA",
      malfunctionIndicatorStatusForEld: "0",
      notes: "tsttetstteseg34456678 yfjfjy6777",
      state: "Punjab",
      totalEngineHoursDutyStatus: "0",
      totalVehicleMilesDutyStatus: "0",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "1",
      eventDataCheckValue: "E0",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688322",
      eventLongitude: "74.4509524",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "19",
      eventTime: "035054",
      eventType: "1",
      lineDataCheckValue: "2A",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "0",
      totalVehicleMilesDutyStatus: "0",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "2",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "1",
      eventDataCheckValue: "21",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688208",
      eventLongitude: "74.4509463",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "20",
      eventTime: "035149",
      eventType: "3",
      lineDataCheckValue: "C2",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "3.6",
      totalVehicleMilesDutyStatus: "188",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "1",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "1",
      eventDataCheckValue: "88",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688345",
      eventLongitude: "74.4509518",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "22",
      eventTime: "045325",
      eventType: "1",
      lineDataCheckValue: "22",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "3.7",
      totalVehicleMilesDutyStatus: "190",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "24",
      accumulatedVehicleMiles: "150",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "4",
      eventDataCheckValue: "2C",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688176",
      eventLongitude: "74.4509918",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "23",
      eventTime: "052421",
      eventType: "1",
      lineDataCheckValue: "CB",
      malfunctionIndicatorStatusForEld: "0",
      notes: "hbhghv",
      state: "Punjab",
      totalEngineHoursDutyStatus: "3.9",
      totalVehicleMilesDutyStatus: "191",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "2",
      eventDataCheckValue: "7C",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688062",
      eventLongitude: "74.4509939",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "25",
      eventTime: "052504",
      eventType: "3",
      lineDataCheckValue: "BB",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.1",
      totalVehicleMilesDutyStatus: "41",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "3",
      eventDataCheckValue: "C8",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688062",
      eventLongitude: "74.4509939",
      eventRecordOrigin: "1",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "26",
      eventTime: "052504",
      eventType: "1",
      lineDataCheckValue: "BB",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.1",
      totalVehicleMilesDutyStatus: "41",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "4",
      eventDataCheckValue: "39",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688008",
      eventLongitude: "74.4509935",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "27",
      eventTime: "052527",
      eventType: "1",
      lineDataCheckValue: "42",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.1",
      totalVehicleMilesDutyStatus: "41",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "2",
      eventDataCheckValue: "6C",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688346",
      eventLongitude: "74.4509417",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "28",
      eventTime: "053025",
      eventType: "3",
      lineDataCheckValue: "83",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.1",
      totalVehicleMilesDutyStatus: "41",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "6",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "3",
      eventDataCheckValue: "E0",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688346",
      eventLongitude: "74.4509417",
      eventRecordOrigin: "1",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "29",
      eventTime: "053025",
      eventType: "1",
      lineDataCheckValue: "8B",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.1",
      totalVehicleMilesDutyStatus: "41",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "1",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "4",
      eventDataCheckValue: "01",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688325",
      eventLongitude: "74.4509437",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "32",
      eventTime: "053304",
      eventType: "1",
      lineDataCheckValue: "BA",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.1",
      totalVehicleMilesDutyStatus: "47",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "2",
      eventDataCheckValue: "43",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.46881",
      eventLongitude: "74.4509781",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "33",
      eventTime: "053559",
      eventType: "3",
      lineDataCheckValue: "EA",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.2",
      totalVehicleMilesDutyStatus: "47",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "1",
      eventDataCheckValue: "AC",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688305",
      eventLongitude: "74.4509513",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "35",
      eventTime: "063705",
      eventType: "1",
      lineDataCheckValue: "BB",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.2",
      totalVehicleMilesDutyStatus: "47",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "3",
      eventDataCheckValue: "60",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688305",
      eventLongitude: "74.4509513",
      eventRecordOrigin: "1",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "36",
      eventTime: "063705",
      eventType: "1",
      lineDataCheckValue: "DA",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.2",
      totalVehicleMilesDutyStatus: "47",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "1",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "1",
      eventDataCheckValue: "85",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.468804",
      eventLongitude: "74.4509755",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "38",
      eventTime: "063726",
      eventType: "1",
      lineDataCheckValue: "5A",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.2",
      totalVehicleMilesDutyStatus: "47",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "3",
      eventDataCheckValue: "98",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688054",
      eventLongitude: "74.4509903",
      eventRecordOrigin: "1",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "39",
      eventTime: "065601",
      eventType: "1",
      lineDataCheckValue: "52",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.2",
      totalVehicleMilesDutyStatus: "47",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "1",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "1",
      eventDataCheckValue: "3C",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688054",
      eventLongitude: "74.4509967",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "41",
      eventTime: "065637",
      eventType: "1",
      lineDataCheckValue: "DB",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.2",
      totalVehicleMilesDutyStatus: "47",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "3",
      eventDataCheckValue: "39",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4687964",
      eventLongitude: "74.4509866",
      eventRecordOrigin: "1",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "52",
      eventTime: "072112",
      eventType: "1",
      lineDataCheckValue: "42",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.2",
      totalVehicleMilesDutyStatus: "47",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "1",
      eventDataCheckValue: "0C",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688017",
      eventLongitude: "74.4509847",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "71",
      eventTime: "072923",
      eventType: "1",
      lineDataCheckValue: "93",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.2",
      totalVehicleMilesDutyStatus: "47",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "3",
      eventDataCheckValue: "01",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688084",
      eventLongitude: "74.4509801",
      eventRecordOrigin: "1",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "72",
      eventTime: "074232",
      eventType: "1",
      lineDataCheckValue: "BA",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.2",
      totalVehicleMilesDutyStatus: "47",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "2",
      eventDataCheckValue: "7C",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688062",
      eventLongitude: "74.4509939",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "25",
      eventTime: "154933",
      eventType: "1",
      lineDataCheckValue: "BB",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.1",
      totalVehicleMilesDutyStatus: "41",
      userOrderNumberForRecordOriginator: "1",
    },
    {
      CYCLE_START_DATE: 1692686465,
      SHIFT_START_DATE: 1692686465,
      accumulatedEngineHours: "0",
      accumulatedVehicleMiles: "0",
      address: "0.48 mi NE of DHA Phase 6, PB",
      correspondingCmvOrderNumber: "1",
      dataDiagnosticEventIndicatorForDriver: "0",
      distanceSinceLastValidCoordinates: "0",
      eventCode: "2",
      eventDataCheckValue: "7C",
      eventDate: "082223",
      eventEndTime: "",
      eventLatitude: "31.4688062",
      eventLongitude: "74.4509939",
      eventRecordOrigin: "2",
      eventRecordStatus: "1",
      eventSequenceIdNumber: "93",
      eventTime: "194933",
      eventType: "3",
      lineDataCheckValue: "BB",
      malfunctionIndicatorStatusForEld: "0",
      notes: "",
      state: "Punjab",
      totalEngineHoursDutyStatus: "27.1",
      totalVehicleMilesDutyStatus: "41",
      userOrderNumberForRecordOriginator: "1",
    },
  ];

  const getLnStartingPoint = (eventType, status) => {
    let sectionLineStartingPoint = 1;
    if (eventType === "3" && status === "1") {
      sectionLineStartingPoint = 1;
    } else if (eventType === "3" && status === "2") {
      sectionLineStartingPoint = 4;
    } else {
      sectionLineStartingPoint = Number(status);
    }

    return sectionHeight * sectionLineStartingPoint;
  };

  const convertTimeToPixels = (eventTime) => {
    const hh = parseInt(eventTime.substring(0, 2), 10);
    const mm = parseInt(eventTime.substring(2, 4), 10);
    const ss = parseInt(eventTime.substring(4, 6), 10);

    const totalSeconds = hh * 3600 + mm * 60 + ss;
    return totalSeconds;
  };

  const transformDataForGraphLines = (graphData, index, completeData) => {
    const validGraphData = graphData;
    const x1 = convertTimeToPixels(validGraphData?.eventTime);

    const y1 =
      getLnStartingPoint(validGraphData?.eventType, validGraphData?.eventCode) -
      slightlyBiggerLineHeight;

    const y2 =
      getLnStartingPoint(validGraphData?.eventType, validGraphData?.eventCode) -
      slightlyBiggerLineHeight;

    let vy1 = 0;
    let x2 = 0;
    // check the order of next status and decide the starting point of vertical line that connects with another status
    if (completeData?.length > index + 1) {
      /**
       * After edit log change, we need to check "updated" property first against each log
       * get next log entry and check if that contains "updated" object, get its status otherwise status would be on top
       */
      const nextStatusCode = completeData[index + 1]?.eventCode;
      const nextStatusType = completeData[index + 1]?.eventType;
      const currentStatusCode = validGraphData?.eventCode;
      const currentStatusType = validGraphData?.eventType;
      x2 = convertTimeToPixels(completeData[index + 1]?.eventTime);
      if (
        !(
          nextStatusCode === currentStatusCode &&
          nextStatusType === currentStatusType
        )
      ) {
        vy1 =
          getLnStartingPoint(
            completeData[index + 1]?.eventType,
            completeData[index + 1]?.eventCode
          ) - slightlyBiggerLineHeight;
      }
    } else {
      x2 = convertTimeToPixels("235959");
    }

    const result = {
      horizLn: {
        x1,
        x2,
        y1,
        y2,
      },
      eventType: validGraphData?.eventType,
    };
    // no further status, so do not draw a vertical line afterwards
    if (vy1 > 0) {
      Object.assign(result, {
        vertLn: {
          x1: x2,
          x2,
          y1: vy1,
          y2,
        },
      });
    }

    return result;
  };

  const violations = [
    {
      startedAt: {
        eventDate: "082223",
        eventTime: "110000",
      },
      type: "EIGHT_HOUR_BREAK",
      endedAt: {
        eventDate: "082223",
        eventTime: "154600",
      },
    },
    {
      startedAt: {
        eventDate: "082223",
        eventTime: "140000",
      },
      type: "ELEVEN_HOUR_DRIVE",
      endedAt: {
        eventDate: "082223",
        eventTime: "154600",
      },
    },
    {
      startedAt: {
        eventDate: "082223",
        eventTime: "150000",
      },
      type: "FOURTEEN_HOUR_SHIFT",
      endedAt: {
        eventDate: "082223",
        eventTime: "154600",
      },
    },
  ];

  const graphLinesData = logData
    ?.filter((item) => item?.eventType === "1" || item?.eventType === "3")
    ?.map(transformDataForGraphLines);

  return (
    <div className="App">
      <div className="text-header">
        <h2>FMCSA Graph Plot</h2>
      </div>
      <div className="graph">
        <svg width="100%" height="250px" viewBox="-5000 0 96000 8500">
          <g id="timeLine" fontFamily="roboto">
            {GettopLabel()}
          </g>
          <g id="leftLabels">
            <text
              x="-2400"
              y="1600"
              font-size="800"
              fill="#586973"
              font-weight="bold"
            >
              OFF
            </text>
            <text
              x="-1900"
              y="4100"
              font-size="800"
              fill="#586973"
              font-weight="bold"
            >
              SB
            </text>
            <text
              x="-1600"
              y="6600"
              font-size="800"
              fill="#586973"
              font-weight="bold"
            >
              D
            </text>
            <text
              x="-2100"
              y="9100"
              font-size="800"
              fill="#586973"
              font-weight="bold"
            >
              ON
            </text>
          </g>
          <g id="rightLabels">
            <text
              x="87000"
              y="1600"
              font-size="800"
              fill="#586973"
              font-weight="bold"
            >
              18:40
            </text>
            <text
              x="87000"
              y="4100"
              font-size="800"
              fill="#586973"
              font-weight="bold"
            >
              00:00
            </text>
            <text
              x="87000"
              y="6600"
              font-size="800"
              fill="#586973"
              font-weight="bold"
            >
              00:19
            </text>
            <text
              x="87000"
              y="9100"
              font-size="800"
              fill="#586973"
              font-weight="bold"
            >
              05:00
            </text>
          </g>
          <g id="bars">
            <rect
              key="react1"
              height="2500"
              width="86400"
              y="0"
              x="0"
              stroke="#C9CCCE"
              stroke-width="50"
              fill="#fff"
            />
            <rect
              key="react2"
              height="2500"
              width="86400"
              y="2500"
              x="0"
              stroke="#C9CCCE"
              stroke-width="50"
              fill="#f0f0f5"
            />
            <rect
              key="react3"
              height="2500"
              width="86400"
              y="5000"
              x="0"
              stroke="#C9CCCE"
              stroke-width="50"
              fill="#fff"
            />
            <rect
              key="react4"
              height="2500"
              width="86400"
              y="7500"
              x="0"
              stroke="#C9CCCE"
              stroke-width="50"
              fill="#f0f0f5"
            />
          </g>
          <g id="verticalLine">
            {Array(23)
              .fill("")
              .map(() => GetVerticalLine())}
          </g>
          <g id="smallLines">
            {Array(4)
              .fill("")
              .map((item, index) => {
                const lines = Array(24)
                  .fill("")
                  .map(() => {
                    const smallLines = Array(11)
                      .fill("")
                      .map((smLn, smLnInd) =>
                        getSmallVerticalLine(smLnInd === 5, index + 1)
                      );

                    getSmallVerticalLineSpace();

                    return smallLines;
                  });
                resetCounter();
                return lines;
              })}
          </g>
          <g id="workingBlueLine">
            {graphLinesData &&
              graphLinesData?.map((data, index) => (
                <React.Fragment key={`id_${index + 1}`}>
                  <rect
                    className="highlight-rect"
                    x={Math.min(data?.horizLn.x1, data?.horizLn.x2)}
                    y={0}
                    width={data?.horizLn.x2 - data?.horizLn.x1}
                    height="160px"
                    fill="transparent"
                  />
                  <line
                    x1={data?.horizLn.x1}
                    x2={data?.horizLn.x2}
                    y1={data?.horizLn.y1}
                    y2={data?.horizLn.y2}
                    stroke="#2B5F8C"
                    fill="#2B5F8C"
                    strokeWidth={125}
                    strokeDasharray={data?.eventType === "3" ? "200,100" : ""}
                  />
                  <line
                    x1={data?.vertLn?.x1}
                    x2={data?.vertLn?.x2}
                    y1={data?.vertLn?.y1}
                    y2={data?.vertLn?.y2}
                    stroke="#2B5F8C"
                    fill="#2B5F8C"
                    strokeWidth={125}
                  />
                </React.Fragment>
              ))}
          </g>
          <g id="violationsRedLine">
            {violations &&
              violations?.map((item, index) => {
                let endedAtEventTime;
                if (item.endedAt.eventTime) {
                  endedAtEventTime = item.endedAt.eventTime;
                } else {
                  endedAtEventTime = "235959";
                }

                const x1 = convertTimeToPixels(item?.startedAt?.eventTime);
                const x2 = convertTimeToPixels(endedAtEventTime);
                const y1 =
                  getLnStartingPoint("1", "3") - slightlyBiggerLineHeight;
                const y2 =
                  getLnStartingPoint("1", "3") - slightlyBiggerLineHeight;
                return (
                  <line
                    key={`id_${index + 1}`}
                    x1={x1}
                    x2={x2}
                    y1={y1}
                    y2={y2}
                    stroke="#f2163e"
                    fill="#2B5F8C"
                    strokeWidth={125}
                  />
                );
              })}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
