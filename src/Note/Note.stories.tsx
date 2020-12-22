import Note from "./Note";
import React from "react";

export default {
    title: "Note",
    component: Note
};

export const Default = () => <Note type="tip" html="<p><b>Tip:</b> Make sure you use the correct size wick for <i>your</i> jar! If you don’t your candle won’t burn properly (I learned this the hard way). Be sure to ask someone when you are buying the wick to advise you on the correct size.</p>" />;
export const Info = () => <Note type="info" html="<p><b>Tip:</b> Make sure you use the correct size wick for your jar! If you don’t your candle won’t burn properly (I learned this the hard way). Be sure to ask someone when you are buying the wick to advise you on the correct size.</p>" />;
export const Warning = () => <Note type="warning" html="<p><b>Tip:</b> Make sure you use the correct size wick for your jar! If you don’t your candle won’t burn properly (I learned this the hard way). Be sure to ask someone when you are buying the wick to advise you on the correct size.</p>" />;
