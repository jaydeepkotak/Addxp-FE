export const SUPPORTS_PLANS = `
query{
  strapiSupportAndMaintenance{
    data{
      id
      attributes{
        support_plan_title{
          data{
            id
            attributes{
              IntroductionTitle{
                id
                Title
                Description
              }
              Column{
                id
                Title
              }
              support_values{
                data{
                  id
                  attributes{
                    RowTitle{
                      id
                      Title
                    }
                    RowData{
                      id
                      RowData
                      Link{
                        id
                        href
                        label
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
