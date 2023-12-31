import React from "react";

const Mail = () => {
  return (
    <section style={{ margin: 0, padding: 0 }}>
      <table
        role="presentation"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: 0,
          borderSpacing: 0,
          background: "#ffffff",
        }}
      >
        <tr>
          <td align="center" style={{ padding: 0 }}>
            <table
              role="presentation"
              style={{
                width: "602px",
                borderCollapse: "collapse",
                border: "1px solid #cccccc",
                borderSpacing: 0,
                textAlign: "left",
              }}
            >
              <tr>
                <td align="center" style={{ height: "200px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    width={"100%"}
                    style={{ display: "block" }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "36px 30px 10px 30px" }}>
                  <table
                    role="presentation"
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      border: 0,
                      borderSpacing: 0,
                    }}
                  >
                    <tr>
                      <td style={{ padding: "0 0 36px 0", color: "#153643" }}>
                        <p
                          style={{
                            margin: "0 0 12px 0",
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontFamily: "Arial, sans-serif",
                          }}
                        >
                          <div
                            style={{
                              border: "1px solid gray",
                              padding: "20px",
                            }}
                          >
                            <h1
                              style={{
                                fontSize: "24px",
                                margin: "0 0 20px 0",
                                fontFamily: "Arial, sans-serif",
                              }}
                            >
                              Got a new offer!
                            </h1>
                            <table
                              style={{
                                fontFamily: "arial, sans-serif",
                                borderCollapse: "collapse",
                                border: "2px solid gray",
                                width: "100%",
                              }}
                            >
                              <tr>
                                <th
                                  style={{
                                    padding: "18px",
                                    backgroundColor: "#dddddd",
                                    borderBottom: "1px solid white",
                                  }}
                                >
                                  Name
                                </th>
                                <td
                                  style={{
                                    padding: "18px",
                                    border: "2px solid #dddddd",
                                  }}
                                >
                                  ${"input.name"}
                                </td>
                              </tr>
                              <tr>
                                <th
                                  style={{
                                    padding: "18px",
                                    backgroundColor: "#dddddd",
                                    borderBottom: "2px solid white",
                                  }}
                                >
                                  Email
                                </th>
                                <td
                                  style={{
                                    padding: "18px",
                                    border: "1px solid #dddddd",
                                  }}
                                >
                                  ${"input.email"}
                                </td>
                              </tr>
                              <tr>
                                <th
                                  style={{
                                    padding: "18px",
                                    backgroundColor: "#dddddd",
                                    borderBottom: "2px solid white",
                                  }}
                                >
                                  Phone
                                </th>
                                <td
                                  style={{
                                    padding: "18px",
                                    border: "1px solid #dddddd",
                                  }}
                                >
                                  {"phone"}
                                </td>
                              </tr>
                              <tr>
                                <th
                                  style={{
                                    padding: "18px",
                                    backgroundColor: "#dddddd",
                                    borderBottom: "2px solid white",
                                  }}
                                >
                                  Message
                                </th>
                                <td
                                  style={{
                                    padding: "18px",
                                    border: "1px solid #dddddd",
                                  }}
                                >
                                  ${"input.message"}
                                </td>
                              </tr>
                            </table>
                          </div>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </section>
  );
};

export default Mail;
