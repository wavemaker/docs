import React, { useState } from "react";
import DocSidebar from "@theme-original/DocSidebar";

export default function DocSidebarWrapper(props) {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
     
      <DocSidebar {...props} />
       
    </>
  );
}
