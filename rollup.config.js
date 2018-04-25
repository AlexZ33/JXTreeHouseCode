import ascii from "rollup-plugin-ascii";
import node from "rollup-plugin-node-resolve";
import json from 'rollup-plugin-json';

export default{
  input: "index",
  plugins: [node(), ascii(), json()],
  output:{
    extend: true,
    file: "dist/jxcode.js",
    format:"umd",
    indent: false,
    name:"jxcode"
  }
};
