import React from "react";
import CountrySelector from "../Item/CountrySelector";
import LanguageSelector from "../Item/LanguageSelector";

function JsonHeaderLayout() {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <CountrySelector />
            </td>
            <td>
              <LanguageSelector />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default JsonHeaderLayout;
