import{r as e,R as t}from"./vendor.b560c978.js";import{a}from"./agent.ae865355.js";function o(){const[o,n]=e.exports.useState(""),[r,l]=e.exports.useState([]),s=e.exports.useCallback((async e=>{n("..."),await a.addTodo(e),n(""),u()})),i=e.exports.useCallback((async()=>{console.log("reset"),await a.clear(),u()})),u=e.exports.useCallback((async()=>{const e=await a.showTodos();l(e)}));return e.exports.useEffect((()=>{u()}),[]),t.createElement("div",null,t.createElement("div",null,t.createElement("input",{className:"px-3 py-3 my-8 w-48 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 focus:ring-2 focus:ring-purple-300 ",value:o,onChange:e=>n(e.target.value),placeholder:"enter a todo item"})),t.createElement("button",{className:"px-8 py-2 mb-6 mx-3 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500","aria-label":"Increment value",onClick:()=>s(o)},"Insert"),t.createElement("button",{className:"px-8 py-2 mb-6 mx-3 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500","aria-label":"Increment value",onClick:()=>i()},"reset"),t.createElement("p",{className:"text-4xl text-purple-700"},"ToDo List"),r.length>0&&r.map(((e,a)=>t.createElement("p",{className:"text-base text-purple-700 my-3",key:a},e.description))))}export default o;
