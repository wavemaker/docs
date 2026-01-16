import React from "react";
import Layout from "@theme-original/Layout";

export default function LayoutWrapper(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          borderRadius: "0",
          padding: "12px",
          borderBottom: "1px solid #f5222d",
          backgroundColor: "#fff2f0",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            fontWeight: "600",
            fontSize: "16px",
            color: "#1f1f1f",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <svg viewBox="0 0 12 16" style={{ width: "20px", height: "20px", color: "#f5222d" }}>
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
              ></path>
            </svg>
          </span>
          This is Archive Documentation for WaveMaker v10 and v11
        </div>
        <div style={{ marginTop: "8px", color: "#595959" }}>
          <p style={{ margin: "0" }}>
            For newer WaveMaker versions (v12 and above), please visit{" "}
            <a href="https://next-docs.wavemaker.com/" target="_blank" style={{ color: "#1890ff", textDecoration: "none" }}>
              Latest WaveMaker Docs
            </a>
            .
          </p>
        </div>
      </div>
      <Layout {...props} />
    </>
  );
}
