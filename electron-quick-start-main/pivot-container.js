const pivotReport = {
    dataSource: {
      type: "csv",
      filename: "./data/cwurData.csv",
    },
    slice: {
      reportFilters: [
        {
          uniqueName: "country",
        },
      ],
      rows: [
        {
          uniqueName: "institution",
        },
      ],
      columns: [
        {
          uniqueName: "[Measures]",
        },
      ],
      measures: [
        {
          uniqueName: "world_rank",
          aggregation: "average",
        },
        {
          uniqueName: "publications",
          aggregation: "sum",
        },
        {
          uniqueName: "score",
          aggregation: "average",
        },
      ],
      sorting: {
        column: {
          type: "asc",
          tuple: [],
          measure: {
            uniqueName: "world_rank",
            aggregation: "average",
          },
        },
      },
    },
    options: {
      grid: {
        type: "classic",
      },
    },
    formats: [
      {
        name: "",
        decimalPlaces: 2,
      },
    ],
  };